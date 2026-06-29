// Smooth-scroll to a section id, accounting for the fixed header.
export function smoothScrollTo(id: string, offset = 92) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = window.scrollY + el.getBoundingClientRect().top - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
