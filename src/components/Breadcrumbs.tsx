import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Brotkrumen" className="text-[13px] text-white/50">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i < items.length - 1 ? (
                <Link href={item.href} className="hover:text-white">
                  {item.name}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="inline-block max-w-[280px] truncate align-bottom text-white/80 sm:max-w-md"
                >
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
