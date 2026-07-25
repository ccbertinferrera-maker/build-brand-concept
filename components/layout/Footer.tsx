import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Facebook, Mail, Phone } from "lucide-react";
import { nav, tags, contactInfo } from "@/lib/data";

const socialIcons: Record<string, React.ElementType> = {
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
};

export default function Footer() {
  return (
    <footer className="border-t border-line/10 bg-ink-soft">
      <div className="mx-auto max-w-content px-gutter py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-paper">
              Build <span className="text-brass">&amp;</span> Brand Concept
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-muted">
              Architecture, construction et valorisation des espaces &mdash; {contactInfo.city}.
            </p>
            <div className="mt-6 flex gap-3 text-[11px] uppercase tracking-[0.2em] text-paper-dim">
              {tags.map((t, i) => (
                <span key={t}>
                  {t}
                  {i < tags.length - 1 && <span className="ml-3 text-brass/60">&middot;</span>}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-cursor
                    className="link-draw text-sm text-paper-muted hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-paper-muted">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 text-brass" />
                <div className="flex flex-col gap-1">
                  <a href={`mailto:${contactInfo.email}`} data-cursor className="link-draw hover:text-paper">
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brass" />
                <a href={`tel:${contactInfo.phone}`} data-cursor className="link-draw hover:text-paper">
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {contactInfo.social.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    data-cursor
                    className="flex h-9 w-9 items-center justify-center border border-line/15 text-paper-muted transition-colors hover:border-brass hover:text-brass"
                  >
                    {Icon && <Icon size={15} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line/10 pt-6 text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()}<Image src="/logo/Logo.png" alt="Logo" width={48} height={48} priority className="mr-2 inline-block align-middle" />
                Build <span className="text-brass">&amp;</span> Brand Concept. Tous droits réservés.</p>
          <p>Conakry, Guinée</p>
        </div>
      </div>
    </footer>
  );
}
