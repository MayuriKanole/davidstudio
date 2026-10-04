import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "icon";
};

export function StudioButton({ children, className, variant = "primary", ...props }: Props) {
  return (
    <button className={cn("studio-button", `studio-button-${variant}`, className)} {...props}>
      {children}
    </button>
  );
}