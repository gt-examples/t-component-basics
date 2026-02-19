import { T } from "gt-next";
import { LocaleSelector } from "gt-next";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {"<T>"} Component Basics
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/t-component-basics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <T>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Translating JSX in place
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed">
              The {"<T>"} component is the simplest way to translate content
              with General Translation. Wrap any block of JSX in {"<T>"} and
              the entire section gets translated as a unit, preserving
              structure and giving translators full context.
            </p>
          </section>
        </T>

        <T>
          <section className="mb-12">
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">
              How it works
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed mb-4">
              When you wrap content in {"<T>"}, General Translation extracts
              the text at build time, translates it, and swaps in the
              translated version at runtime. The JSX structure stays the
              same — only the text changes.
            </p>
            <p className="text-base text-neutral-400 leading-relaxed">
              This means your styles, layout, and component hierarchy are
              completely unaffected. Headings remain headings. Paragraphs
              remain paragraphs. Links keep their destinations.
            </p>
          </section>
        </T>

        <T>
          <section className="mb-12">
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">
              Wide wrapping for better translations
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed mb-4">
              Rather than wrapping each string individually, wrap larger
              sections of related content in a single {"<T>"}. This gives
              the translator more context and produces more natural results.
            </p>
            <p className="text-base text-neutral-400 leading-relaxed">
              Each section on this page is wrapped in one {"<T>"} component.
              The heading and all paragraphs within a section are translated
              together as a single unit, ensuring consistency.
            </p>
          </section>
        </T>

        <T>
          <section>
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">
              Try it yourself
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed">
              Use the language selector in the header to switch languages.
              Every piece of text on this page is translated using {"<T>"} —
              the headings, descriptions, and this very paragraph you are
              reading now.
            </p>
          </section>
        </T>
      </main>
    </div>
  );
}
