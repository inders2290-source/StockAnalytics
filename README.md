# Stock Analytics  

A web app built with **Next.js**, **TypeScript**, and **Tailwind CSS** that provides interactive stock data visualizations and analytics.  

---

## Live Demo  

[Visit the live app →](https://stock-analytics-rust.vercel.app)  

---

## Features  

- Display real-time or near real-time stock price charts  
- Comparison between different stocks  
- Interactive UI with responsive design  
- Tailwind CSS styling for fast and consistent UI  
- Data fetching from stock APIs  
- Clean modular architecture  

---

## Tech Stack  

- **Framework:** Next.js (React + SSR / SSG)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **API / Data Fetching:** (e.g. Fetch, Axios, or Next.js built-in)  
- **Deployment:** Vercel  

---

## Project Structure  

```text
Stock-Analytics/
├── public/                    # Static files, images, icons  
│   └── images/  
├── src/ (or root)  
│   ├── components/            # Reusable React / Next components  
│   ├── pages/                 # Next.js pages & API routes  
│   ├── styles/                # Tailwind / global CSS  
│   └── utils/                 # Utility functions, helpers, API clients  
├── .eslintrc.json             # ESLint config  
├── next.config.mjs            # Next.js configuration  
├── package.json               # Dependencies & scripts  
├── postcss.config.js  
├── tailwind.config.ts  
├── tsconfig.json  
└── vercel.json                # Rewrites / routing config  
