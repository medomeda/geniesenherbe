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

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement Next.js (http://localhost:3000)
npm run dev

# Pour tester sur un téléphone via le Wi-Fi local avec accès au microphone (HTTPS requis sur mobile) :
npm run dev:https
```
