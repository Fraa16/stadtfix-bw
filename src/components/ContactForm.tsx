"use client";

import { useState } from "react";

/**
 * Kontaktformular (UI). Der Versand ist noch nicht angebunden —
 * TODO: an API-Route oder Formdienst (z. B. Formspree/Resend) anschließen,
 * sobald die Ziel-E-Mail-Adresse feststeht.
 */

const label =
  "block font-display text-[13px] font-bold uppercase tracking-[0.12em] text-ink mb-1.5";
const field =
  "w-full rounded-sm border border-line bg-white px-4 py-3 text-[16px] outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-line bg-mist p-8 text-center">
        <p className="font-display text-xl font-bold">Vielen Dank für Ihre Anfrage!</p>
        <p className="mt-2 text-steel">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen, meist direkt mit
          einem Terminvorschlag für die kostenlose Begehung.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: echten Versand anbinden (API-Route / Formdienst)
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
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-sm bg-accent px-8 py-3.5 font-display text-[14px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
        >
          Anfrage senden
        </button>
        <p className="mt-3 text-[13px] text-steel">
          Antwort innerhalb von 24 Stunden. Begehung und Angebot sind kostenlos
          und unverbindlich.
        </p>
      </div>
    </form>
  );
}
