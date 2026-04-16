import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "gradient";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg shadow-premium active:scale-95 font-semibold",
      gradient: "bg-gradient-primary text-white hover:opacity-90 shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] font-semibold",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-95 font-medium",
      outline: "border-2 border-border/60 bg-background hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:border-primary/40 text-foreground font-medium",
      ghost: "text-muted-foreground hover:text-foreground hover:bg-foreground/8 active:scale-95 font-medium",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm active:scale-95 font-semibold",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs rounded-lg",
      md: "h-11 px-6 text-sm rounded-lg",
      lg: "h-14 px-6 text-base rounded-lg",
      icon: "h-10 w-10 rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
