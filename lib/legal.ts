// Single source of truth for the data controller details shown on the
// privacy page (Art. 13(1)(a) GDPR: controller identity + contact details). The
// controller is a private individual, not a registered business, so `ico` stays
// unset; `address` and `ico` are rendered on the privacy page only when set.
export const CONTROLLER = {
  name: "Jan Bojko",
  email: "honzabojko@seznam.cz",
  city: "Písek u Jablunkova, Česká Republika",
  ico: undefined as string | undefined,
  address: "Písek 450, Písek u Jablunkova, 73984",
};

// How long contact-form messages are kept after the conversation ends.
export const RETENTION_MONTHS = 12;

export const PRIVACY_UPDATED = "2026-10-26";

export const PRIVACY_PATH = "/privacy";
