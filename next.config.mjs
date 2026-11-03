/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tech-stack icons are self-hosted in /public/icons (no third-party requests,
  // see lib/icons.ts), so no next/image remote patterns are required here.

  // Baseline hardening (GDPR Art. 32). HSTS is already sent by the host (Vercel).
  // No CSP on purpose: Next/Framer Motion rely on inline styles/scripts and a
  // nonce-based policy would force dynamic rendering of every page.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
