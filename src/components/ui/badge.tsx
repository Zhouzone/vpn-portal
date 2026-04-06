import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        default:
          "border-[var(--border)] bg-[var(--panel-2)] text-[var(--muted-foreground)]",
        accent: "border-transparent bg-[var(--accent)] text-black",
        success: "border-transparent bg-[#b8ff3b] text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
