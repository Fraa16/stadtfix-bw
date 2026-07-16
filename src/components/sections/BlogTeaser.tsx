import Link from "next/link";
import { latestPosts } from "@/content/blog";
import { BlogCard } from "@/components/BlogCard";
import { Kicker } from "@/components/Kicker";

export function BlogTeaser() {
  const posts = latestPosts(3);
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Kicker n="05">Ratgeber</Kicker>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Antworten, bevor Sie anfragen
            </h2>
            <p className="mt-4 text-steel">
              Was kostet Taubenabwehr, was ist rechtlich erlaubt, welche Methode
              passt zu Ihrem Gebäude: Die häufigsten Fragen beantworten wir im
              Ratgeber.
            </p>
          </div>
          <Link
            href="/blog/"
            className="font-display text-[14px] font-bold uppercase tracking-[0.12em] text-accent hover:text-ink"
          >
            Alle Artikel →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
