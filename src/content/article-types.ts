import type { Faq } from "@/content/segments";

/** Inline-Markdown in `md`-Feldern: **fett** und [Linktext](/pfad/) */
export type Block =
  | { t: "p"; md: string }
  | { t: "h2"; text: string }
  | { t: "hint"; md: string }
  | { t: "table"; head: string[]; rows: string[][] };

export type Article = {
  slug: string;
  intro: string;
  blocks: Block[];
  cta: { md: string; button: string };
  faq?: Faq[];
};
