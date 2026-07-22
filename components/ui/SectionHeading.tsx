import { cn } from "@/lib/utils";

export default function SectionHeading({
  n,
  eyebrow,
  title,
  align = "left",
  className,
}: {
  n: string;
  eyebrow?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-6 sm:gap-10",
        align === "center" ? "flex-col items-center text-center" : "items-start",
        className
      )}
    >
      <span className="section-number select-none font-serif text-3xl sm:text-5xl">{n}</span>
      <div className={align === "center" ? "" : "pt-1 sm:pt-2"}>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 className="max-w-2xl text-h2 font-serif font-light text-paper">{title}</h2>
      </div>
    </div>
  );
}
