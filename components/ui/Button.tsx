import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", size = "md", children, ...props }: ButtonProps) {
  const base =
    "inline-flex min-w-[10rem] items-center justify-center font-light transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60";

  const sizeStyles =
    size === "sm"
      ? "rounded-md px-4 py-2 text-xs"
      : size === "lg"
      ? "rounded-xl px-7 py-3.5 text-base"
      : "rounded-lg px-6 py-3 text-sm";

  const secondaryStyles =
    "bg-transparent text-slate-100 ring-1 ring-white/50 transition-colors duration-450 ease-in-out hover:bg-white hover:!text-black";
  const primaryStyles =
    "bg-[#000D12] bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] text-slate-950 transition-colors duration-450 ease-in-out hover:bg-none hover:bg-white hover:!text-black";

  return (
    <a className={`${base} ${sizeStyles} ${variant === "secondary" ? secondaryStyles : primaryStyles} ${className}`} {...props}>
      {children}
    </a>
  );
}
