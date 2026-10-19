import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_50%_22%,rgba(22,85,232,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#eaf1ff_100%)] px-4 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-4 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl sm:h-96 sm:w-96"
      />
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="fade-in text-balance text-[clamp(2.25rem,8.5vw,4.75rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-ink">
          <span className="text-brand">{siteConfig.hero.headlineLead}</span>{" "}
          {siteConfig.hero.headlineRest}
        </h1>
        <p className="fade-in-delay mx-auto mt-5 max-w-2xl text-balance text-lg font-semibold leading-8 text-ink sm:mt-6 sm:text-xl">
          {siteConfig.hero.subheadline}
        </p>
        <div className="fade-in-delay mx-auto mt-4 max-w-2xl space-y-1 text-base leading-7 text-body sm:text-lg sm:leading-8">
          {siteConfig.hero.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <a
          href="#book-call"
          className="fade-in-delay mt-7 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-brand px-7 py-3.5 text-base font-bold text-white shadow-[0_14px_32px_rgba(22,85,232,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand sm:w-auto sm:min-w-64"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}
