import { siteConfig } from "@/lib/config";

export default function Problem() {
  return (
    <section className="bg-surface-alt py-16 sm:py-20" aria-labelledby="problem-title">
      <div className="section-shell max-w-3xl">
        <h2 id="problem-title" className="sr-only">
          The challenge
        </h2>
        <ul className="space-y-4">
          {siteConfig.problem.map((line) => (
            <li
              key={line}
              className="flex items-start gap-3 text-lg font-semibold leading-7 text-ink sm:text-xl"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand"
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xl font-extrabold text-brand sm:text-2xl">
          There is a simpler way.
        </p>
      </div>
    </section>
  );
}
