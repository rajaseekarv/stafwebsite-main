import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

const STORAGE_KEY = "stafrof:reduced-motion";

function applyReducedMotion(enabled: boolean) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("reduce-motion", enabled);
}

export function getInitialReducedMotion(): boolean {
  return false;
}

type Props = { className?: string };

export function ReducedMotionToggle({ className }: Props) {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialReducedMotion();
    setEnabled(initial);
    applyReducedMotion(initial);
    setMounted(true);

    // Respect live OS changes unless the user made an explicit choice.
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mql) return;
    const onChange = (e: MediaQueryListEvent) => {
      if (window.localStorage.getItem(STORAGE_KEY) === null) {
        setEnabled(e.matches);
        applyReducedMotion(e.matches);
      }
    };
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    applyReducedMotion(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Enable animations" : "Reduce animations"}
      title={enabled ? "Animations reduced — click to enable" : "Reduce animations"}
      className={
        "inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white " +
        (className ?? "")
      }
      suppressHydrationWarning
    >
      {enabled ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
      <span>{mounted ? (enabled ? "Animations: off" : "Animations: on") : "Animations"}</span>
    </button>
  );
}
