# MyBio

Standalone portfolio landing page that mirrors the SchedulePlanner **Creator** tab.
All 15 deployed Vercel applications (SchedulePlanner 2.0, CCNA Academy, AIHub,
Technobiztrader, CodeCraftr, Phishforge, AIHub Browser, GA Real Estate, Techbench,
Congo Solution, IT Support Lab, Amazon IT Support Lab, Cloud Engineer Lab,
IAM & SSO 3D Lab, CyberGuard AI) are listed with live launch + GitHub links.

## Run locally

```bash
cd MyBio
npm install
npm run dev
```

The dev server starts at <http://localhost:5173>.

## Avatar

Drop your photo into `public/avatar.jpg` to override the placeholder. The page
falls back to a gradient monogram if the file is missing.

## Build for production

```bash
npm run build
npm run preview
```

The build output goes to `dist/`.
