import { trustItems } from "@/content/home";

export function TrustBar() {
  return (
    <section aria-label="Unsere Qualitätsversprechen" className="border-b border-line bg-mist">
      <div className="container-site grid gap-px overflow-hidden md:grid-cols-3">
        {trustItems.map((item, i) => (
          <div
            key={item.title}
            className={`py-7 pr-8 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""}`}
          >
            <h2 className="font-display text-[16px] font-bold leading-snug">
              {item.title}
            </h2>
            <p className="mt-1.5 text-[15px] text-steel">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
