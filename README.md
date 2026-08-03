# Build & Brand Concept — Site vitrine

Site Next.js (App Router) + TypeScript + Tailwind CSS + GSAP/ScrollTrigger + Lenis + Framer Motion.

## Démarrage

```bash
npm install
npm run dev
```

Le site est alors accessible sur http://localhost:3000

## Build de production

```bash
npm run build
npm start
```

## Formulaire de contact (envoi d'email)

Le formulaire `/contact` envoie un email via [Resend](https://resend.com).

1. Créer un compte sur resend.com et générer une clé API.
2. Copier `.env.example` en `.env.local`.
3. Renseigner :
   - `RESEND_API_KEY` : la clé API Resend.
   - `CONTACT_TO_EMAIL` : l'adresse qui doit recevoir les messages du site.
4. Redémarrer `npm run dev`.

Tant que ces variables ne sont pas renseignées, le formulaire affiche un message
d'erreur clair au lieu de planter.

Par défaut, l'email est envoyé depuis `onboarding@resend.dev` (adresse de test
Resend). Pour envoyer depuis un domaine `@buildandbrandconcept.com`, il faut
vérifier ce domaine dans Resend puis mettre à jour le champ `from` dans
`app/api/contact/route.ts`.

## À personnaliser avant mise en ligne

- **Photos** : les images de `public/images/realisations/` (avant/après
  construction agence et rénovation villa) sont de **vraies photos de
  chantiers Build & Brand Concept**, confirmées par le client (03/08/2026) —
  ne pas les traiter comme du stock. Les autres images de `public/images/`
  (Hero, Manifeste, ambiances de section) restent des photos de stock
  décoratives ; à remplacer au fil de l'eau par de vraies photos d'équipe et
  de chantiers, mêmes noms de fichiers ou chemins à ajuster dans `lib/data.ts`.
- **Téléphone / email / réseaux sociaux** : déjà à jour dans `lib/data.ts`
  (objet `contactInfo`) — seul le lien Instagram reste un placeholder
  (`href: "#"`) en attendant la création du compte.
- **Textes des valeurs / raisons de nous choisir** : rédigés à partir des
  titres du brief ; à remplacer par les textes exacts du dossier de marque
  si celui-ci en contient une version différente (`lib/data.ts`).
- **Favicon / logo** : déjà en place (`public/logo/`, `public/favicon.ico`).

## Structure

```
app/            Pages (App Router) : /, /agence, /savoir-faire, /realisations, /contact
sections/       Sections de contenu, regroupées par page
components/ui/  Composants réutilisables (boutons, reveals, curseur, compteurs...)
components/layout/  Header, Footer, smooth scroll, transitions de page, préloader
lib/            Données de contenu (lib/data.ts) et polices (lib/fonts.ts)
public/images/  Photos placeholder
```

## Déploiement

Le projet est prêt pour Vercel : connecter le dépôt, renseigner les variables
d'environnement (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`) dans les paramètres du
projet Vercel, puis déployer.
