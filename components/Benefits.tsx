import { siteConfig } from "@/lib/config";

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="m5 10.5 3.1 3.1L15 6.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Benefits() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="benefits-title">
      <div className="section-shell">
        <h2
          id="benefits-title"
          className="text-balance text-center text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl"
        >
          How You Benefit From This Consultation
        </h2>
        <div className="mx-auto mt-9 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.benefits.map((benefit) => (
            <article
              key={benefit}
              className="rounded-2xl border border-line bg-white p-5 shadow-[0_12px_35px_rgba(11,27,63,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(22,85,232,0.12)] sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand">
                <CheckIcon />
              </span>
              <p className="mt-4 text-base font-bold leading-7 text-ink sm:text-lg">
                {benefit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
