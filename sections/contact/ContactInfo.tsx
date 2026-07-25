import { Mail, Phone, MapPin } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import { contactInfo } from "@/lib/data";

export default function ContactInfo() {
  return (
    <RevealText as="div" className="flex flex-col gap-10">
      <div>
        <p className="eyebrow mb-4">Coordonnées</p>
        <ul className="flex flex-col gap-4 text-base text-paper-muted">
          <li className="flex items-center gap-3">
            <MapPin size={16} className="text-brass" /> {contactInfo.city}
          </li>
          <li className="flex items-start gap-3">
            <Mail size={16} className="mt-1 text-brass" />
            <div className="flex flex-col gap-1">
              <a href={`mailto:${contactInfo.email}`} data-cursor className="link-draw hover:text-paper">
                {contactInfo.email}
              </a>
              <a href={`mailto:${contactInfo.infoEmail}`} data-cursor className="link-draw hover:text-paper">
                {contactInfo.infoEmail}
              </a>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={16} className="text-brass" />
            <a href={`tel:${contactInfo.phone}`} data-cursor className="link-draw hover:text-paper">
              {contactInfo.phone}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="eyebrow mb-4">Réseaux</p>
        <ul className="flex flex-col gap-2">
          {contactInfo.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} data-cursor className="link-draw text-base text-paper-muted hover:text-paper">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </RevealText>
  );
}
