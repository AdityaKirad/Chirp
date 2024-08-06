import { Body, Container, Head, Heading, Html, Preview, Section, Tailwind, Text, Img } from "@react-email/components";

type Props = Readonly<{ otp: string }>;

export default function OTPEmail({ otp }: Props) {
  const Logo = `${process.env.URL}/logo-small.webp`;
  return (
    <Html>
      <Head />
      <Preview>Confirm your email address</Preview>
      <Tailwind>
        <Body className="m-0 bg-sky-50 font-sans">
          <Container className="h-screen max-w-lg bg-white p-4">
            <Section>
              <Img
                className="ml-auto mr-0 bg-black bg-cover bg-no-repeat italic text-white"
                style={{ shapeMargin: "12px" }}
                src={Logo}
                alt="Chirp"
                width={48}
                height={48}
              />
            </Section>
            <Heading>Confirm your email address</Heading>
            <Text className="text-lg">
              There’s one quick step you need to complete before creating your Chirp account. Let’s make sure this is
              the right email address for you — please confirm this is the right address to use for your new account.
            </Text>
            <Text className="mb-0 text-lg">Please enter this verification code to get started on Chirp:</Text>
            <strong className="text-3xl">{otp}</strong>
            <Text className="mt-0 text-lg">Verification codes expire after ten minutes.</Text>
            <Text className="text-lg">Thanks,</Text>
            <Text className="mt-0 text-lg">Chirp</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
