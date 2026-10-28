import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "ghost";
  size?: "default" | "sm";
  block?: boolean;
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "gold",
  size = "default",
  block = false,
  href,
  isExternal,
  icon,
  ...props
}: ButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-bold uppercase tracking-[0.08em] transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] whitespace-nowrap overflow-hidden border";

  const sizeClasses =
    size === "sm" ? "h-[44px] px-5 text-[12px]" : "h-[54px] px-7 text-[14px]";

  const variantClasses =
    variant === "gold"
      ? "bg-[linear-gradient(100deg,#a8812e_0%,#f5d27a_45%,#d4af5c_60%,#9c7426_100%)] bg-[length:200%_100%] text-[#120c02] border-transparent shadow-[0_10px_40px_-10px_rgba(212,175,92,0.55)] hover:bg-[position:100%_0] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(245,210,122,0.7)] active:translate-y-0"
      : "border-white/25 text-[#f4efe6] bg-white/[0.03] backdrop-blur-md hover:border-[#d4af5c] hover:text-[#f5d27a] active:scale-[0.98]";

  const blockClasses = block ? "w-full" : "";

  const fullClassName = cn(baseClasses, sizeClasses, variantClasses, blockClasses, className);

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={fullClassName}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={fullClassName} {...props}>
      {content}
    </button>
  );
}
