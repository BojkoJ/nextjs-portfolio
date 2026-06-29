import next from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },
  ...next,
  // Pin the React version: ESLint 10 removed context.getFilename(), which
  // eslint-plugin-react's auto-detection still calls and crashes on.
  { settings: { react: { version: "19" } } },
];

export default eslintConfig;
