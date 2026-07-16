import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/content/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  const date = new Date(post.datePublished).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col overflow-hidden border border-line bg-white transition-colors hover:border-ink"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-mist">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={post.datePublished}
          className="text-[13px] uppercase tracking-[0.1em] text-steel"
        >
          {date}
        </time>
        <h3 className="mt-2 flex-1 font-display text-[17px] font-bold leading-snug tracking-tight">
          {post.title}
        </h3>
        <span className="mt-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
          Artikel lesen →
        </span>
      </div>
    </Link>
  );
}
