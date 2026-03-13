/**
 * Placeholder for Google AdSense units.
 * Replace with your actual ad component once approved.
 * Recommended: use data-ad-slot and data-ad-format for responsive ads.
 */
type AdSlotProps = {
  id?: string;
  format?: "display" | "rectangle" | "horizontal" | "vertical";
  className?: string;
};

export default function AdSlot({
  id = "ad-slot",
  format = "display",
  className = "",
}: AdSlotProps) {
  return (
    <div
      id={id}
      className={`ad-slot ${className}`}
      role="presentation"
      aria-label="Advertisement"
    >
      {/* When using AdSense, uncomment and add your client + slot:
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXX"
        data-ad-slot="XXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      */}
      <span>Ad placeholder</span>
    </div>
  );
}
