import { waLink } from "@/lib/whatsapp";

/**
 * Schwebender WhatsApp-Button unten rechts, auf allen Seiten sichtbar.
 * Öffnet einen wa.me-Deeplink mit vorbereiteter Begrüßung.
 */
export function WhatsAppButton() {
  const greeting = "Hallo StadtFix, ich habe eine Frage zur Taubenabwehr.";

  return (
    <a
      href={waLink(greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="StadtFix über WhatsApp kontaktieren"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.79 12.79 0 2.26.59 4.47 1.71 6.42L3.2 28.8l6.55-1.72a12.73 12.73 0 0 0 6.25 1.63h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.67Zm0 23.34h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.55 10.55 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55-.19-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.14-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
