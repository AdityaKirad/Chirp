import type { Verification, Onboarding } from "@prisma/client";
import { generateUniqueId } from "~/lib/utils";
import { db } from "~/services/db.server";

const getExpiresAt = () => new Date(Date.now() + 60 * 10 * 1000);

export async function isEmailUnique(email: string) {
  const isEmailTaken = await db.user.findUnique({
    where: {
      email,
    },
    select: { id: true },
  });
  return isEmailTaken ? true : false;
}

export async function createNewUser({
  userInfo,
  verification,
}: {
  userInfo: Pick<Onboarding, "name" | "email" | "dob">;
  verification: Omit<Verification, "tempAccountId">;
}) {
  return await db.onboarding.create({
    data: {
      id: generateUniqueId(),
      ...userInfo,
      expiresAt: getExpiresAt(),
      verification: { create: verification },
    },
    select: { id: true },
  });
}
