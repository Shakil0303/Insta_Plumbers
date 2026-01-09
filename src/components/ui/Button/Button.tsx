import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
        variant === "primary"
          ? "bg-primary text-white hover:bg-primary-600"
          : "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        className
      )}
      {...props}
    />
  );
}
