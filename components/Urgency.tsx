import { siteConfig } from "@/lib/config";

export default function Urgency() {
  if (!siteConfig.showUrgency || !siteConfig.urgencyCopy) return null;

  return (
    <section className="bg-brand py-6 text-center text-white">
      <div className="section-shell">
        <p className="font-bold">{siteConfig.urgencyCopy}</p>
      </div>
    </section>
  );
}
