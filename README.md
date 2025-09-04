This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Project-specific notes

- File uploads are saved to a writable temp directory compatible with Vercel (`VERCEL_TMP_DIR`/`/tmp`).
- Node runtime is pinned to 20 via `package.json` engines and `vercel.json`.

### Environment variables

Set these in Vercel → Project → Settings → Environment Variables (and locally via `.env.local`):

- `SMTP_HOST` (e.g. smtp.mail.me.com)
- `SMTP_PORT` (e.g. 587)
- `SMTP_SECURE` ("false" when using STARTTLS on 587)
- `SMTP_REQUIRE_TLS` ("true")
- `SMTP_USER`
- `SMTP_PASS`
- `NOTIFY_EMAIL` (optional; fallback to `SMTP_TO`)
- `SMTP_FROM` (optional; fallback to `SMTP_USER`)
- `SMTP_TO` (optional; fallback to `NOTIFY_EMAIL` or `SMTP_USER`)

### CLI deploy (non-interactive)

If you have a Vercel token (recommended for CI/non-interactive):

```bash
cd trash-dashes
export VERCEL_ORG_ID=your_org_id
export VERCEL_PROJECT_ID=your_project_id
export VERCEL_TOKEN=your_token
npx vercel pull --yes --environment=production --token "$VERCEL_TOKEN"
npx vercel build --prod --token "$VERCEL_TOKEN"
npx vercel deploy --prebuilt --prod --token "$VERCEL_TOKEN"
```

Without a token, use the Vercel UI to import the repo or run `npx vercel` and follow the interactive login/linking flow.

### Connecting a custom domain

1. In Vercel → Project → Settings → Domains, click "Add" and enter your domain.
2. If bought via Vercel: confirm and set it as Primary.
3. If bought elsewhere: update DNS nameservers to Vercel or add the provided A/CNAME records at your registrar.
4. Wait for propagation; Vercel issues SSL automatically.
