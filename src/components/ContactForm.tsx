"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";

/**
 * Kontaktformular. Der Kunde bevorzugt WhatsApp: Beim Absenden wird aus den
 * Feldern eine strukturierte Nachricht gebaut und WhatsApp per wa.me-Deeplink
 * geöffnet. Als Alternative gibt es einen mailto-Link mit demselben Text.
 */

const label =
  "block font-display text-[13px] font-bold uppercase tracking-[0.12em] text-ink mb-1.5";
const field =
  "w-full rounded-sm border border-line bg-white px-4 py-3 text-[16px] outline-none transition-colors focus:border-accent";

/** Baut aus den Formularfeldern die strukturierte Anfrage-Nachricht. */
function buildMessage(form: HTMLFormElement) {
  const fd = new FormData(form);
  const val = (k: string) => (fd.get(k)?.toString() ?? "").trim();

  const lines = [
    "Anfrage über stadtfix-bw.de",
    "",
    `Name: ${val("name")}`,
    `Kontakt: ${val("contact")}`,
  ];
  if (val("who")) lines.push(`Ich bin: ${val("who")}`);
  if (val("affected")) lines.push(`Betroffen: ${val("affected")}`);
  lines.push("", val("message"));

  return lines.join("\n");
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-line bg-mist p-8 text-center">
        <p className="font-display text-xl font-bold">Fast geschafft!</p>
        <p className="mt-2 text-steel">
          Wir haben WhatsApp mit Ihrer Anfrage geöffnet: Bitte senden Sie die
          vorbereitete Nachricht dort noch ab. Wir melden uns innerhalb von 24
          Stunden, meist direkt mit einem Terminvorschlag.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(buildMessage(e.currentTarget)), "_blank", "noopener");
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name *
          </label>
          <input id="name" name="name" type="text" required className={field} />
        </div>
        <div>
          <label htmlFor="contact" className={label}>
            E-Mail oder Telefon *
          </label>
          <input id="contact" name="contact" type="text" required className={field} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="who" className={label}>
            Ich bin…
          </label>
          <select id="who" name="who" className={field} defaultValue="">
            <option value="" disabled>
              Bitte wählen
            </option>
            <option>Privatperson</option>
            <option>Unternehmen</option>
            <option>Hausverwaltung oder WEG</option>
            <option>Sonstiges</option>
          </select>
        </div>
        <div>
          <label htmlFor="affected" className={label}>
            Betroffen ist… <span className="font-normal text-steel">(optional)</span>
          </label>
          <select id="affected" name="affected" className={field} defaultValue="">
            <option value="" disabled>
              Bitte wählen
            </option>
            <option>Dach oder Dachrinne</option>
            <option>Balkon oder Terrasse</option>
            <option>PV-Anlage</option>
            <option>Halle oder Gewerbeobjekt</option>
            <option>Parkhaus</option>
            <option>Sonstiges</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={field}
          placeholder="Wo sitzen die Tauben, seit wann, was wurde schon versucht?"
        />
        <p className="mt-1.5 text-[13px] text-steel">
          Fotos der betroffenen Stellen beschleunigen unser Angebot — Sie können
          sie uns nach der Anfrage per E-Mail senden.
        </p>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-8 py-3.5 font-display text-[14px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
          >
            <svg viewBox="0 0 32 32" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
              <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.79 12.79 0 2.26.59 4.47 1.71 6.42L3.2 28.8l6.55-1.72a12.73 12.73 0 0 0 6.25 1.63h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.67Zm0 23.34h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.55 10.55 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55-.19-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.14-.29-.21-.61-.37Z" />
            </svg>
            Anfrage per WhatsApp senden
          </button>
          <a
            href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
              "Anfrage Taubenabwehr",
            )}`}
            onClick={(e) => {
              const form = e.currentTarget.closest("form");
              if (!form) return;
              e.preventDefault();
              const body = buildMessage(form);
              window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
                "Anfrage Taubenabwehr",
              )}&body=${encodeURIComponent(body)}`;
            }}
            className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-steel underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            oder per E-Mail senden
          </a>
        </div>
        <p className="mt-3 text-[13px] text-steel">
          Der Button öffnet WhatsApp mit Ihrer vorausgefüllten Anfrage. Antwort
          innerhalb von 24 Stunden. Begehung und Angebot sind kostenlos und
          unverbindlich.
        </p>
      </div>
    </form>
  );
}
