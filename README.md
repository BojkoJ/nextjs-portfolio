# Portfolio in Next.js

Personal bilingual (CZ/EN) portfolio of Jan Bojko: Next.js (App Router),
React, TypeScript, Tailwind CSS v4 and Framer Motion. The contact form sends
mail through [Resend](https://resend.com).

## Getting started

Developed and tested on Node.js 22.

```bash
npm ci
cp .env.example .env.local   # then set RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

| Script          | What it does                |
| --------------- | --------------------------- |
| `npm run dev`   | Development server          |
| `npm run build` | Production build            |
| `npm start`     | Serve the production build  |
| `npm run lint`  | ESLint                      |

## Privacy, accessibility, security

- The site sets **no cookies** and loads **no third-party resources** (fonts and
  icons are self-hosted). Only the chosen language/theme is kept in
  `localStorage`, and only after the visitor changes it. See `/privacy`.
- Targets WCAG 2.2 AA (skip link, keyboard-operable dialog, reduced-motion
  support, `lang` kept in sync with the selected language).
- Report vulnerabilities as described in [SECURITY.md](SECURITY.md).

## License

Source code: [MIT](LICENSE). Personal content, media and third-party assets are
**not** covered; see [NOTICE.md](NOTICE.md).
