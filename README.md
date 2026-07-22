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

- **Photos** : toutes les images de `public/images/` sont des photos de stock
  fournies en attendant les vraies réalisations du client. Il suffit de
  remplacer les fichiers (mêmes noms) ou de changer les chemins dans
  `lib/data.ts` pour les vraies photos de chantiers/réalisations.
- **Téléphone / email / réseaux sociaux** : à mettre à jour dans `lib/data.ts`
  (objet `contactInfo`) — le numéro de téléphone est un placeholder.
- **Textes des valeurs / raisons de nous choisir** : rédigés à partir des
  titres du brief ; à remplacer par les textes exacts du dossier de marque
  si celui-ci en contient une version différente (`lib/data.ts`).
- **Favicon / logo** : aucun logo n'a été fourni ; le header utilise pour
  l'instant un logotype texte "Build & Brand Concept".

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
