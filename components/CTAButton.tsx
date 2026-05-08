"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "pink" | "ghost";

type Props = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "ref">;

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  pink: "btn-pink",
  ghost: "btn-ghost",
};

export default function CTAButton({
  variant = "primary",
  href,
  className,
  children,
  ...rest
}: Props) {
  const cls = `${variantClass[variant]}${className ? ` ${className}` : ""}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
