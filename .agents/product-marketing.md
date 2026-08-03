# Contexte produit — Build & Brand Concept

## Entreprise
Build & Brand Concept est une entreprise d'architecture, construction, rénovation et design intérieur basée à Conakry, Guinée, fondée en 2020. Active en Guinée et en Côte d'Ivoire (rapprochement sectoriel CI-Guinée engagé en juin 2026). Équipe composée à plus de 90 % de professionnels guinéens, onze corps de métier intégrés (architectes, designers d'intérieur, conducteurs de travaux, maçons, staffeurs, peintres, carreleurs, plombiers, électriciens, menuisiers, techniciens spécialisés). Innovation différenciante : biodigesteurs / biogaz appliqués à l'habitat.

Références clients citées : BRD Build, AR.Sketch, Chez Alino (+ "plusieurs autres structures de référence").

## Positionnement de marque
Haut de gamme, sobre, architectural, sérieux mais moderne.
Signature : « Nous ne construisons pas des bâtiments. Nous façonnons des manières de vivre. »
Promesse : un interlocuteur unique, du premier croquis à la remise des clés ; délais et budgets tenus ; gestion rigoureuse et transparente.

## Cible
- Particuliers premium (construction, rénovation, design intérieur haut de gamme) à Conakry et en sous-région.
- Entreprises / bureaux ayant des projets d'aménagement.
- Promoteurs immobiliers et bailleurs.
- À terme : investisseurs et institutionnels (Guinée + Côte d'Ivoire), marchés publics/appels d'offres une fois les agréments en règle.

## Ton de marque
Sobre, assuré, jamais tape-à-l'œil. Phrases courtes à fort impact pour les titres, texte courant plus posé et explicatif. Vocabulaire : « façonner », « exigence », « attention portée à chaque détail », « chaîne de responsabilité ». Aucune emphase commerciale agressive — la confiance se construit par la preuve et la sobriété, pas par la promesse criée.

## Direction artistique (à respecter strictement dans tout contenu produit)
- Fond sombre dominant (noir/anthracite « ink »), accent or/laiton (« brass », proche #C9A66B).
- Typographie serif élégante (Fraunces) pour les titres, sans-serif neutre (Inter) pour le texte courant.
- Sections numérotées façon dossier de presse : 01, 02, 03...
- Grand espace négatif, aucune esthétique « template IA générique » (pas de dégradés violet/bleu, pas de cartes à bordures arrondies partout).
- Stack : Next.js (App Router) + TypeScript + Tailwind + GSAP/ScrollTrigger + Lenis + Framer Motion.

## État actuel du site (build-brand-concept/, Next.js, multi-pages)
Pages existantes : Accueil (Hero, Manifeste, Pourquoi nous choisir teaser, CTA band), Agence (Qui sommes-nous, Notre histoire, Notre vision, Nos valeurs), Savoir-faire (Nos métiers, Innovation biogaz), Réalisations (Avant/Après avec slider, Rendus 3D), Contact (formulaire + coordonnées + Pourquoi nous choisir complet).

**Le site est EN LIGNE** à l'adresse réelle **https://buildbrandconcept.com** (sans "and"). Vérifié le 03/08/2026 par visite directe des pages Accueil, Agence, Réalisations, Contact.

**✅ Désynchronisation résolue (03/08/2026).** Le dépôt GitHub `ccbertinferrera-maker/build-brand-concept` est **public** et fait autorité (3 commits, alors que ce dossier local était resté bloqué sur le commit initial). Il a été cloné et les fichiers à jour (`app/layout.tsx`, `lib/data.ts`, `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `sections/contact/ContactInfo.tsx`, `public/favicon.ico`, `public/logo/`) ont été copiés dans ce dossier local, qui est maintenant aligné avec la production. Un logo image (plus un simple logotype texte) et un favicon ont été ajoutés entre-temps côté GitHub.

Contact à jour (déjà en place, ne plus modifier sans raison) : téléphone `+224 627 30 01 10`, emails `contact@buildbrandconcept.com` et `info@buildbrandconcept.com`, LinkedIn et Facebook actifs. **Seul le lien Instagram reste cassé (`href: "#"`)** — vérifié identique en local et sur le site live.

**Note pour toute future session** : ce dossier local n'est PAS connecté à Git de façon fiable (le mount Windows empêche certaines opérations git comme `pull`/lock de fichiers). Pour resynchroniser à l'avenir, cloner `https://github.com/ccbertinferrera-maker/build-brand-concept.git` dans le sandbox puis copier les fichiers modifiés par-dessus ce dossier, plutôt que d'utiliser `git pull` directement ici.

Fondations techniques : metadata SEO par page en place (title/description/OG en français uniquement, pas d'image OG). `metadataBase` dans `app/layout.tsx` est **déjà corrigé** vers `https://buildbrandconcept.com` (le bon domaine) côté GitHub/production — ce n'est plus un problème. Pas de JSON-LD/schema.org détecté sur les pages live ni dans le code GitHub. `robots.txt` et `sitemap.xml` sont absents à la fois du dépôt et du site live (réponse vide).

**✅ Photos de la rénovation villa remplacées par de meilleures photos réelles (03/08/2026)**, fournies par le client dans `public/realisation/Traveaux avant apres/Renovation/`. Mêmes chemins/noms de fichiers conservés (`renovation-avant-1.jpg`, `renovation-avant-2.jpg`, `renovation-apres-1.jpg`, `renovation-apres-2.jpg`, `renovation-apres-3.jpg`), donc aucun changement de code nécessaire, juste les fichiers image. Les anciennes versions sont sauvegardées dans `/tmp/bbc-old-renov-backup` (sandbox, non persistant). Deux photos fournies non utilisées restent disponibles dans le dossier source pour du contenu Instagram (`WhatsApp Image ... 46 (2).jpeg`, `... 47 (3).jpeg`). Le dossier `public/realisation/` (3D + Construction agence) contient potentiellement d'autres photos réelles à vérifier plus tard.

**✅ Données chantiers confirmées par le client (03/08/2026), ajoutées dans `lib/data.ts` et affichées sur la page Réalisations** : Rénovation d'une villa — Résidentiel, 500 m², 8 mois de travaux. Construction d'une agence — Tertiaire, 12 mois (≈1 an) ; surface non communiquée (« plus petite » que la villa, pas de chiffre précis) — ne pas en inventer un si besoin de compléter plus tard, redemander au client.

**✅ Photos de Réalisations confirmées réelles (03/08/2026).** Contradiction résolue entre le README (qui affirmait à tort que toutes les images étaient du stock) et le commentaire du code (`lib/data.ts`, « Projets reels "avant / apres" (photos fournies par le client) »). Condé a confirmé directement : les photos de `public/images/realisations/` (construction agence + rénovation villa, avant/après, étapes de chantier) sont de vraies réalisations de Build & Brand Concept. Le README a été corrigé en conséquence. Seules les images d'ambiance hors Réalisations (Hero, Manifeste, fonds de section) restent du stock décoratif, sans problème tant qu'elles ne sont pas présentées comme des projets réalisés.

## Problèmes déjà identifiés (diagnostic interne, comité de direction fictif, août 2026)
Ces points sont **avérés** dans le code et les documents internes du projet — à traiter en priorité par tout skill travaillant sur ce site :

1. **Lien Instagram mort** — `lib/data.ts` : `{ label: "Instagram", href: "#" }`. Aucun compte actif connecté. Critique, 7 jours.
2. **Portfolio trop réduit** — seulement 2 réalisations avant/après + rendus 3D génériques, sans surface/durée/budget/typologie.
3. **Aucun témoignage client** — les 3 références (BRD Build, AR.Sketch, Chez Alino) ne sont accompagnées d'aucune citation ni preuve chiffrée.
4. **Site uniquement en français** — pas de version anglaise, alors que la cible inclut investisseurs/bailleurs internationaux et le marché ivoirien.
5. **Marque non incarnée** — aucune page équipe/fondateurs, pas de visage ni de parcours.
6. **Aucune preuve sociale digitale** — pas de fiche Google Business, pas d'avis.
7. **Aucun contenu récurrent** — pas de rubrique actualités / journal de chantier (impact SEO direct).
8. **Pas de page carrières** — alors que la main-d'œuvre qualifiée est rare sur le marché guinéen (angle marque employeur).
9. **Aucune preuve administrative affichée** — pas de RCCM/NIF/agréments visibles (impacte la crédibilité B2B/institutionnelle, à mentionner uniquement quand les preuves existeront réellement — ne jamais inventer de mentions légales ou d'assurances non confirmées).

## Plan d'action interne déjà défini (à respecter, ne pas dupliquer)
L'entreprise a déjà un plan d'action consolidé sur 4 horizons (0-30j, 60-90j, 6 mois, 12 mois) couvrant administratif, commercial, financier, communication et RH. Côté communication (le plus pertinent pour le site) :
- 0-30j : activer Instagram, corriger le lien mort, calendrier éditorial.
- 60-90j : portfolio enrichi (5 fiches projets), 3 témoignages clients, fiche Google Business.
- 6 mois : version anglaise du site, page équipe et fondateurs.
- 12 mois : communauté digitale structurée et notoriété mesurable en Côte d'Ivoire.

**Règle importante pour tout skill/contenu généré : ne jamais inventer de témoignages, chiffres de chantier, certifications, assurances ou mentions légales qui ne sont pas confirmés par l'utilisateur.** Utiliser des espaces réservés clairement identifiés ("à compléter avec témoignage client réel") plutôt que du faux contenu.

## Contact
Email : ccbertinferrera@gmail.com (Condé, porteur du projet côté site web).
