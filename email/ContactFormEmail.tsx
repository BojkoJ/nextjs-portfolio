import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nová zpráva z portfolia</Preview>
      <Tailwind>
        <Body className='bg-gray-100'>
          <Container>
            <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>
                Máte tuto zprávu z kontaktního formuláře
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Email přišel od {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
