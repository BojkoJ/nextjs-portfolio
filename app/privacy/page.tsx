import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy · Jan Bojko",
  description:
    "How personal data is processed on the portfolio of Jan Bojko: contact form, hosting, cookies and your GDPR rights.",
};

export default function Page() {
  return <PrivacyPage />;
}
