import type { Metadata } from "next";
import Header from "@/components/Header";
import { siteConfig, whatsappMessage } from "@/lib/config";

export const metadata: Metadata = {
  title: "Thank You | chefkeshav",
  robots: {
    index: false,
    follow: false,
  },
};

function getVimeoEmbedUrl(url: string) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const videoId = parsed.pathname.split("/").filter(Boolean).pop();
    return videoId ? `https://player.vimeo.com/video/${videoId}` : "";
  } catch {
    return "";
  }
}

export default function ThankYouPage() {
  const vimeoEmbedUrl = getVimeoEmbedUrl(siteConfig.vimeoUrl);
  const whatsappUrl = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : "";

  // TODO: Keep this page unpublished until the form is connected to a working backend.
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-88px)] bg-[radial-gradient(circle_at_50%_15%,rgba(22,85,232,0.12),transparent_32%),linear-gradient(180deg,#ffffff_0%,#eaf1ff_100%)] px-4 py-12 sm:py-16">
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-[clamp(2.35rem,8vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-ink">
            <span className="text-brand">Congratulations!</span> Your Request Is In.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg font-semibold leading-8 text-body sm:text-xl">
            Thanks for booking your free consultation. Here is what happens next.
          </p>

          {vimeoEmbedUrl && (
            <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_48px_rgba(22,85,232,0.12)]">
              <iframe
                src={vimeoEmbedUrl}
                title="What happens next"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}

          <ol className="mx-auto mt-9 max-w-2xl space-y-4 text-left">
            {[
              "We review your business details.",
              "We contact you on WhatsApp to confirm your call.",
              "We talk one-to-one and give you your customized plan.",
            ].map((step, index) => (
              <li key={step} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-[0_10px_30px_rgba(11,27,63,0.05)] sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft font-extrabold text-brand">
                  {index + 1}
                </span>
                <span className="font-bold leading-6 text-ink">{step}</span>
              </li>
            ))}
          </ol>

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-whatsapp px-7 py-3.5 text-base font-extrabold text-white shadow-[0_14px_32px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-whatsapp sm:w-auto sm:min-w-72"
            >
              Connect Me on WhatsApp
            </a>
          )}
        </section>
      </main>
    </>
  );
}
