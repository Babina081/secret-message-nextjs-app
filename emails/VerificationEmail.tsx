import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerficationEmailProps {
  username: string;
  otp: string;
}
export default function VerificationEmail({
  username,
  otp,
}: VerficationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification code</title>
      </Head>
      <Preview>Here is your verification code</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering. Please use the following code to verify
            your email.
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
          <Text>
            If you did not request this code, Please ignore this email
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
