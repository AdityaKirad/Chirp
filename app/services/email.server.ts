import { renderAsync } from "@react-email/components";
import { Resend } from "resend";

const resend = new Resend(process.env.Resend_API_KEY);

export async function sendEmail({
  react,
  ...options
}: {
  to: string | Array<string>;
  subject: string;
} & ({ html: string; text?: string; react?: never } | { html?: never; text?: never; react: React.ReactElement })) {
  const from = "Chirp <onboarding@resend.dev>";

  const email = {
    from,
    ...options,
    ...(react ? await renderReactEmail(react) : null),
  };

  return await resend.emails.send({
    from: email.from,
    to: email.to,
    subject: email.subject,
    html: email.html || undefined,
    text: email.text || "",
  });
}

async function renderReactEmail(element: React.ReactElement) {
  const [html, text] = await Promise.all([renderAsync(element), renderAsync(element, { plainText: true })]);
  return { html, text };
}
