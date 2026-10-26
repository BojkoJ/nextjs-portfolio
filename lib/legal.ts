// Single source of truth for the data controller details shown on the
// privacy page. Fill in `ico` and `address` (OSVČ — Art. 13(1)(a) GDPR asks for
// the controller's identity and contact details); they are rendered only when set.
export const CONTROLLER = {
  name: "Jan Bojko",
  email: "honzabojko@seznam.cz",
  city: "Písek u Jablunkova, Česká Republika",
  ico: undefined as string | undefined,
  address: undefined as string | undefined,
};

// How long contact-form messages are kept after the conversation ends.
export const RETENTION_MONTHS = 12;

export const PRIVACY_UPDATED = "2026-10-26";

export const PRIVACY_PATH = "/privacy";
