import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimaler Inline-Markdown-Renderer für Content-Texte:
 * unterstützt **fett** und [Linktext](/interner-pfad/).
 */
export function InlineMd({ md }: { md: string }) {
  const nodes: ReactNode[] = [];
  const tokens = md.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  tokens.forEach((token, i) => {
    if (!token) return;
    const bold = token.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      nodes.push(
        <strong key={i} className="font-semibold text-ink">
          {bold[1]}
        </strong>,
      );
      return;
    }
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      nodes.push(
        <Link
          key={i}
          href={link[2]}
          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          {link[1]}
        </Link>,
      );
      return;
    }
    nodes.push(token);
  });

  return <>{nodes}</>;
}
