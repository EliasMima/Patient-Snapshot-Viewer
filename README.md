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

# 🩺 Patient Snapshot Viewer

A minimal full-stack healthcare web app built with **Next.js (App Router)** and **Google Cloud Healthcare FHIR API**. It allows authenticated users to search for a patient by ID and view a snapshot of their clinical data.

---

## 🚀 Features

- 🔍 Search for a Patient using FHIR `Patient/{id}`
- 📋 View key patient data:
  - Demographics (name, gender, DOB)
  - Recent Observations (labs, vitals)
  - Last Encounter (visit info)
- 🔐 Secure API integration with **Google Cloud Healthcare API**
- ⚙️ Server-side token generation using **Google Service Accounts**
- ⚡ Built with **Next.js 14+ App Router** and **TypeScript**

---

## 🧱 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Google Cloud Healthcare API** (FHIR)
- **Axios** (for HTTP requests)
- **google-auth-library** (for service account authentication)

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/patient-snapshot-viewer.git
cd patient-snapshot-viewer


