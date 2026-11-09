# Portfolio — Gilles Aurel Nguemkam Fom

Porte-folio personnel, en React + Vite, déployé sur GitHub Pages.

## Développement local

```bash
npm install
npm run dev
```

## Déploiement sur GitHub Pages

Ce dépôt est pensé pour être nommé `gillesaurel.github.io` (site utilisateur GitHub Pages, servi à la racine). Après avoir créé le dépôt vide sur GitHub et poussé ce code :

```bash
npm run deploy
```

Ça construit le projet (`npm run build`) et publie le contenu de `dist/` sur la branche `gh-pages`. Pour un site utilisateur (`<nom>.github.io`), GitHub sert directement cette branche à la racine du domaine.

> Si le dépôt est renommé en autre chose que `gillesaurel.github.io` (site "projet" plutôt que site "utilisateur"), il faut ajouter `base: '/nom-du-depot/'` dans `vite.config.js`, sinon les fichiers CSS/JS ne se chargeront pas correctement.

## Structure

- `src/components/` — un composant par section (Nav, Hero, About, Skills, Projects, Education, Contact, Footer)
- `src/data/projects.js` — contenu des 6 cartes de projets (modifier ici pour changer un texte ou un lien)
- `src/index.css` — thème (variables CSS, clair/sombre automatique selon les préférences système)
