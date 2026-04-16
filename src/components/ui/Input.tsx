import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border-2 border-border/50 bg-card/50 dark:bg-foreground/8 px-4 py-2 text-sm font-medium transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:outline-none focus:border-primary/80 focus:bg-card dark:focus:bg-foreground/12 focus:shadow-lg focus:shadow-primary/10 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive/60 focus:border-destructive focus:shadow-destructive/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="px-1 text-[11px] font-bold uppercase tracking-widest text-destructive animate-fade-in">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
