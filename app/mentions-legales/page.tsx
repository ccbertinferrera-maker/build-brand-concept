import type { Metadata } from "next";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Build & Brand Concept.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-ink py-32">
      <div className="mx-auto max-w-2xl px-gutter pt-16">
        <p className="eyebrow mb-4">Informations légales</p>
        <h1 className="font-serif text-h2 font-light text-paper">Mentions légales</h1>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-paper-muted">
          <div>
            <h2 className="mb-3 font-serif text-lg text-paper">Éditeur du site</h2>
            <p>
              Build &amp; Brand Concept &mdash; Architecture, construction, rénovation et design
              intérieur.
              <br />
              {contactInfo.city}.
              <br />
              Email :{" "}
              <a href={`mailto:${contactInfo.email}`} className="link-draw hover:text-paper">
                {contactInfo.email}
              </a>
              <br />
              Téléphone :{" "}
              <a href={`tel:${contactInfo.phone}`} className="link-draw hover:text-paper">
                {contactInfo.phone}
              </a>
            </p>
            <p className="mt-3 text-xs text-paper-dim">
              Immatriculation (RCCM / NIF) en cours de finalisation &mdash; mise à jour dès
              régularisation.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-lg text-paper">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw hover:text-paper"
              >
                vercel.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-lg text-paper">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logo, identité
              visuelle) est la propriété de Build &amp; Brand Concept, sauf mention contraire.
              Toute reproduction sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-lg text-paper">Données personnelles</h2>
            <p>
              Les informations transmises via le formulaire de contact (nom, email, téléphone,
              message) sont utilisées uniquement pour répondre à votre demande et ne sont
              transmises à aucun tiers à des fins commerciales. Pour toute question ou demande de
              suppression, contactez-nous à l&apos;adresse ci-dessus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
