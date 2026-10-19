import { siteConfig } from "@/lib/config";

export default function Process() {
  return (
    <section className="bg-surface-alt py-16 sm:py-24" aria-labelledby="process-title">
      <div className="section-shell">
        <h2
          id="process-title"
          className="text-balance text-center text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl"
        >
          Consultation Process
        </h2>
        <ol className="relative mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-[16.67%] right-[16.67%] top-7 hidden h-px bg-line md:block"
          />
          {siteConfig.process.map((step, index) => (
            <li key={step.title} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-xl font-extrabold text-white shadow-[0_9px_20px_rgba(22,85,232,0.22)]">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-base leading-7 text-body">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
