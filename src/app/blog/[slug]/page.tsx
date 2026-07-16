import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InlineMd } from "@/components/InlineMd";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema, faqPageSchema } from "@/lib/schema";
import { blogPosts, getPost } from "@/content/blog";
import { getArticle } from "@/content/articles";
import { site } from "@/content/site";
import type { Block } from "@/content/article-types";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.metaTitle} | StadtFix` },
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.t) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-14 border-t border-line pt-10 font-display text-2xl font-extrabold tracking-tight md:text-[28px]"
        >
          {block.text}
        </h2>
      );
    case "hint":
      return (
        <p key={i} className="mt-8 border border-line bg-mist p-5 text-[15px] text-steel">
          <InlineMd md={block.md} />
        </p>
      );
    case "table":
      return (
        <div key={i} className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-[560px] text-left text-[15px]">
            <thead>
              <tr className="bg-ink text-white">
                {block.head.map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3.5 font-display text-[12px] font-bold uppercase tracking-[0.1em]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {block.rows.map((row, r) => (
                <tr key={r} className="bg-white">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`px-5 py-3.5 ${c === 0 ? "font-semibold" : "text-steel"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <p key={i} className="mt-6 text-[17px] leading-relaxed text-steel">
          <InlineMd md={block.md} />
        </p>
      );
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const article = getArticle(slug);
  if (!post || !article) notFound();

  const date = new Date(post.datePublished).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          datePublished: post.datePublished,
          image: post.image.src,
        })}
      />
      {post.hasFaqSchema && article.faq && <JsonLd data={faqPageSchema(article.faq)} />}

      {/* Artikel-Kopf */}
      <header className="bg-ink text-white">
        <div className="container-site max-w-3xl py-14 md:py-20">
          <Breadcrumbs
            items={[
              { name: "Startseite", href: "/" },
              { name: "Ratgeber", href: "/blog/" },
              { name: post.title, href: `/blog/${post.slug}/` },
            ]}
          />
          <p className="mt-8 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
            Ratgeber
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-[14px] text-white/60">
            <time dateTime={post.datePublished}>{date}</time>
            {" · "}
            {site.founder}, StadtFix
          </p>
        </div>
      </header>

      <article className="py-12 md:py-16">
        <div className="container-site max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden border border-line">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Direct-Answer-Absatz (GEO) — nicht kürzen */}
          <p className="mt-10 border-l-2 border-accent pl-5 text-[18px] font-medium leading-relaxed">
            {article.intro}
          </p>

          {article.blocks.map(renderBlock)}

          {/* CTA */}
          <aside className="mt-14 border border-line bg-mist p-8">
            <p className="font-display text-xl font-bold tracking-tight">
              <InlineMd md={article.cta.md} />
            </p>
            <div className="mt-5">
              <LinkButton href="/kontakt/">{article.cta.button}</LinkButton>
            </div>
            <p className="mt-3 text-[13px] text-steel">
              Antwort innerhalb von 24 Stunden. Begehung und Angebot sind kostenlos.
            </p>
          </aside>

          {/* Autorenbox (E-E-A-T) */}
          <footer className="mt-10 flex items-center gap-5 border-t border-line pt-8">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center bg-ink font-display text-xl font-extrabold text-white"
              aria-hidden
            >
              S<span className="text-accent">F</span>
            </div>
            <div>
              <p className="font-display text-[15px] font-bold">{site.founder}</p>
              <p className="text-[14px] text-steel">
                <span className="placeholder-fact">{site.placeholders.yearsExperience}</span>{" "}
                Jahre Taubenabwehr in Baden-Württemberg · Gründer von StadtFix
              </p>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
