import Link from "next/link";
import { segments } from "@/content/segments";
import { site } from "@/content/site";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Entity-Satz (GEO) */}
          <div className="lg:col-span-2 max-w-md">
            <Wordmark />
            <p className="mt-5 text-[15px] leading-relaxed text-steel-light">
              {site.entitySentence}
            </p>
            <p className="mt-5 text-[15px] text-steel-light">
              {site.contact.street}, {site.contact.zipCity}
              <br />
              Telefon:{" "}
              <a href={`tel:${site.contact.phoneE164}`} className="hover:text-white">
                {site.contact.phoneDisplay}
              </a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </p>
          </div>

          {/* Einsatzbereiche */}
          <nav aria-label="Einsatzbereiche">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.15em] text-white/60">
              Einsatzbereiche
            </h2>
            <ul className="mt-4 space-y-2">
              {segments.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/taubenabwehr/${s.slug}/`}
                    className="text-[14px] text-steel-light hover:text-white"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Unternehmen */}
          <nav aria-label="Unternehmen">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.15em] text-white/60">
              StadtFix
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Taubenabwehr im Überblick", href: "/taubenabwehr/" },
                { label: "Über uns", href: "/ueber-uns/" },
                { label: "Ratgeber", href: "/blog/" },
                { label: "Kontakt", href: "/kontakt/" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-steel-light hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 font-display text-[13px] font-bold uppercase tracking-[0.15em] text-white/60">
              Rechtliches
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/impressum/" className="text-[14px] text-steel-light hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutzerklaerung/"
                  className="text-[14px] text-steel-light hover:text-white"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-dark pt-6 text-[13px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} StadtFix · Taubenabwehr in Baden-Württemberg</p>
          <p>3 Jahre Garantie auf jede Montage · Rostfreier Edelstahl · Tierschutzkonform</p>
        </div>
      </div>
    </footer>
  );
}
