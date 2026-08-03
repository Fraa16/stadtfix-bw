import { site } from "@/content/site";

/**
 * WhatsApp-Deeplinks (wa.me). Der Kunde bevorzugt WhatsApp-Nachrichten;
 * Telefonnummer als internationale Ziffernfolge ohne „+".
 */
export const waNumber = site.contact.phoneE164.replace(/\D/g, "");

export function waLink(text?: string) {
  const base = `https://wa.me/${waNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
