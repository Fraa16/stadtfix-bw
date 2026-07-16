import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 font-display font-semibold tracking-[0.08em] rounded-sm px-7 py-4 text-[13px] uppercase transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-deep",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  "outline-light":
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink",
};

type LinkButtonProps = {
  href: ComponentProps<typeof Link>["href"];
  variant?: Variant;
  children: ReactNode;
  className?: string;
  /** Pfeil ausblenden, wo er stört (z. B. sehr kurze Labels) */
  arrow?: boolean;
};

export function LinkButton({
  href,
  variant = "primary",
  children,
  className = "",
  arrow = true,
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && (
        <svg
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden
        >
          <path
            d="M1 7h11M8 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
