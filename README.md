# TTTL Shop — Astro + Sanity

A business storefront built with **Astro** and **Sanity CMS**. Admins can add product photos and descriptions via an embedded Sanity Studio.

## Quick Start

### 1. Create a free Sanity project

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and create a free account
2. Create a new project (any name)
3. Note your **Project ID** from the project dashboard
4. Under **API → CORS Origins**, add `http://localhost:4321` (with credentials allowed)

### 2. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and fill in your Sanity Project ID:

```
PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
PUBLIC_SANITY_DATASET=production
```

### 3. Install dependencies and run

```bash
npm install
npm run dev
```

### 4. Use the site

- **Storefront**: [http://localhost:4321](http://localhost:4321) — displays all products
- **Admin Studio**: [http://localhost:4321/admin](http://localhost:4321/admin) — add/edit products with photos and descriptions

## Project Structure

```
├── sanity.config.ts           # Sanity Studio configuration
├── src/
│   ├── components/
│   │   └── Studio.tsx         # Embedded Sanity Studio React component
│   ├── layouts/
│   │   └── Layout.astro       # Shared page layout
│   ├── pages/
│   │   ├── index.astro        # Product listing page
│   │   └── admin/
│   │       └── [...params].astro  # Sanity Studio admin route
│   └── sanity/
│       ├── client.ts          # Sanity client + image URL helper
│       └── schemaTypes/
│           ├── index.ts       # Schema registry
│           └── product.ts     # Product schema (name, photo, price, description)
```

## Tech Stack

- **Astro** — fast, content-focused web framework
- **Sanity** — structured content CMS (free tier)
- **React** — for the embedded Sanity Studio
- **Tailwind CSS** — utility-first styling
