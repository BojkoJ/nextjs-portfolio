import { Fragment } from "react";

// Renders **bold** markdown segments within an otherwise plain string.
export function RichText({ text }: { text: string }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        )
      )}
    </>
  );
}
