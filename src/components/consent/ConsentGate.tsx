"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  CONSENT_CHANGED_EVENT,
  isGranted,
  type OptionalCategory,
} from "@/lib/consent";

/**
 * Rendert `children` nur, wenn die angegebene Kategorie freigegeben ist.
 * Damit lassen sich künftige Drittanbieter-Einbettungen (z. B. Google Maps,
 * Analytics, Videos) DSGVO-konform erst nach Einwilligung laden.
 *
 * Beispiel:
 *   <ConsentGate category="marketing" fallback={<KartePlatzhalter />}>
 *     <GoogleMapsEmbed />
 *   </ConsentGate>
 */
export function ConsentGate({
  category,
  children,
  fallback = null,
}: {
  category: OptionalCategory;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const update = () => setGranted(isGranted(category));
    update();
    window.addEventListener(CONSENT_CHANGED_EVENT, update);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, update);
  }, [category]);

  return <>{granted ? children : fallback}</>;
}
