import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "li";
  direction?: "left" | "right" | "up";
};

/**
 * Scroll-triggered reveal: fades + lifts content into view exactly once.
 * Uses IntersectionObserver — purely presentational, no layout shift.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div", direction = "left" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  const revealClass = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";
  
  return (
    <Comp
      ref={ref as never}
      className={cn(revealClass, visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
