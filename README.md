# Phileya Susan Koruth — Portfolio

A professional biomedical engineering portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## Design

- **Aesthetic**: Rich burgundy/wine & gold — elegant, medical, professional
- **Fonts**: Playfair Display (headings) · Cormorant Garamond (body) · Jost (UI labels)
- **Sections**: Hero → About → Experience → Education → Projects → Research → Skills → Contact

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css     ← All CSS variables, base styles, utilities
│   ├── layout.tsx      ← Root layout with fonts & metadata
│   └── page.tsx        ← Main page (assembles all sections)
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Experience.tsx
    ├── Education.tsx
    ├── Projects.tsx
    ├── Research.tsx
    ├── Skills.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Customisation

All content is in the component files — no CMS or database needed.

- **Personal info**: Edit `About.tsx`, `Contact.tsx`, `Hero.tsx`
- **Experience**: Edit the `experiences` array in `Experience.tsx`
- **Projects**: Edit the `projects` array in `Projects.tsx`
- **Skills**: Edit the `skillGroups` array in `Skills.tsx`
- **Colors**: Edit CSS variables in `globals.css` (`:root` block)

## Deployment

Deploy to Vercel for zero-config hosting:

```bash
npx vercel
```

Or push to GitHub and connect via [vercel.com](https://vercel.com).
