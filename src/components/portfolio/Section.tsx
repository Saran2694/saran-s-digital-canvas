import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-24 md:py-32", className)}>
      <div className="mx-auto max-w-7xl px-4">
        {(eyebrow || title || description) && (
          <div className="mb-14 max-w-3xl">
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
