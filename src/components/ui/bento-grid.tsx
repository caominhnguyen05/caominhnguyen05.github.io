import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type BentoGridProps = ComponentPropsWithoutRef<"div">;

interface BentoCardProps extends ComponentPropsWithoutRef<"article"> {
  name: string;
  background: ReactNode;
  description: string;
  Icon?: ElementType;
  eyebrow?: string;
  badges?: ReactNode;
  actions?: ReactNode;
  href?: string;
  cta?: string;
}

function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn("grid w-full auto-rows-auto grid-cols-3 gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  eyebrow,
  badges,
  actions,
  href,
  cta,
  ...props
}: BentoCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-background",
        className,
      )}
      {...props}
    >
      {background}
      <div className="project-content">
        {eyebrow && (
          <span className="project-overline mono">
            {Icon && <Icon aria-hidden="true" />}
            {eyebrow}
          </span>
        )}
        <h3>{name}</h3>
        <p>{description}</p>
        {badges}
        {actions ? (
          <div className="project-actions">{actions}</div>
        ) : (
          href && (
            <div className="project-actions">
              <Button variant="link" asChild size="sm">
                <a href={href}>
                  {cta ?? "Learn more"}
                  <ArrowRightIcon aria-hidden="true" />
                </a>
              </Button>
            </div>
          )
        )}
      </div>
    </article>
  );
}

export { BentoCard, BentoGrid };
