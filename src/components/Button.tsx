import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold tracking-wide rounded-sm px-6 py-3.5 text-[14px] uppercase transition-colors";

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
};

export function LinkButton({
  href,
  variant = "primary",
  children,
  className = "",
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
