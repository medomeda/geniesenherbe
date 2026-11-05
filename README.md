# 🧠 Génies en Herbe — Académie & Plateau Live (Next.js PWA)

Application interactive d'entraînement de **Génies en Herbe** construite avec **Next.js (App Router)**, installable en **PWA** sur téléphone (iOS / Android), jouable **100 % hors-ligne** et dotée d'un **mode vocal** avec demande explicite d'autorisation du microphone.

## ✨ Fonctionnalités principales

- **14 Rubriques Officielles** : *Sport, Cinéma, Mots-croisés, Musique, Qui suis-je, Cantonade, Casse-tête (40 → 10 pts), Éclairs (1re mi-temps & Final), Association, Relais, Langage, Francophonie, Monde contemporain*.
- **12 Thématiques d'entraînement** : *Capitales (Afrique, Europe, Asie, Amériques & Océanie, Tout le Monde), Drapeaux & Emblèmes, Animaux (Cris, Petits & Records), Monnaies & Devises, Histoire & Empires d'Afrique, Sciences & Inventions, Littérature & Mythologie, Fleuves, Montagnes & Détroits*.
- **Accès Microphone Mobile & Mode Vocal** :
  - Demande explicite d'autorisation du microphone (`navigator.mediaDevices.getUserMedia({ audio: true })`) dès le clic sur **« 🎙️ À l'oral »**, sur **« 🎙️ Autoriser & Tester le micro »**, au lancement de la partie ou sur le bouton micro du plateau.
  - Synthèse vocale (voix d'animateur `fr-FR`) et reconnaissance vocale tolérante.
- **PWA Hors-ligne & Mises à jour** :
  - Manifeste Web (`public/manifest.webmanifest`), icônes adaptatives (`public/icons/`) et Service Worker (`public/sw.js`) mettant en cache les bundles Next.js et les +410 questions.

## 🚀 Démarrage local

```bash
# Installer les dépendances
npm install

# Lancer en développement (http://localhost:3401)
npm run dev

# Tester en HTTPS sur mobile via le réseau Wi-Fi local :
npm run dev:https
```

## 🌐 Déploiement sur Coolify (2 options configurées)

Le projet supporte au choix les deux modes de déploiement Coolify :

### Option 1 — Serveur Node.js Standalone (Recommandé)
- **Build Pack dans Coolify** : `Dockerfile` (ou `Docker Compose` avec `docker-compose.yml`)
- **Port** : `3000`
- **Fichier utilisé** : `Dockerfile` (image multi-stage `node:22-alpine` de ~120 Mo)
- **Avantage** : En-têtes HTTP de sécurité, cache PWA et permissions micro injectés automatiquement par Next.js.

### Option 2 — Site Statique pur (Caddy ou Nginx)
- **Dans Coolify** : Choisir le type d'application `Static`
  - Build command : `npm run build:export`
  - Publish directory : `out`
  - Un fichier `Caddyfile` est déjà inclus à la racine avec la configuration des en-têtes PWA et micro.
- **Ou via Docker Nginx** :
  - Build Pack : `Dockerfile` en pointant sur `Dockerfile.static`
  - Utilise `nginx:alpine` (~25 Mo) avec le fichier `nginx.conf` fourni.
