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
            "flex h-12 w-full rounded-2xl border-2 border-foreground/5 bg-secondary/30 px-4 py-2 text-sm font-medium transition-premium placeholder:text-muted-foreground focus-visible:outline-none focus:border-primary/40 focus:bg-background ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive/50 focus:border-destructive",
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
