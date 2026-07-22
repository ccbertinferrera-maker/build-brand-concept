"use client";

export default function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line/10 py-8">
      <div className="animate-marquee flex w-max gap-16 motion-reduce:animate-none">
        {track.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-serif text-2xl text-paper/40 sm:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
