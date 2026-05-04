/**
 * Placeholder for Google AdSense units.
 * Replace with your actual ad component once approved.
 * Recommended: use data-ad-slot and data-ad-format for responsive ads.
 */
"use client";

/**
 * Placeholder for Google AdSense units.
 * Replace with your actual ad component once approved.
 * Recommended: use data-ad-slot and data-ad-format for responsive ads.
 */
import { useEffect, useRef } from "react";

type AdSlotProps = {
  id?: string;
  client?: string; // ca-pub-xxxx
  slot?: string; // data-ad-slot
  className?: string;
  "aria-label"?: string;
};

// Production-safe AdSlot: renders client/slot only on the client, uses a ref,
// and guards against double-initialization to avoid page errors and CLS.
export default function AdSlot(props: Readonly<AdSlotProps>) {
  const {
    id = "ad-slot",
    client,
    slot,
    className = "",
    "aria-label": ariaLabel = "Advertisement",
  } = props;
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only attempt to render if client+slot are provided and we're in the browser
    if (!client || !slot) return;
    if (!containerRef.current) return;

    // Prevent double-rendering
    const existing = containerRef.current.querySelector("ins.adsbygoogle");
    if (existing) return;

    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    // Prefer dataset for data- attributes
    ins.dataset.adClient = client;
    ins.dataset.adSlot = slot;
    ins.dataset.adFormat = "auto";
    ins.dataset.fullWidthResponsive = "true";

    containerRef.current.appendChild(ins);

    // If the AdSense script has initialized, push the slot; otherwise do nothing.
    const globalWithAds = globalThis as unknown as { adsbygoogle?: unknown[] };
    const adsArray =
      globalWithAds.adsbygoogle ?? (globalWithAds.adsbygoogle = []);
    if (Array.isArray(adsArray)) {
      adsArray.push({});
    }
  }, [client, slot]);

  return (
    <aside
      id={id}
      ref={containerRef}
      className={`ad-slot ${className}`}
      aria-label={ariaLabel}
    >
      {/* Visible fallback for users or when ads are disabled */}
      <noscript>
        <div className="text-xs text-slate-500">Advertisement</div>
      </noscript>
    </aside>
  );
}
