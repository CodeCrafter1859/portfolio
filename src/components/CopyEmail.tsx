import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "../constants/profile";

export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 4000);
  }
  return (
    <div className="mt-5">
      <button
        onClick={copy}
        className="group flex min-h-11 max-w-full items-center gap-3 rounded-full border border-white/15 bg-black/15 px-4 py-2 text-left text-sm text-zinc-200 transition-colors duration-300 hover:border-lime/60 hover:text-white motion-reduce:transition-none"
        aria-label="Copy email address"
      >
        {status === "copied" ? (
          <Check size={16} className="shrink-0 text-lime" aria-hidden="true" />
        ) : (
          <Copy
            size={16}
            className="shrink-0 transition-transform duration-300 motion-safe:group-hover:scale-110"
            aria-hidden="true"
          />
        )}
        <span className="break-all">{profile.email}</span>
      </button>
      <p role="status" className="mt-2 min-h-5 text-xs text-zinc-200">
        {status === "copied"
          ? "Email copied to clipboard."
          : status === "error"
            ? "Copy unavailable. Select the address above or use Get in touch."
            : ""}
      </p>
    </div>
  );
}
