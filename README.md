# T Component Basics

Learn the basics of the `<T>` component — wrap JSX in `<T>` and it gets translated automatically.

**[Live Demo](https://t-component-basics.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates the core `<T>` component from [General Translation](https://generaltranslation.com). It shows how to wrap sections of JSX in `<T>` for automatic translation, using wide wrapping for better translator context and more natural results.

## GT Features Used

- `<T>` — JSX translation
- `getGT` — Server-side string translations (metadata, aria-labels)
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/t-component-basics.git
cd t-component-basics
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
