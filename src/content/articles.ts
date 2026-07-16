import type { Article } from "@/content/article-types";
import { articlesPart1 } from "@/content/articles-1";
import { articlesPart2 } from "@/content/articles-2";

export const articles: Article[] = [...articlesPart1, ...articlesPart2];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
