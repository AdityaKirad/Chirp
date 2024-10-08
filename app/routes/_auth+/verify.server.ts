import { handleVerification as handleOnboardingVerification } from "./onboarding.server";
import { handleVerification as handeleResetPasswordVerification } from "./reset-password.server";
import {
  VerificationSchema,
  type VerificationType,
  redirectToQueryParam,
  targetQueryParam,
  typeQueryParam,
} from "./verify";
import type { Submission } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { json } from "@remix-run/node";
import type { z } from "zod";
import { generateUniqueId, getExpirationDate } from "~/lib/utils";
import { db } from "~/services/db.server";
import { generateTOTP, verifyTOTP } from "~/services/totp.server";

export type VerifyFunctionArgs = {
  request: Request;
  submission: Submission<z.input<typeof VerificationSchema>, string[], z.output<typeof VerificationSchema>>;
  body: FormData | URLSearchParams;
};

function getDomainURl(request: Request) {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host") ?? new URL(request.url).host;
  const protocol = request.headers.get("X-Forwarded-Proto") ?? "http";
  return `${protocol}://${host}`;
}

function getRedirectUrl({
  redirectTo,
  request,
  target,
  type,
}: {
  redirectTo?: string;
  request: Request;
  target: string;
  type: VerificationType;
}) {
  const url = new URL("/verify", getDomainURl(request));
  url.searchParams.set(targetQueryParam, target);
  url.searchParams.set(typeQueryParam, type);
  if (redirectTo) {
    url.searchParams.set(redirectToQueryParam, redirectTo);
  }
  return url;
}

export async function prepareVerification({
  period,
  redirectTo,
  request,
  target,
  type,
}: {
  period: number;
  redirectTo?: string;
  request: Request;
  target: string;
  type: VerificationType;
}) {
  const redirectUrl = getRedirectUrl({ request, redirectTo, target, type });
  const { otp, ...verificationConfig } = await generateTOTP({
    algorithm: "SHA-256",
    period,
  });
  const verificationData = {
    id: generateUniqueId(),
    type,
    target,
    ...verificationConfig,
    expiresAt: getExpirationDate(verificationConfig.period),
  };
  await db.verification.upsert({
    where: { target_type: { target, type } },
    create: verificationData,
    update: verificationData,
  });
  return { otp, redirectUrl };
}

export async function isCodeValid({ otp, target, type }: { otp: string; target: string; type: VerificationType }) {
  const config = await db.verification.findUnique({
    where: { target_type: { target, type }, AND: { expiresAt: { gt: new Date() } } },
    select: { algorithm: true, charSet: true, digits: true, period: true, secret: true },
  });
  if (!config) return false;
  const isValid = verifyTOTP({ otp, ...config });
  if (!isValid) return false;
  return true;
}

export async function validateRequest(request: Request, body: FormData | URLSearchParams) {
  const submission = await parseWithZod(body, {
    schema: VerificationSchema.superRefine(async (data, ctx) => {
      const isValid = await isCodeValid({
        otp: data.otp,
        target: data[targetQueryParam],
        type: data[typeQueryParam],
      });
      if (!isValid) {
        ctx.addIssue({
          code: "custom",
          path: ["otp"],
          message: "Invalid code",
        });
        return;
      }
    }),
    async: true,
  });

  if (submission.status !== "success") return json(submission.reply());

  const { value: submissionValue } = submission;

  async function deleteVerification() {
    await db.verification.delete({
      where: {
        target_type: {
          target: submissionValue[targetQueryParam],
          type: submissionValue[typeQueryParam],
        },
      },
    });
  }

  switch (submissionValue[typeQueryParam]) {
    case "onboarding":
      await deleteVerification();
      return await handleOnboardingVerification({ request });
    case "reset-password":
      await deleteVerification();
      return await handeleResetPasswordVerification({ request, body, submission });
  }
}
