"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  GEH_VERSION,
  DEFAULT_BANK,
  THEMES_META,
  DEFAULT_THEMES
} from "@/data/questionsData";

if (typeof window !== "undefined" && !window.__pwaListenerAttached) {
  window.__pwaListenerAttached = true;
  window.__deferredPwaPrompt = window.__deferredPwaPrompt || null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    window.__deferredPwaPrompt = e;
    window.dispatchEvent(new CustomEvent("pwa-prompt-ready"));
  });
}

export default function GeniesEnHerbeApp() {
  const [mounted, setMounted] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || initializedRef.current) return;
    initializedRef.current = true;

    window.GEH_VERSION = GEH_VERSION;
    window.DEFAULT_BANK = DEFAULT_BANK;
    window.THEMES_META = THEMES_META;
    window.DEFAULT_THEMES = DEFAULT_THEMES;

    const $ = (s) => document.querySelector(s);
    const $$ = (s) => document.querySelectorAll(s);
    const shuffle = (a) => {
      a = [...a];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    const esc = (s) =>
      String(s ?? "").replace(
        /[&<>"]/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
      );

    const store = {
      get(k, def = null) {
        try {
          const v = localStorage.getItem(k);
          return v !== null ? JSON.parse(v) : def;
        } catch (e) {
          return def;
        }
      },
      set(k, v) {
        try {
          localStorage.setItem(k, JSON.stringify(v));
        } catch (e) {}
      }
    };

    /* --- Effets Sonores Synthétisés (Web Audio API — 100% Hors-Ligne) --- */
    const SFX = {
      ctx: null,
      init() {
        if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx && this.ctx.state === "suspended") {
          this.ctx.resume().catch(() => {});
        }
      },
      tone(freq, dur = 0.10, type = "sine", delay = 0, vol = 0.06) {
        if (!cfg.sfx) return;
        try {
          this.init();
          if (!this.ctx) return;
          const t0 = this.ctx.currentTime + delay;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, t0);
          gain.gain.setValueAtTime(0.001, t0);
          gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
          gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t0);
          osc.stop(t0 + dur + 0.02);
        } catch (e) {}
      },
      // Bonne réponse : double note douce et feutrée (sinusoïdale pure, non stridente)
      ok() {
        this.tone(587.33, 0.09, "sine", 0, 0.06);
        this.tone(880.0, 0.12, "sine", 0.07, 0.06);
      },
      // Série de 3+ : petit carillon doux
      streak() {
        this.tone(523.25, 0.07, "sine", 0, 0.05);
        this.tone(659.25, 0.07, "sine", 0.05, 0.05);
        this.tone(783.99, 0.07, "sine", 0.10, 0.06);
        this.tone(1046.5, 0.14, "sine", 0.15, 0.06);
      },
      // Mauvaise réponse / temps écoulé : tonalité basse et feutrée (onde sinusoïdale douce, pas de son perçant)
      ko() {
        this.tone(261.63, 0.10, "sine", 0, 0.05);
        this.tone(220.0, 0.15, "sine", 0.08, 0.05);
      },
      // Bips de clics et timer désactivés pour le confort sonore
      tick() {},
      ding() {},
      // Victoire / fin de partie : harmonie discrète
      win() {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
          this.tone(f, 0.14, "sine", i * 0.08, 0.06)
        );
      }
    };

    /* --- Confettis --- */
    function lancerConfettis() {
      const cv = $("#confetti-canvas");
      if (!cv) return;
      const ctx = cv.getContext("2d");
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
      const cols = ["#ffb547", "#5fd08a", "#4cc9f0", "#b583ff", "#ff6b5b"];
      const parts = Array.from({ length: 65 }, () => ({
        x: cv.width * (0.2 + Math.random() * 0.6),
        y: cv.height * 0.35,
        vx: (Math.random() - 0.5) * 11,
        vy: -Math.random() * 12 - 4,
        s: Math.random() * 7 + 5,
        c: cols[Math.floor(Math.random() * cols.length)],
        a: Math.random() * 6.28,
        va: (Math.random() - 0.5) * 0.25
      }));
      let frame = 0;
      function step() {
        ctx.clearRect(0, 0, cv.width, cv.height);
        parts.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.35;
          p.a += p.va;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.a);
          ctx.fillStyle = p.c;
          ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
          ctx.restore();
        });
        if (++frame < 95) requestAnimationFrame(step);
        else ctx.clearRect(0, 0, cv.width, cv.height);
      }
      requestAnimationFrame(step);
    }

    /* --- Fusion Banque Officielle + Thématiques + Questions Personnalisées --- */
    function getBank() {
      const base = JSON.parse(JSON.stringify(window.DEFAULT_BANK || DEFAULT_BANK || {}));
      const custom = store.get("geh-custom-qs", []);
      custom.forEach((item) => {
        if (base[item.rub] && Array.isArray(base[item.rub])) {
          if (item.rub === "mots") {
            base.mots.unshift([
              item.q,
              item.a.toUpperCase().replace(/[^A-Z]/g, ""),
              item.info || "Question personnalisée du club."
            ]);
          } else {
            base[item.rub].unshift([
              item.q,
              item.a
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
              item.info || "Question personnalisée du club."
            ]);
          }
        }
      });
      return base;
    }

    const THEMES = THEMES_META || [];
    function getThemesBank() {
      const base = JSON.parse(JSON.stringify(DEFAULT_THEMES || {}));
      const custom = store.get("geh-custom-qs", []);
      custom.forEach((item) => {
        if (base[item.rub] && Array.isArray(base[item.rub])) {
          base[item.rub].unshift([
            item.q,
            item.a
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
            item.info || "Question personnalisée du club."
          ]);
        }
      });
      base.cap_monde = [
        ...(base.cap_afrique || []),
        ...(base.cap_europe || []),
        ...(base.cap_asie || []),
        ...(base.cap_ameriques || [])
      ];
      return base;
    }

    const RUBRIQUES = [
      { id: "sport", nom: "Sport", n: 4, icon: "⚽" },
      { id: "cinema", nom: "Cinéma", n: 4, icon: "🎬" },
      { id: "mots", nom: "Mots-croisés", n: 4, icon: "🔤" },
      { id: "musique", nom: "Musique", n: 2, icon: "🎵" },
      { id: "qui", nom: "Qui, que, où, quoi suis-je", n: 4, icon: "🔍" },
      { id: "cantonade", nom: "Cantonade", n: 4, icon: "🎯" },
      { id: "casse", nom: "Casse-tête", n: 1, icon: "🧩" },
      { id: "eclairs", nom: "Éclairs (1re mi-temps)", n: 10, tag: 1, icon: "⚡" },
      { id: "assoc", nom: "Association", n: 3, icon: "🔗" },
      { id: "relais", nom: "Relais", n: 4, icon: "🏃" },
      { id: "langage", nom: "Langage", n: 4, icon: "📖" },
      { id: "franco", nom: "Francophonie", n: 4, icon: "🌍" },
      { id: "monde", nom: "Monde contemporain", n: 4, icon: "🌐" },
      { id: "eclairs", nom: "Éclairs (Final)", n: 10, tag: 2, icon: "⚡" }
    ];

    const NIVEAUX = {
      cadet: { nom: "Cadet", t: 40, desc: "40 s / rép." },
      junior: { nom: "Junior", t: 30, desc: "30 s / rép." },
      senior: { nom: "Senior", t: 20, desc: "20 s / rép." }
    };

    const BADGES_DEF = [
      { id: "first_game", icon: "🌱", nom: "Graine de Génie", desc: "Terminer sa première partie" },
      { id: "streak_5", icon: "🔥", nom: "En feu (Série ×5)", desc: "5 bonnes réponses d'affilée" },
      { id: "streak_10", icon: "⚡", nom: "Inarrêtable (×10)", desc: "10 bonnes réponses d'affilée" },
      { id: "detective", icon: "🕵️", nom: "Flair de Détective", desc: "Casse-tête trouvé au 1er indice (40 pts)" },
      { id: "relais_master", icon: "🏃", nom: "Relais Sans-Faute", desc: "Réussir les 4 étapes du Relais" },
      { id: "assoc_master", icon: "🔗", nom: "Maître des Liens", desc: "Réussir une Association complète" },
      { id: "score_300", icon: "🏆", nom: "Champion de Plateau", desc: "Dépasser 300 points dans un match" },
      { id: "reviser", icon: "🧠", nom: "Esprit Persévérant", desc: "Corriger une erreur en mode Révision" }
    ];

    /* --- Comparaison tolérante (pensée pour l'oral et le clavier mobile) --- */
    function mots(s) {
      return String(s)
        .toLowerCase()
        .replace(/œ/g, "oe")
        .replace(/æ/g, "ae")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/['’`\-]/g, " ")
        .replace(/[^a-z0-9 ]/g, " ")
        .split(/\s+/)
        .filter(Boolean);
    }

    const NB = {
      zero: 0, un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9,
      dix: 10, onze: 11, douze: 12, treize: 13, quatorze: 14, quinze: 15, seize: 16,
      vingt: 20, vingts: 20, trente: 30, quarante: 40, cinquante: 50, soixante: 60,
      cent: 100, cents: 100, mille: 1000
    };

    function valeur(seq) {
      let total = 0, cur = 0, prev = null;
      for (const w of seq) {
        if (w === "et") { prev = w; continue; }
        const v = NB[w];
        if (v === 100) cur = (cur || 1) * 100;
        else if (v === 1000) { total += (cur || 1) * 1000; cur = 0; }
        else if (v === 20 && prev === "quatre") cur += 76;
        else cur += v;
        prev = w;
      }
      return total + cur;
    }

    function numeriser(tok) {
      const out = [];
      let i = 0;
      while (i < tok.length) {
        if (tok[i] in NB) {
          let j = i;
          const seq = [];
          while (
            j < tok.length &&
            (tok[j] in NB || (tok[j] === "et" && tok[j + 1] in NB && seq.length))
          ) {
            seq.push(tok[j]);
            j++;
          }
          const art =
            seq.length === 1 && (seq[0] === "un" || seq[0] === "une") && tok.length > 1;
          if (art) out.push(seq[0]);
          else out.push(String(valeur(seq)));
          i = j;
        } else out.push(tok[i++]);
      }
      return out;
    }

    const VIDE = new Set(
      "euh heu hum hmm alors donc ben bah bon voila oui non c ce cet cette est cest sont la le les l un une des du de d au aux reponse ma sa notre mon ton son je j moi toi pense crois sais dis dirais trouve veut dire que qu qui il elle ils elles on s agit sagit peut etre surement monsieur madame ville pays fleuve mont lac mer ocean capitale".split(
        " "
      )
    );
    const cle = (t) => t.filter((x) => !VIDE.has(x)).join("");

    /* Normalisation phonétique tolérante (homophones & prononciation française) */
    function phonetique(s) {
      return String(s || "")
        .toLowerCase()
        .replace(/œ/g, "oe")
        .replace(/æ/g, "ae")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/['’`\-]/g, " ")
        .replace(/ph/g, "f")
        .replace(/ck|qu|q/g, "k")
        .replace(/c(?=[eiy])/g, "s")
        .replace(/c(?=[aou])/g, "k")
        .replace(/eau|eaux|au|aux/g, "o")
        .replace(/ai|ei/g, "e")
        .replace(/ou/g, "u")
        .replace(/an|en|am|em/g, "an")
        .replace(/in|ain|ein/g, "in")
        .replace(/([bdfgklmnprstvz])\1+/g, "$1") // Réduction des doubles consonnes
        .replace(/[sxzdt]$/g, "") // Retrait des consonnes muettes terminales fréquentes
        .replace(/[^a-z0-9]/g, "")
        .trim();
    }

    function lev(a, b) {
      const m = a.length,
        n = b.length;
      if (!m) return n;
      if (!n) return m;
      let p = [...Array(n + 1).keys()];
      for (let i = 1; i <= m; i++) {
        const c = [i];
        for (let j = 1; j <= n; j++) {
          c[j] = Math.min(
            p[j] + 1,
            c[j - 1] + 1,
            p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
          );
        }
        p = c;
      }
      return p[n];
    }

    function juste(saisies, reponses) {
      for (const s0 of saisies) {
        if (!s0) continue;
        const st = numeriser(mots(s0));
        if (!st.length) continue;
        const sk = cle(st) || st.join(""),
          sj = " " + st.join(" ") + " ",
          sPhon = phonetique(sk);

        for (const r of reponses) {
          const rt = numeriser(mots(r)),
            rk = cle(rt) || rt.join(""),
            rPhon = phonetique(rk);

          if (!rk) continue;

          // 1. Correspondance exacte nettoyée
          if (sk === rk) return true;

          // 2. Correspondance phonétique directe (ex: "La Paz" / "La passe", "Bogota" / "Bogotta")
          if (sPhon && rPhon && sPhon === rPhon) return true;

          const num = /^\d+$/.test(rk);

          // 3. La réponse est contenue dans ce que l'utilisateur a dit (ex: "Je pense que c'est Dakar")
          if ((rk.length >= 3 || num) && sj.includes(" " + rt.join(" ") + " "))
            return true;

          // 4. L'utilisateur a prononcé le mot-clé principal / nom de famille de la réponse composée
          // Ex: Réponse = "Albert Einstein", Joueur = "Einstein"
          // Ex: Réponse = "Nelson Mandela", Joueur = "Mandela"
          // Ex: Réponse = "Mont Everest", Joueur = "Everest"
          const motsClesReponse = rt.filter((w) => !VIDE.has(w) && w.length >= 4);
          if (motsClesReponse.length > 0) {
            for (const mc of motsClesReponse) {
              if (sk === mc || (sk.length >= 4 && lev(sk, mc) <= 1)) return true;
              if (sPhon && sPhon === phonetique(mc)) return true;
            }
          }

          if (num) continue;

          // 5. Tolérance Levenshtein sur le mot complet
          const tol = rk.length >= 9 ? 2 : rk.length >= 5 ? 1 : 0;
          if (sk && lev(sk, rk) <= tol) return true;

          // 6. Tolérance phonétique Levenshtein (1 écart phonétique permis)
          if (sPhon.length >= 5 && rPhon.length >= 5 && lev(sPhon, rPhon) <= 1)
            return true;

          // 7. Fenêtre glissante dans la phrase
          if (rk.length >= 4) {
            for (let a = 0; a < st.length; a++) {
              let w = "";
              for (let b = a; b < st.length && b < a + rt.length + 2; b++) {
                w += st[b];
                if (Math.abs(w.length - rk.length) <= tol && lev(w, rk) <= tol)
                  return true;
              }
            }
          }
        }
      }
      return false;
    }

    /* ==========================================================================
       VOIX & ACCÈS MICROPHONE MOBILE (DEMANDE D'AUTORISATION EXPLICITE)
       ========================================================================== */
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const TTS = window.speechSynthesis;
    const V = {
      rec: null,
      on: false,
      want: false,
      bloque: false,
      perm: "prompt", // "prompt" | "granted" | "denied" | "insecure"
      lastError: null,
      testRec: null
    };

    let streamTestActif = null;
    let animTestMicId = null;

    function detecterPlateformeMicro() {
      const ua = (typeof navigator !== "undefined" && navigator.userAgent) || "";
      const isIOS =
        /iPad|iPhone|iPod/.test(ua) ||
        (typeof navigator !== "undefined" &&
          navigator.platform === "MacIntel" &&
          navigator.maxTouchPoints > 1);
      const isAndroid = /Android/.test(ua);
      const isMac = /Macintosh|Mac OS X/.test(ua) && !isIOS;
      const isChrome = /Chrome|CriOS/.test(ua) && !/Edg|OPR/.test(ua);
      const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|Edg|OPR/.test(ua);
      const isFirefox = /Firefox|FxiOS/.test(ua);
      const isEdge = /Edg/.test(ua);

      if (isIOS) return "safari-ios";
      if (isAndroid) return "chrome-android";
      if (isMac && isSafari) return "safari-mac";
      if (isChrome) return "chrome-pc";
      if (isEdge) return "edge-pc";
      if (isFirefox) return "firefox";
      return "general";
    }

    function fermerModalMicro() {
      $("#mic-modal")?.classList.remove("show");
    }

    function ouvrirModalMicro() {
      const modal = $("#mic-modal");
      const list = $("#mic-modal-steps");
      const intro = $("#mic-modal-intro");
      const badge = $("#mic-modal-badge");
      if (!modal || !list) return;

      const plat = detecterPlateformeMicro();
      const isStandalone =
        (typeof window !== "undefined" &&
          (window.matchMedia("(display-mode: standalone)").matches ||
            window.navigator.standalone)) ||
        false;
      let steps = [];

      if (!window.isSecureContext) {
        if (badge) badge.textContent = "Contexte Non Sécurisé (HTTP)";
        if (intro) {
          intro.textContent =
            "Les smartphones (iOS et Android) interdisent STRICTEMENT le microphone sur toute connexion HTTP non chiffrée (ex: http://192.168.x.x ou IP sans HTTPS) :";
        }
        steps = [
          "<strong>Exigence de sécurité mobile</strong> : Chrome Mobile et Safari bloquent l'accès micro dès que l'adresse commence par <code>http://</code>. Seul <code>https://</code> est autorisé sur un téléphone.",
          "<strong>Solution avec Coolify</strong> : Une fois déployé sur ton VPS Coolify avec ton nom de domaine et le certificat SSL (HTTPS gratuit), le micro sera débloqué automatiquement sur ton téléphone.",
          "<strong>Pour tester sur ordinateur</strong> : Tu peux tester directement sur <code>http://localhost:3000</code> où le micro est autorisé sans restriction.",
          "<strong>Solution immédiate</strong> : Touche « Jouer en mode Clavier » ci-dessous pour lancer la partie sans micro."
        ];
      } else if (plat === "chrome-android") {
        if (badge) badge.textContent = isStandalone ? "Android (PWA Installée)" : "Android (Chrome)";
        if (intro) {
          intro.textContent = isStandalone
            ? "L'application PWA installée a besoin de l'autorisation Microphone dans les paramètres Android de ton téléphone :"
            : "Chrome sur Android a placé ce site en liste bloquée. Pour réautoriser :";
        }
        if (isStandalone) {
          steps = [
            "Sur l'écran d'accueil de ton téléphone Android, fais un <strong>appui long sur l'icône de l'application « Génies en Herbe »</strong>.",
            "Touche le petit bouton <strong>« ℹ️ » (Infos sur l'application)</strong>.",
            "Touche <strong>« Autorisations »</strong> (ou Permissions) ➔ <strong>« Microphone »</strong>.",
            "Choisis <strong>« Autoriser seulement si l'appli est en cours d'utilisation »</strong>.",
            "Reviens dans l'application et touche « 🔄 Tester à nouveau l'accès au micro »."
          ];
        } else {
          steps = [
            "Touche l'icône du <strong>cadenas 🔒</strong> ou des paramètres à gauche de l'adresse web.",
            "Touche <strong>« Autorisations »</strong> (ou « Paramètres du site »).",
            "Touche <strong>« Microphone »</strong> et choisis <strong>« Autoriser »</strong>.",
            "Reviens sur cette page et touche « 🔄 Tester à nouveau l'accès au micro »."
          ];
        }
      } else if (plat === "safari-ios") {
        if (badge) badge.textContent = isStandalone ? "iPhone / iPad (PWA)" : "iPhone / iPad (Safari)";
        if (intro) {
          intro.textContent = isStandalone
            ? "Sur iPhone, Apple applique des restrictions sur les Web Apps de l'écran d'accueil :"
            : "Safari sur iOS mémorise le refus d'accès. Voici comment débloquer le micro en 10 secondes :";
        }
        steps = [
          "Ouvre l'application <strong>Réglages</strong> de ton iPhone.",
          "Fais défiler jusqu'à <strong>Safari</strong> (ou le nom de l'application) ➔ <strong>Microphone</strong> ➔ Choisis <strong>« Autoriser »</strong>.",
          "<em>Option Dictée :</em> Dans Réglages iPhone ➔ Général ➔ Clavier, assure-toi que <strong>« Activer la Dictée »</strong> est cochée.",
          isStandalone
            ? "<em>Astuce PWA iOS :</em> Si Apple bloque la dictée vocale en mode plein écran, ouvre directement le site dans l'application <strong>Safari</strong>, ou joue au clavier."
            : "Touche « Terminé » puis clique sur « 🔄 Tester à nouveau l'accès au micro »."
        ];
      } else if (plat === "safari-mac") {
        if (badge) badge.textContent = "Mac (Safari)";
        if (intro) {
          intro.textContent =
            "Safari macOS bloque le micro pour ce site. Voici la procédure :";
        }
        steps = [
          "Dans la barre de menus tout en haut de ton Mac, clique sur <strong>Safari</strong> ➔ <strong>« Réglages pour ce site web… »</strong>.",
          "En face de la ligne <strong>Microphone</strong>, choisis <strong>« Autoriser »</strong>.",
          "<em>Réglages Système Mac :</em> Ouvre le menu Pomme  ➔ <em>Réglages Système</em> ➔ <em>Confidentialité et sécurité</em> ➔ <em>Microphone</em> et vérifie que Safari est bien coché.",
          "Clique sur « 🔄 Tester à nouveau l'accès au micro » ci-dessous."
        ];
      } else {
        // Chrome PC / Mac / Edge / Firefox
        if (badge) badge.textContent = "Google Chrome / Edge / Firefox";
        if (intro) {
          intro.textContent =
            "Le navigateur a mémorisé « Bloqué » pour ce site. Aucune popup ne s'ouvrira tant que ce réglage n'est pas modifié :";
        }
        steps = [
          "Dans la barre d'adresse tout en haut, clique sur l'icône <strong>🔒 (Cadenas)</strong> ou <strong>🎛️ (Paramètres du site)</strong> immédiatement à gauche de l'adresse.",
          "En face de la ligne <strong>Microphone</strong>, bascule l'option de « Bloquer » vers <strong>« Autoriser »</strong>.",
          "<em>Sur Mac :</em> Ouvre  ➔ <em>Réglages Système</em> ➔ <em>Confidentialité & Sécurité</em> ➔ <em>Microphone</em> et assure-toi que ton navigateur y est coché.",
          "Clique sur le bouton ci-dessous « 🔄 Tester à nouveau l'accès au micro »."
        ];
      }

      const diagHtml = `
        <div style="margin-top:12px;padding:10px 12px;background:rgba(0,0,0,0.35);border:1px solid var(--line);border-radius:10px;font-size:12px;line-height:1.6">
          <div style="font-weight:700;color:var(--led);margin-bottom:4px">🔍 Diagnostic de ton téléphone :</div>
          <div>• <b>Protocole :</b> <code>${window.location.protocol}//${window.location.host}</code></div>
          <div>• <b>Sécurisé (requis mobile) :</b> ${
            window.isSecureContext
              ? "<span style='color:var(--ok)'>✅ OUI (HTTPS valide)</span>"
              : "<span style='color:var(--bad)'>❌ NON (HTTP non sécurisé : Micro interdit par iOS/Android)</span>"
          }</div>
          <div>• <b>Mode :</b> ${isStandalone ? "📲 PWA Installée (Écran d'accueil)" : "🌐 Navigateur web"}</div>
          <div>• <b>Accès matériel audio :</b> ${
            navigator.mediaDevices && navigator.mediaDevices.getUserMedia
              ? "✅ API Détectée"
              : "❌ API Indisponible / Masquée par le navigateur"
          }</div>
          <div>• <b>Moteur vocal (SpeechRecognition) :</b> ${
            SR ? "✅ Pris en charge" : "⚠️ Non disponible (jouer au clavier)"
          }</div>
          ${
            V.lastError
              ? `<div>• <b>Dernière erreur OS :</b> <code style="color:var(--bad)">${V.lastError}</code></div>`
              : ""
          }
        </div>
      `;

      list.innerHTML =
        steps
          .map(
            (s, i) => `
        <li>
          <span class="step-num">${i + 1}</span>
          <span>${s}</span>
        </li>
      `
          )
          .join("") + diagHtml;

      modal.classList.add("show");
    }

    function arreterTestAudio() {
      if (animTestMicId) {
        cancelAnimationFrame(animTestMicId);
        animTestMicId = null;
      }
      if (streamTestActif) {
        try {
          streamTestActif.getTracks().forEach((t) => t.stop());
        } catch (e) {}
        streamTestActif = null;
      }
    }

    function testerNiveauMicrophone(stream, dureeMs = 4000) {
      arreterTestAudio();
      streamTestActif = stream;

      const meterBox = $("#mic-meter");
      const meterBar = $("#mic-meter-bar");
      if (meterBox) meterBox.style.display = "block";
      if (meterBar) meterBar.style.width = "5%";

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) {
        setTimeout(() => {
          arreterTestAudio();
          if (meterBox) meterBox.style.display = "none";
        }, dureeMs);
        return;
      }

      try {
        const ctx = new AudioCtx();
        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        let sonDetecte = false;

        const loop = () => {
          if (!streamTestActif) return;
          analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
          const avg = sum / dataArray.length;
          const pct = Math.min(100, Math.round((avg / 55) * 100));
          if (pct > 12) sonDetecte = true;
          if (meterBar) meterBar.style.width = Math.max(4, pct) + "%";
          animTestMicId = requestAnimationFrame(loop);
        };
        loop();

        setTimeout(() => {
          arreterTestAudio();
          try {
            ctx.close();
          } catch (e) {}
          if (meterBox) meterBox.style.display = "none";
          if (sonDetecte) {
            majBanniereMicroAccueil("✅ Parfait ! Ta voix a été captée par le micro. Tu es prêt pour jouer !");
          } else {
            majBanniereMicroAccueil(
              "✅ Micro autorisé et connecté (parle plus fort si besoin pour faire bouger la jauge)."
            );
          }
        }, dureeMs);
      } catch (e) {
        arreterTestAudio();
        if (meterBox) meterBox.style.display = "none";
      }
    }

    // Vérification initiale de l'état de la permission microphone
    async function initPermissionMicro() {
      if (!window.isSecureContext) {
        V.perm = "insecure";
        majBanniereMicroAccueil();
        return;
      }
      if (navigator.permissions && navigator.permissions.query) {
        try {
          const status = await navigator.permissions.query({ name: "microphone" });
          V.perm = status.state;
          status.onchange = () => {
            V.perm = status.state;
            if (status.state === "granted") V.bloque = false;
            majBanniereMicroAccueil();
          };
        } catch (e) {}
      }
    }
    initPermissionMicro();

    /**
     * Demande explicitement l'accès au microphone du téléphone via getUserMedia({ audio: true })
     * Doit être appelée directement lors d'un clic/toucher utilisateur (user gesture).
     */
    async function demanderPermissionMicro(avecTestVocal = false) {
      if (!window.isSecureContext) {
        V.perm = "insecure";
        majBanniereMicroAccueil(
          "⚠️ Connexion non sécurisée (HTTP). Sur mobile, le micro exige HTTPS (ou lance sur localhost)."
        );
        ouvrirModalMicro();
        return false;
      }

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          majBanniereMicroAccueil("🔔 Clique sur « Autoriser » dans la notification du navigateur…");
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

          V.perm = "granted";
          V.bloque = false;
          V.lastError = null;
          SFX.ok();

          if (avecTestVocal) {
            majBanniereMicroAccueil("🎙️ Micro ouvert ! Dis un mot : observe la jauge sonore…");
            testerNiveauMicrophone(stream, 4000);
            if (SR) testerReconnaissanceAccueil();
          } else {
            stream.getTracks().forEach((track) => track.stop());
            majBanniereMicroAccueil("✅ Microphone autorisé et prêt pour la partie !");
          }
          return true;
        } catch (err) {
          V.perm = "denied";
          V.bloque = true;
          V.lastError = err ? err.name || err.message : "PermissionDenied";

          let msg = "⚠️ Accès au micro refusé ou bloqué.";
          if (err && (err.name === "NotAllowedError" || err.name === "PermissionDeniedError")) {
            msg =
              "🚫 Le navigateur bloque le micro. Touche l'icône 🔒 à gauche de l'adresse web pour changer en « Autoriser ».";
          } else if (err && (err.name === "NotFoundError" || err.name === "DevicesNotFoundError")) {
            msg = "❌ Aucun microphone physique détecté sur cet appareil.";
          } else if (err && err.name === "NotReadableError") {
            msg = "⚠️ Le microphone est occupé par une autre application (ferme Zoom/Teams).";
          }

          majBanniereMicroAccueil(msg);
          // Si l'utilisateur clique explicitement sur tester et que c'est bloqué, ouvrir l'aide
          if (avecTestVocal) {
            ouvrirModalMicro();
          }
          return false;
        }
      } else if (SR) {
        // Fallback si mediaDevices n'est pas exposé mais SpeechRecognition existe
        V.perm = "granted";
        V.bloque = false;
        if (avecTestVocal) testerReconnaissanceAccueil();
        return true;
      } else {
        majBanniereMicroAccueil(
          "⚠️ La reconnaissance vocale n'est pas supportée sur ce navigateur (utilise Chrome ou Safari à jour)."
        );
        return false;
      }
    }

    function testerReconnaissanceAccueil() {
      if (!SR) return;
      if (V.testRec) {
        try {
          V.testRec.abort();
        } catch (e) {}
        V.testRec = null;
      }
      try {
        const r = new SR();
        r.lang = "fr-FR";
        r.interimResults = true;
        r.continuous = false;
        V.testRec = r;
        r.onresult = (e) => {
          let txt = "";
          for (let i = e.resultIndex; i < e.results.length; i++) {
            txt += e.results[i][0].transcript;
          }
          if (txt.trim()) {
            majBanniereMicroAccueil(`✅ Voix comprise avec succès ! J'ai entendu : « ${txt.trim()} »`);
          }
        };
        r.onerror = (e) => {
          // ATTENTION : Ne JAMAIS dégrader V.perm à "denied" si le micro matériel est déjà autorisé !
          if (e.error === "not-allowed" || e.error === "service-not-allowed") {
            majBanniereMicroAccueil(
              "ℹ️ Micro actif. Si la transcription vocale ne répond pas, active la Dictée dans tes réglages clavier ou réponds au clavier."
            );
          }
        };
        r.onend = () => {
          V.testRec = null;
        };
        r.start();
        setTimeout(() => {
          if (V.testRec === r) {
            try {
              r.stop();
            } catch (e) {}
          }
        }, 4500);
      } catch (e) {}
    }

    function majBanniereMicroAccueil(customMsg) {
      const box = $("#mic-perm-box");
      if (!box) return;
      box.style.display = cfg.voix ? "flex" : "none";
      if (!cfg.voix) return;

      box.classList.remove("granted", "denied", "prompt");
      if (V.perm === "granted") box.classList.add("granted");
      else if (V.perm === "denied" || V.perm === "insecure") box.classList.add("denied");
      else box.classList.add("prompt");

      const txtEl = $("#mic-perm-txt");
      const btnEl = $("#b-test-mic");
      const btnHelp = $("#b-help-mic");

      if (btnHelp) {
        btnHelp.style.display = V.perm === "denied" || V.perm === "insecure" ? "inline-flex" : "none";
      }

      if (txtEl) {
        if (customMsg) {
          txtEl.textContent = customMsg;
        } else if (V.perm === "insecure") {
          txtEl.textContent =
            "⚠️ Connexion HTTP non sécurisée : sur mobile, le micro exige HTTPS (utilise « npm run dev:https »).";
        } else if (V.perm === "granted") {
          txtEl.textContent = "✅ Accès au microphone autorisé sur cet appareil.";
        } else if (V.perm === "denied") {
          txtEl.textContent =
            "🚫 Micro bloqué par le navigateur : clique sur le cadenas 🔒 à gauche de l'URL pour Autoriser.";
        } else {
          txtEl.textContent =
            "🎙️ Touche « Autoriser & Tester le micro » pour activer le micro de ton appareil.";
        }
      }
      if (btnEl) {
        btnEl.textContent =
          V.perm === "granted"
            ? "🎙️ Tester le micro"
            : V.perm === "denied"
            ? "🔄 Réessayer l'accès"
            : "🎙️ Autoriser & Tester le micro";
      }
    }

    function ecouter(fromUserGesture = false) {
      if (
        !SR ||
        !cfg.voix ||
        (V.bloque && !fromUserGesture) ||
        !S ||
        (S.etat !== "question" && S.etat !== "retour")
      )
        return;

      if (!navigator.onLine) {
        const st = $("#heard .st");
        if (st) st.textContent = "Mode hors-ligne : utilise le clavier";
        return;
      }

      if (fromUserGesture) {
        V.bloque = false;
      }

      V.want = true;
      if (V.on || V.rec) return;

      const r = new SR();
      r.lang = "fr-FR";
      r.interimResults = true;
      r.maxAlternatives = 5;
      r.continuous = false;
      r.onstart = () => {
        V.on = true;
        V.bloque = false;
        V.perm = "granted";
        majMic();
      };
      r.onresult = (e) => {
        let inter = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const res = e.results[i];
          if (res.isFinal) {
            const alts = [...res].map((a) => a.transcript.trim()).filter(Boolean);
            if (alts.length) entendu(alts);
          } else inter += res[0].transcript;
        }
        if (inter) montrer(inter, true);
      };
      r.onerror = (e) => {
        if (["not-allowed", "service-not-allowed", "audio-capture"].includes(e.error)) {
          V.want = false;
          // Sur mobile (iOS/Android), le démarrage auto après TTS peut être refusé sans geste direct :
          // on invite l'utilisateur à toucher le bouton micro #b-mic sans condamner le micro définitivement
          micBloque(e.error);
        }
      };
      r.onend = () => {
        V.on = false;
        V.rec = null;
        majMic();
        if (V.want && !V.bloque && S && (S.etat === "question" || S.etat === "retour")) {
          setTimeout(() => ecouter(false), 260);
        }
      };
      V.rec = r;
      try {
        r.start();
      } catch (err) {
        V.rec = null;
        return;
      }
      setTimeout(() => {
        if (V.rec === r && !V.on) {
          try {
            r.abort();
          } catch (e) {}
          V.rec = null;
          V.want = false;
          majMic();
        }
      }, 4500);
    }

    function stopEcoute() {
      resetAccumulationVocale();
      V.want = false;
      if (V.rec) {
        try {
          V.rec.abort();
        } catch (e) {}
      }
      V.rec = null;
      V.on = false;
      majMic();
    }

    function majMic() {
      const b = $("#b-mic");
      if (!b) return;
      b.classList.toggle("live", V.on);
      b.classList.toggle("off", !cfg.voix);
      b.setAttribute("aria-label", V.on ? "Arrêter l'écoute" : "Toucher pour parler au micro");
      const st = $("#heard .st");
      if (st) {
        st.textContent = V.on
          ? "🎙️ Je t'écoute… Parle maintenant !"
          : S && S.etat === "question"
          ? "👆 Touche le bouton 🎙️ pour parler"
          : "Micro en pause";
      }
    }

    function montrer(txt, inter) {
      const t = $("#heard .tx");
      if (!t) return;
      t.textContent = txt;
      t.classList.toggle("interim", !!inter);
    }

    function micBloque(code) {
      const h = $("#heard");
      if (!h) return;
      h.querySelector(".st").textContent = "👆 Touche le bouton 🎙️ à gauche pour activer le micro";
      h.querySelector(".tx").innerHTML = `<span class="warnmsg">${
        code === "audio-capture"
          ? "Aucun micro détecté."
          : "Touche l'icône 🎙️ pour autoriser et parler (ou réponds au clavier)."
      }</span>`;
      majMic();
    }

    let timerValidationVocale = null;
    let saisieVocaleAccumulee = "";

    function resetAccumulationVocale() {
      if (timerValidationVocale) {
        clearTimeout(timerValidationVocale);
        timerValidationVocale = null;
      }
      saisieVocaleAccumulee = "";
    }

    const CMD_PASSE = /^(je )?(passe|passer|joker)$/;
    const CMD_INDICE = /^(un )?(autre )?indice( suivant)?$/;
    const CMD_SUIV = /^(question )?suivante?$|^(on )?continue$|^ok$|^d'?accord$/;

    function entendu(alts) {
      if (!S) return;
      const premier = (alts[0] || "").trim();
      if (!premier) return;

      const p = premier
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.!?,]/g, "")
        .trim();

      if (S.etat === "retour") {
        if (CMD_SUIV.test(p)) suivant();
        return;
      }
      if (S.etat !== "question") return;

      const { it } = itemCourant();

      if (CMD_PASSE.test(p)) {
        resetAccumulationVocale();
        valider(true);
        return;
      }
      if (it.type === "casse" && CMD_INDICE.test(p)) {
        resetAccumulationVocale();
        indiceSuivant();
        return;
      }
      if (it.type === "assoc") {
        if (/^valide/.test(p) && !$("#b-assoc")?.disabled) {
          resetAccumulationVocale();
          valider();
        }
        return;
      }

      // Concaténation intelligente : si l'utilisateur prononce un nom composé en marquant une courte pause
      if (!saisieVocaleAccumulee) {
        saisieVocaleAccumulee = premier;
      } else {
        const pAcc = saisieVocaleAccumulee.toLowerCase();
        const pPrem = premier.toLowerCase();
        if (!pPrem.includes(pAcc) && !pAcc.includes(pPrem)) {
          saisieVocaleAccumulee = `${saisieVocaleAccumulee} ${premier}`;
        } else if (pPrem.length > pAcc.length) {
          saisieVocaleAccumulee = premier;
        }
      }

      const toutesHypotheses = Array.from(
        new Set([saisieVocaleAccumulee, premier, ...alts])
      );

      // Affichage visuel direct de ce qui a été entendu
      montrer(`🗣️ « ${saisieVocaleAccumulee} »`, false);
      const inp = $("#rep");
      if (inp) inp.value = saisieVocaleAccumulee;

      // 1. DÉTECTION IMMÉDIATE : Si ce qui a été dit est DÉJÀ la bonne réponse,
      // on valide à l'instant même, zéro attente !
      if (it.type !== "assoc" && it.a && juste(toutesHypotheses, it.a)) {
        resetAccumulationVocale();
        S.alts = toutesHypotheses;
        valider();
        return;
      }

      // 2. TEMPORISATION D'HÉSITATION (1.1s) : Si la réponse n'est pas encore complète,
      // on laisse le temps de prononcer la suite sans couper brutalement !
      if (timerValidationVocale) clearTimeout(timerValidationVocale);
      timerValidationVocale = setTimeout(() => {
        if (S && S.etat === "question") {
          S.alts = toutesHypotheses;
          resetAccumulationVocale();
          valider();
        }
      }, 1100);
    }

    function lire(txt, ensuite) {
      let fait = false;
      const go = () => {
        if (fait) return;
        fait = true;
        ensuite && ensuite();
      };
      if (!cfg.lecture || !TTS || !txt) {
        go();
        return;
      }
      try {
        TTS.cancel();
        const u = new SpeechSynthesisUtterance(txt);
        u.lang = "fr-FR";
        u.rate = 1.02;
        const v = TTS.getVoices().find((x) => /^fr/i.test(x.lang));
        if (v) u.voice = v;
        let parti = false;
        u.onstart = () => {
          parti = true;
        };
        u.onend = go;
        u.onerror = go;
        TTS.speak(u);
        setTimeout(() => {
          if (!parti) {
            try {
              TTS.cancel();
            } catch (e) {}
            go();
          }
        }, 1500);
        setTimeout(go, Math.min(15000, 2000 + txt.length * 70));
      } catch (e) {
        go();
      }
    }

    function texteALire(r, it) {
      const tete = S.ii === 0 && S.indice <= 1 ? `${r.nom}. ` : "";
      if (it.type === "casse") return `${tete}Indice ${S.indice}. ${it.ind[S.indice - 1]}`;
      if (it.type === "assoc") return `${tete}Association. Thème : ${it.theme}.`;
      if (it.mot)
        return `${tete}${it.mot.length} lettres, commence par ${it.mot[0]}. ${it.q}`;
      if (it.lettre && S.ii === 0)
        return `${tete}Toutes les réponses commencent par la lettre ${it.lettre}. ${it.q}`;
      if (it.theme && S.ii === 0) return `${tete}Thème : ${it.theme}. ${it.q}`;
      return tete + it.q;
    }

    /* --- État Global & Configuration (Solo) --- */
    let S = null,
      tick = null,
      curTab = "jouer",
      sideMode = "rubriques",
      lastTickSec = -1;
    let cfg = Object.assign(
      {
        niveau: "cadet",
        format: "express",
        cibleRub: 0,
        nom: "",
        temps: 40,
        voix: false,
        lecture: true,
        sfx: true
      },
      store.get("geh-cfg", {})
    );

    let stats = Object.assign(
      {
        xp: 0,
        parties: 0,
        bonsTotal: 0,
        qsTotal: 0,
        bestStreak: 0,
        badges: []
      },
      store.get("geh-stats", {})
    );

    function saveStats() {
      store.set("geh-stats", stats);
    }
    function unlockBadge(id) {
      if (!stats.badges.includes(id)) {
        stats.badges.push(id);
        saveStats();
      }
    }

    function getMistakes() {
      return store.get("geh-mistakes", []);
    }
    function addMistake(item) {
      const list = getMistakes();
      if (!list.some((m) => m.q === item.q)) {
        list.unshift({
          q: item.q,
          a: item.a,
          info: item.info || "",
          rub: item.rub || "Révision"
        });
        store.set("geh-mistakes", list.slice(0, 60));
      }
      majBadgeErreurs();
    }
    function removeMistake(qText) {
      const list = getMistakes().filter((m) => m.q !== qText);
      store.set("geh-mistakes", list);
      majBadgeErreurs();
    }
    function majBadgeErreurs() {
      const b = $("#err-badge");
      if (!b) return;
      const n = getMistakes().length;
      b.textContent = n;
      b.hidden = n === 0;
    }

    /* --- Construction d'une Partie Solo --- */
    function construire(format = cfg.format, cibleIndex = cfg.cibleRub) {
      const BANK = getBank();
      const pris = {};
      const pick = (id, n) => {
        if (!pris[id] || pris[id].length < n) pris[id] = shuffle(BANK[id] || []);
        return pris[id].splice(0, n);
      };

      if (format === "revision") {
        const errs = shuffle(getMistakes()).slice(0, 12);
        return [
          {
            id: "revision",
            nom: "Révision de mes erreurs",
            icon: "🧠",
            n: errs.length,
            ri: 0,
            pts: 0,
            ok: 0,
            fait: 0,
            items: errs.map((e) => ({
              type: "texte",
              q: e.q,
              a: Array.isArray(e.a) ? e.a : [e.a],
              info: e.info,
              isRevision: true
            }))
          }
        ];
      }

      if (format === "theme") {
        const TBANK = getThemesBank();
        const tm = THEMES[cibleIndex] || THEMES[0];
        const pool = shuffle(TBANK[tm.id] || []);
        const qs = pool.slice(0, Math.min(10, pool.length));
        return [
          {
            id: tm.id,
            nom: tm.nom || tm.titre,
            titre: tm.titre || tm.nom,
            sousTitre: tm.sousTitre || "",
            icon: tm.icon,
            isTheme: true,
            n: qs.length,
            ri: 0,
            pts: 0,
            ok: 0,
            fait: 0,
            items: qs.map(([q, a, info]) => ({
              type: "texte",
              q,
              a,
              info,
              sousTitre: tm.sousTitre || ""
            }))
          }
        ];
      }

      let selection = RUBRIQUES.map((r, idx) => ({ ...r, origIdx: idx }));
      if (format === "express") {
        selection = [
          RUBRIQUES[0],
          RUBRIQUES[2],
          RUBRIQUES[6],
          RUBRIQUES[8],
          { ...RUBRIQUES[7], nom: "Éclairs Express", n: 5 }
        ];
      } else if (format === "rubrique") {
        const r = RUBRIQUES[cibleIndex] || RUBRIQUES[0];
        selection = [
          { ...r, n: r.id === "casse" ? 2 : r.id === "assoc" ? 3 : Math.max(r.n, 6) }
        ];
      }

      return selection.map((r, ri) => {
        let items = [];
        if (
          ["sport", "cinema", "musique", "langage", "franco", "monde", "eclairs"].includes(
            r.id
          )
        ) {
          items = pick(r.id, r.n).map(([q, a, info]) => ({ type: "texte", q, a, info }));
        } else if (r.id === "relais") {
          items = pick("relais", r.n).map(([q, a, info]) => ({
            type: "texte",
            q,
            a,
            info,
            relais: true
          }));
        } else if (r.id === "mots") {
          items = pick("mots", r.n).map(([q, m, info]) => ({
            type: "texte",
            q,
            a: [m],
            mot: m,
            info
          }));
        } else if (r.id === "qui") {
          const g = shuffle(BANK.qui)[0];
          items = g.qs.map(([q, a, info]) => ({
            type: "texte",
            q,
            a,
            info,
            lettre: g.lettre
          }));
        } else if (r.id === "cantonade") {
          const g = shuffle(BANK.cantonade)[0];
          items = g.qs.map(([q, a, info]) => ({
            type: "texte",
            q,
            a,
            info,
            theme: g.theme
          }));
        } else if (r.id === "casse") {
          const gList = shuffle(BANK.casse).slice(0, r.n || 1);
          items = gList.map((g) => ({
            type: "casse",
            ind: g.ind,
            a: g.rep,
            info: g.info
          }));
        } else if (r.id === "assoc") {
          items = pick("assoc", r.n).map((g) => ({
            type: "assoc",
            theme: g.theme,
            paires: g.paires,
            info: g.info
          }));
        }
        return { ...r, ri, items, pts: 0, ok: 0, fait: 0 };
      });
    }

    async function nouvellePartie(formatOverride, rubIndexOverride) {
      if (formatOverride) cfg.format = formatOverride;
      if (typeof rubIndexOverride === "number") cfg.cibleRub = rubIndexOverride;

      if (cfg.format === "revision" && getMistakes().length === 0) {
        cfg.format = "express";
      }

      if (V.testRec) {
        try { V.testRec.abort(); } catch (e) {}
        V.testRec = null;
      }

      // Si le mode vocal est activé et que la permission micro n'est pas encore accordée,
      // on profite du clic utilisateur de lancement de partie pour demander l'autorisation !
      if (cfg.voix && V.perm !== "granted") {
        await demanderPermissionMicro(false);
      }

      const rubs = construire(cfg.format, cfg.cibleRub);
      S = {
        rubs,
        ri: 0,
        ii: 0,
        etat: "question",
        score: 0,
        streak: 0,
        log: [],
        t: 0,
        tmax: cfg.temps,
        qid: 0,
        alts: null,
        indice: 0,
        revealedLetters: 1,
        assocSel: null,
        assocMap: {},
        assocRight: []
      };
      $("#nav-tabs").style.display = "none";
      $("#side-panel").classList.add("in-game-hide");
      $("#mob-rubbar").classList.add("in-game");
      $("#main-grid").classList.remove("full-width");
      afficherQuestion();
    }

    /* --- Rendu du Tableau de Score, Rubriques et Chrono --- */
    function renderScores() {
      const el = $("#scores");
      const hl = $("#hud-left");
      if (!S) {
        const best = store.get("geh-best");
        const grade = getGrade(stats.xp);
        if (hl) {
          hl.innerHTML = `
            <span class="hud-lbl">Grade · ${stats.xp} XP</span>
            <span class="hud-val">${grade.icon} <b style="color:var(--led)">${grade.nom}</b></span>
          `;
        }
        if (el) {
          el.innerHTML = `<div class="score"><div class="lbl">Record</div><div class="led">${
            best ? String(best.pts).padStart(3, "0") : "000"
          }</div></div>`;
        }
        return;
      }
      if (hl) {
        hl.innerHTML = `
          <span class="hud-lbl">Joueur en lice</span>
          <span class="hud-val">
            <span>👤 ${esc(cfg.nom || "Champion")}</span>
            ${
              S.streak >= 2
                ? `<span class="streak-pill" title="Série de bonnes réponses">🔥 ×${S.streak}</span>`
                : ""
            }
          </span>
        `;
      }
      if (el) {
        el.innerHTML = `<div class="score">
          <div class="lbl">Score</div>
          <div class="led">${String(S.score).padStart(3, "0")}</div>
        </div>`;
      }
    }

    function renderListe() {
      const sw = $("#side-switch");
      const sub = $("#side-sub");
      if (sw) sw.style.display = S ? "none" : "grid";
      if (sub)
        sub.textContent = S
          ? "Progression de la partie :"
          : sideMode === "themes"
          ? "Touche une thématique (10 questions tirées au sort) :"
          : "Touche une rubrique pour t'entraîner dessus :";

      if (!S && sideMode === "themes") {
        const TBANK = getThemesBank();
        let lastGroup = "";
        $("#rlist").innerHTML = THEMES.map((t, i) => {
          const cnt = (TBANK[t.id] || []).length;
          const head =
            t.group !== lastGroup
              ? `<li class="rlist-sep"><span>${
                  t.group === "Capitales"
                    ? "🌍 Capitales du Monde"
                    : "🦁 Culture Générale & Thèmes"
                }</span><small>${t.group === "Capitales" ? "5 packs" : "7 packs"}</small></li>`
              : "";
          lastGroup = t.group;
          const mainTitle = t.titre || t.nom;
          const subTitle = t.sousTitre || "";
          return `${head}<li class="theme-card" data-ti="${i}" title="S'entraîner sur : ${esc(
            t.nom
          )}">
            <span class="t-icon">${t.icon}</span>
            <div class="t-body">
              <span class="t-title">${esc(mainTitle)}</span>
              ${subTitle ? `<span class="t-sub">${esc(subTitle)}</span>` : ""}
            </div>
            <div class="t-right">
              <span class="t-cnt">${cnt} q.</span>
              <span class="t-play">▶</span>
            </div>
          </li>`;
        }).join("");
        return;
      }

      const rubs = S ? S.rubs : RUBRIQUES.map((r, ri) => ({ ...r, ri, pts: 0, fait: 0 }));
      $("#rlist").innerHTML = rubs
        .map((r, i) => {
          const cur = S && S.etat !== "fin" && i === S.ri;
          const done = S && (i < S.ri || S.etat === "fin");
          const tot = r.id === "casse" ? 4 : r.items ? r.items.length : r.n;
          const f = r.id === "casse" ? (r.fait ? 4 : S && cur ? S.indice : 0) : r.fait;
          if (!S) {
            return `<li data-ri="${i}" title="Lancer l'entraînement : ${esc(r.nom)}">
              <span class="n">${i + 1}</span>
              <span class="name">${r.icon || ""} ${esc(r.nom)}</span>
              <span class="c">${tot} q.</span>
              <span class="p" style="font-size:12px">▶</span>
            </li>`;
          }
          return `<li class="${cur ? "cur" : ""} ${done ? "done" : ""}" data-ri="${i}" title="Aller à : ${esc(
            r.nom
          )}">
            <span class="n">${i + 1}</span>
            <span class="name">${r.icon || ""} ${esc(r.nom)}</span>
            <span class="c">${f}/${tot}</span>
            <span class="p">${r.pts}</span>
            <span class="bar"><i style="width:${Math.min(
              100,
              Math.round((f / Math.max(1, tot)) * 100)
            )}%"></i></span>
          </li>`;
        })
        .join("");

      if (S) {
        const curR = S.rubs[S.ri] || S.rubs[0];
        $("#mob-rub-txt").textContent = curR.isTheme
          ? `${curR.icon || "🌍"} ${curR.nom} · Q.${S.ii + 1}/${curR.items.length}`
          : `${curR.icon || "🎯"} ${S.ri + 1}/${S.rubs.length} · ${curR.nom}`;
        $("#mob-dots").innerHTML = S.rubs
          .map(
            (_, i) =>
              `<span class="dot-step ${
                i < S.ri ? "done" : i === S.ri ? "cur" : ""
              }"></span>`
          )
          .join("");
      }
    }

    function setTimer() {
      const t = $("#timer"),
        v = $("#tval");
      const rest = S ? Math.max(0, Math.ceil(S.t)) : cfg.temps;
      const max = S ? S.tmaxCur || S.tmax : cfg.temps;
      v.textContent = String(rest).padStart(2, "0");
      t.style.setProperty("--p", S ? Math.max(0, S.t / max) : 1);
      const isWarn = !!S && S.etat === "question" && S.t <= 5 && S.t > 0;
      t.classList.toggle("warn", isWarn);
      if (isWarn && rest !== lastTickSec) {
        lastTickSec = rest;
      }
    }

    function getGrade(xp) {
      if (xp >= 2000) return { nom: "Grand Maître", icon: "👑", next: 3000 };
      if (xp >= 1000) return { nom: "Capitaine", icon: "🥇", next: 2000 };
      if (xp >= 500) return { nom: "Titulaire", icon: "🥈", next: 1000 };
      if (xp >= 200) return { nom: "Espoir du Club", icon: "🥉", next: 500 };
      return { nom: "Apprenti Génie", icon: "🌱", next: 200 };
    }

    /* ==========================================================================
       ONGLETS D'ACCUEIL : JOUER / PROFIL & STATS / ATELIER & PWA
       ========================================================================== */
    function accueil(tab = curTab) {
      S = null;
      curTab = tab;
      clearInterval(tick);
      stopEcoute();
      try {
        TTS && TTS.cancel();
      } catch (e) {}

      $("#nav-tabs").style.display = "grid";
      $$("#nav-tabs button").forEach((b) =>
        b.classList.toggle("active", b.dataset.tab === tab)
      );
      $("#mob-rubbar").classList.remove("in-game");
      fermerDrawer();
      majBadgeErreurs();

      if (tab === "stats") {
        $("#side-panel").style.display = "none";
        $("#main-grid").classList.add("full-width");
        renderTabStats();
      } else if (tab === "atelier") {
        $("#side-panel").style.display = "none";
        $("#main-grid").classList.add("full-width");
        renderTabAtelier();
      } else {
        $("#side-panel").style.display = "";
        $("#side-panel").classList.remove("in-game-hide");
        $("#main-grid").classList.remove("full-width");
        renderTabJouer();
      }
      renderScores();
      renderListe();
      setTimer();
    }

    function renderTabJouer() {
      const d = $("#desk");
      const errCount = getMistakes().length;
      const grade = getGrade(stats.xp);
      if (
        cfg.format === "rubrique" ||
        cfg.format === "theme" ||
        (cfg.format === "revision" && !errCount)
      ) {
        cfg.format = "express";
      }

      d.innerHTML = `
        <div class="eyebrow">
          <span>Entraînement Solo · 14 Rubriques & 12 Thématiques</span>
          <span class="chip">${grade.icon} <b>${grade.nom}</b> · ${stats.xp} XP</span>
        </div>
        <h1 class="rub" style="font-size:clamp(26px,5.5vw,44px)">Prêt pour le plateau ?</h1>
        <p class="lead">Lance un match ci-dessous, ou choisis directement l'une des <b>14 Rubriques</b> ou <b>12 Thématiques</b> (Capitales, Drapeaux, Animaux…) dans la liste.</p>

        <div class="setup" id="setup">
          <!-- 1. Format d'entraînement (3 boutons sur la même ligne) -->
          <div class="field">
            <span>1. Format de la partie</span>
            <div class="seg-row-3" id="seg-format">
              <button type="button" data-v="express" aria-pressed="${cfg.format === "express"}">
                <b>⚡ Express</b>
                <small>5 rubr. · ~4 min</small>
              </button>
              <button type="button" data-v="complet" aria-pressed="${cfg.format === "complet"}">
                <b>🏆 Complet</b>
                <small>Les 14 rubriques</small>
              </button>
              <button type="button" data-v="revision" aria-pressed="${
                cfg.format === "revision"
              }" ${errCount ? "" : "disabled"}>
                <b>🧠 Révision</b>
                <small>${errCount ? `${errCount} à revoir` : "0 erreur"}</small>
              </button>
            </div>
          </div>

          <!-- 2. Niveau & Chrono (3 boutons sur la même ligne) -->
          <div class="field">
            <span>2. Niveau & Temps par question</span>
            <div class="seg-row-3" id="seg-niv">
              ${Object.entries(NIVEAUX)
                .map(
                  ([k, v]) =>
                    `<button type="button" data-v="${k}" aria-pressed="${
                      cfg.niveau === k
                    }"><b>${v.nom}</b><small>${v.desc}</small></button>`
                )
                .join("")}
            </div>
            <div class="range" style="margin-top:2px">
              <input type="range" id="in-temps" min="10" max="90" step="5" value="${
                cfg.temps
              }" aria-label="Temps de réponse en secondes">
              <span class="led" id="t-lbl">${cfg.temps} s</span>
            </div>
          </div>

          <!-- 3. Options Audio & Voix (3 boutons sur la même ligne + Autorisation Micro) -->
          <div class="field">
            <span>3. Options Audio & Voix</span>
            <div class="seg-row-3" id="seg-audio">
              <button type="button" data-action="clavier" aria-pressed="${!cfg.voix}">
                <b>⌨️ Clavier</b>
                <small>Saisie écrite</small>
              </button>
              <button type="button" data-action="micro" aria-pressed="${cfg.voix}">
                <b>🎙️ À l'oral</b>
                <small>Réponse au micro</small>
              </button>
              <button type="button" data-action="lecture" id="btn-toggle-tts" aria-pressed="${
                cfg.lecture
              }" ${TTS ? "" : "disabled"}>
                <b>🗣️ Lecture ${cfg.lecture ? "ON" : "OFF"}</b>
                <small>Voix animateur</small>
              </button>
            </div>
            <div class="mic-perm-box" id="mic-perm-box" style="display:${
              cfg.voix ? "flex" : "none"
            }">
              <div style="flex:1;min-width:190px">
                <span id="mic-perm-txt"></span>
                <div id="mic-meter" class="mic-meter" style="display:none">
                  <div class="mic-meter-bar" id="mic-meter-bar"></div>
                </div>
              </div>
              <div class="mic-perm-actions">
                <button type="button" class="btn sm" id="b-test-mic">🎙️ Autoriser & Tester le micro</button>
                <button type="button" class="btn sm ghost" id="b-help-mic" style="display:none;color:var(--led)">🔓 Comment débloquer ?</button>
              </div>
            </div>
          </div>

          <!-- 4. Ton prénom / pseudo -->
          <div class="field">
            <span>4. Ton prénom / pseudo</span>
            <input type="text" id="in-nom" placeholder="Ex. Champion" value="${esc(
              cfg.nom
            )}" autocomplete="off" enterkeyhint="go" aria-label="Ton prénom ou pseudo">
          </div>

          <button class="btn btn-launch" type="button" id="b-start">🚀 Lancer la partie</button>
        </div>
      `;

      majBanniereMicroAccueil();

      $("#seg-format").addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b || b.disabled) return;
        cfg.format = b.dataset.v;
        $$("#seg-format button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      });

      $("#seg-niv").addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        cfg.niveau = b.dataset.v;
        $$("#seg-niv button").forEach((x) => x.setAttribute("aria-pressed", x === b));
        cfg.temps = NIVEAUX[cfg.niveau].t;
        $("#in-temps").value = cfg.temps;
        $("#t-lbl").textContent = cfg.temps + " s";
        setTimer();
      });

      $("#seg-audio").addEventListener("click", async (e) => {
        const b = e.target.closest("button");
        if (!b || b.disabled) return;
        const act = b.dataset.action;
        if (act === "clavier" || act === "micro") {
          cfg.voix = act === "micro";
          $$(
            '#seg-audio button[data-action="clavier"], #seg-audio button[data-action="micro"]'
          ).forEach((x) =>
            x.setAttribute("aria-pressed", (x.dataset.action === "micro") === cfg.voix)
          );
          store.set("geh-cfg", cfg);
          majBanniereMicroAccueil();
          // Dès que l'utilisateur touche "🎙️ À l'oral", demander immédiatement l'autorisation micro au téléphone !
          if (cfg.voix) {
            await demanderPermissionMicro(false);
          }
        } else if (act === "lecture") {
          cfg.lecture = !cfg.lecture;
          b.setAttribute("aria-pressed", cfg.lecture);
          b.querySelector("b").textContent = `🗣️ Lecture ${cfg.lecture ? "ON" : "OFF"}`;
          store.set("geh-cfg", cfg);
        }
      });

      $("#b-test-mic")?.addEventListener("click", async () => {
        SFX.init();
        await demanderPermissionMicro(true);
      });

      $("#b-help-mic")?.addEventListener("click", () => {
        ouvrirModalMicro();
      });

      $("#in-temps").addEventListener("input", (e) => {
        cfg.temps = +e.target.value;
        $("#t-lbl").textContent = cfg.temps + " s";
        setTimer();
      });

      $("#in-nom").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          $("#b-start").click();
        }
      });

      $("#b-start").addEventListener("click", async () => {
        SFX.init();
        cfg.nom = $("#in-nom").value.trim();
        V.bloque = false;
        store.set("geh-cfg", cfg);
        await nouvellePartie();
      });
    }

    function renderTabStats() {
      const d = $("#desk");
      const grade = getGrade(stats.xp);
      const pct = stats.qsTotal ? Math.round((stats.bonsTotal / stats.qsTotal) * 100) : 0;
      const errs = getMistakes();

      d.innerHTML = `
        <div class="eyebrow">
          <span>Carnet du joueur · Progression</span>
          <span class="chip">${grade.icon} <b>${grade.nom}</b> (${stats.xp} / ${
        grade.next
      } XP)</span>
        </div>
        <h2 class="rub">Mon Club & Statistiques</h2>

        <div class="stats-grid">
          <div class="stat-card"><div class="lbl">Expérience (XP)</div><div class="val">${
            stats.xp
          }</div></div>
          <div class="stat-card"><div class="lbl">Parties jouées</div><div class="val">${
            stats.parties
          }</div></div>
          <div class="stat-card"><div class="lbl">Réussite</div><div class="val">${pct}%</div></div>
          <div class="stat-card"><div class="lbl">Meilleure série</div><div class="val">🔥 ${
            stats.bestStreak
          }</div></div>
        </div>

        <div class="field">
          <span>Trophées du Club (${stats.badges.length} / ${BADGES_DEF.length})</span>
          <div class="badges-grid">
            ${BADGES_DEF.map((b) => {
              const ok = stats.badges.includes(b.id);
              return `<div class="badge-item ${ok ? "unlocked" : ""}">
                <span class="badge-icon">${b.icon}</span>
                <div><b style="display:block;font-size:13.5px">${esc(
                  b.nom
                )}</b><small class="hint" style="font-size:11.5px">${esc(
                b.desc
              )}</small></div>
              </div>`;
            }).join("")}
          </div>
        </div>

        <div class="field">
          <span>Questions à réviser (${errs.length})</span>
          ${
            errs.length
              ? `
            <div class="row">
              <button class="btn sm" type="button" id="b-launch-rev">🧠 Réviser maintenant (${Math.min(
                12,
                errs.length
              )} questions)</button>
              <button class="btn sm ghost" type="button" id="b-clear-rev">Vider la liste</button>
            </div>
            <ul class="review">
              ${errs
                .slice(0, 20)
                .map(
                  (e) => `<li>
                <span class="dot" style="background:var(--led)"></span>
                <div><b>${esc(e.rub)}</b> — ${esc(
                    e.q
                  )}<div class="exp">Réponse : <b style="color:var(--ok)">${esc(
                    Array.isArray(e.a) ? e.a[0] : e.a
                  )}</b>${e.info ? ` · ${esc(e.info)}` : ""}</div></div>
              </li>`
                )
                .join("")}
            </ul>
          `
              : `<p class="hint">Aucune erreur en attente ! Les questions manquées pendant tes parties apparaîtront automatiquement ici.</p>`
          }
        </div>
      `;

      $("#b-launch-rev")?.addEventListener("click", () => nouvellePartie("revision"));
      $("#b-clear-rev")?.addEventListener("click", () => {
        store.set("geh-mistakes", []);
        majBadgeErreurs();
        renderTabStats();
      });
    }

    function renderTabAtelier() {
      const d = $("#desk");
      const custom = store.get("geh-custom-qs", []);
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone;

      d.innerHTML = `
        <div class="eyebrow">
          <span>Application Next.js PWA · Mode Hors-Ligne & Micro</span>
          <span class="chip ok">v${window.GEH_VERSION || "2.4.0"}</span>
        </div>
        <h2 class="rub">Application, Mises à jour & Questions</h2>

        <!-- Installation sur téléphone -->
        <div class="stat-card" style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
            <div>
              <b style="font-size:16px">📱 Installer sur le téléphone (Mode Hors-ligne)</b>
              <div class="hint">${
                isStandalone
                  ? "✅ Application installée et active hors-ligne !"
                  : "Installe le jeu sur ton écran d'accueil pour jouer sans Internet."
              }</div>
            </div>
            <button class="btn sm" type="button" id="b-install-pwa">${
              isStandalone ? "✅ Déjà installée" : "📲 Installer l'application"
            }</button>
          </div>
          ${
            !isStandalone
              ? `<div class="did-you-know">
            <b>Installation rapide :</b><br>
            • <b>Android / Chrome</b> : Touche le bouton <b>« 📲 Installer »</b> (en haut ou ci-dessus) ou le menu <b>⋮ → Installer l'application</b>.<br>
            • <b>iPhone / iPad (Safari)</b> : Touche <b>Partager</b> ⬆️ en bas puis <b>« Sur l'écran d'accueil »</b>.
          </div>`
              : ""
          }
        </div>

        <!-- Diagnostic & Autorisation Microphone -->
        <div class="stat-card" style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
            <div>
              <b style="font-size:16px">🎙️ Accès Microphone du téléphone</b>
              <div class="hint" id="atelier-mic-status">${
                V.perm === "granted"
                  ? "✅ Microphone autorisé et fonctionnel."
                  : "Clique sur le bouton à droite pour demander l'autorisation micro à ton téléphone."
              }</div>
            </div>
            <button class="btn sm" type="button" id="b-atelier-mic">🎙️ Autoriser & Tester le micro</button>
          </div>
        </div>

        <!-- Système de Mise à jour -->
        <div class="stat-card" style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
            <div>
              <b style="font-size:16px">🔄 Mises à jour</b>
              <div class="hint" id="upd-status">Version installée : v${
                window.GEH_VERSION || "2.4.0"
              } · Prêt hors-ligne.</div>
            </div>
            <button class="btn sm ghost" type="button" id="b-check-update">🔍 Vérifier les mises à jour</button>
          </div>
        </div>

        <!-- Ajouter une question personnalisée -->
        <div class="stat-card" style="display:flex;flex-direction:column;gap:10px">
          <b style="font-size:16px">➕ Ajouter une question du Club (${
            custom.length
          } ajoutée${custom.length > 1 ? "s" : ""})</b>
          <div class="form-2col">
            <div class="field">
              <span>Rubrique ou Thématique</span>
              <select id="cq-rub">
                <optgroup label="📋 Rubriques Officielles">
                  <option value="sport">⚽ Sport</option>
                  <option value="cinema">🎬 Cinéma</option>
                  <option value="mots">🔤 Mots-croisés</option>
                  <option value="musique">🎵 Musique</option>
                  <option value="relais">🏃 Relais</option>
                  <option value="langage">📖 Langage</option>
                  <option value="franco">🌍 Francophonie</option>
                  <option value="monde">🌐 Monde contemporain</option>
                  <option value="eclairs">⚡ Éclairs</option>
                </optgroup>
                <optgroup label="🌍 Thématiques d'entraînement">
                  <option value="cap_afrique">🌍 Capitales : Afrique</option>
                  <option value="cap_europe">🇪🇺 Capitales : Europe</option>
                  <option value="cap_asie">🌏 Capitales : Asie</option>
                  <option value="cap_ameriques">🌎 Capitales : Amériques & Océanie</option>
                  <option value="drapeaux">🏳️ Drapeaux & Emblèmes</option>
                  <option value="animaux">🦁 Animaux : Cris, Petits & Records</option>
                  <option value="monnaies">🪙 Monnaies & Devises</option>
                  <option value="histoire_afrique">👑 Histoire & Empires d'Afrique</option>
                  <option value="inventions">🔬 Sciences, Corps & Inventions</option>
                  <option value="litterature">📚 Littérature & Mythologie</option>
                  <option value="geographie">🏔️ Fleuves, Montagnes & Détroits</option>
                </optgroup>
              </select>
            </div>
            <div class="field">
              <span>Réponse(s) (séparées par virgule)</span>
              <input id="cq-rep" placeholder="Ex. Yamoussoukro">
            </div>
          </div>
          <div class="field">
            <span>Question</span>
            <input id="cq-q" placeholder="Ex. Quelle est la capitale politique de la Côte d'Ivoire ?">
          </div>
          <div class="field">
            <span>Anecdote « Le savais-tu ? » (optionnel)</span>
            <input id="cq-info" placeholder="Ex. Devenue capitale politique en mars 1983.">
          </div>
          <div class="row">
            <button class="btn sm" type="button" id="b-add-cq">Enregistrer</button>
            <button class="btn sm ghost" type="button" id="b-export-cq">📤 Exporter (JSON)</button>
            <label class="btn sm ghost" style="cursor:pointer">
              📥 Importer (JSON)
              <input type="file" id="in-import-cq" accept=".json,application/json" hidden>
            </label>
          </div>
        </div>
      `;

      $("#b-install-pwa")?.addEventListener("click", () => {
        declencherInstallation();
      });

      $("#b-atelier-mic")?.addEventListener("click", async () => {
        const st = $("#atelier-mic-status");
        if (st) st.textContent = "🔔 Demande d'autorisation en cours…";
        const ok = await demanderPermissionMicro(true);
        if (st) {
          st.textContent = ok
            ? "✅ Microphone autorisé ! Parle pour tester."
            : "⚠️ Autorisation refusée ou connexion HTTP non sécurisée.";
        }
      });

      $("#b-check-update")?.addEventListener("click", verifierMiseAJourManuelle);

      $("#b-add-cq")?.addEventListener("click", () => {
        const rub = $("#cq-rub").value;
        const q = $("#cq-q").value.trim();
        const a = $("#cq-rep").value.trim();
        const info = $("#cq-info").value.trim();
        if (!q || !a) {
          $("#cq-q").focus();
          return;
        }
        const list = store.get("geh-custom-qs", []);
        list.unshift({ rub, q, a, info, date: new Date().toISOString() });
        store.set("geh-custom-qs", list);
        renderTabAtelier();
      });

      $("#b-export-cq")?.addEventListener("click", () => {
        const data = JSON.stringify(
          { version: window.GEH_VERSION, customQuestions: store.get("geh-custom-qs", []) },
          null,
          2
        );
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "genies-en-herbe-pack.json";
        a.click();
        URL.revokeObjectURL(url);
      });

      $("#in-import-cq")?.addEventListener("change", (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(reader.result);
            const arr = Array.isArray(parsed) ? parsed : parsed.customQuestions || [];
            if (arr.length) {
              const cur = store.get("geh-custom-qs", []);
              store.set("geh-custom-qs", [...arr, ...cur]);
              renderTabAtelier();
            }
          } catch (err) {}
        };
        reader.readAsText(f);
      });
    }

    /* ==========================================================================
       DÉROULEMENT D'UNE QUESTION SUR LE PLATEAU
       ========================================================================== */
    function itemCourant() {
      const r = S.rubs[S.ri];
      return { r, it: r.items[S.ii] };
    }

    function afficherQuestion() {
      const { r, it } = itemCourant();
      S.etat = "question";
      S.indice = it.type === "casse" ? 1 : 0;
      S.revealedLetters = 1;
      S.tmaxCur = it.type === "assoc" ? S.tmax * 2 : S.tmax;
      S.t = S.tmaxCur;
      S.assocSel = null;
      S.assocMap = {};
      lastTickSec = -1;

      const d = $("#desk");
      const num =
        it.type === "casse"
          ? "Devinette (40 → 10 pts)"
          : `Question ${S.ii + 1} / ${r.items.length}`;

      let corps = "";
      if (it.type === "texte") {
        let extra = "";
        if (it.mot) {
          extra = `<div class="grid-cells" id="mot-cells" aria-label="${
            it.mot.length
          } lettres, commence par ${it.mot[0]}">
            ${[...it.mot]
              .map(
                (c, i) =>
                  `<span class="cell ${i === 0 ? "given" : ""}">${i === 0 ? c : ""}</span>`
              )
              .join("")}
          </div>
          <div class="row" style="justify-content:space-between">
            <span class="chip">${it.mot.length} lettres · commence par <b>${
            it.mot[0]
          }</b></span>
            ${
              it.mot.length > 3
                ? `<button class="btn sm ghost" type="button" id="b-hint-let">💡 +1 lettre</button>`
                : ""
            }
          </div>`;
        }
        if (it.lettre) {
          extra = `<div class="row" style="flex-wrap:nowrap"><span class="letter">${it.lettre}</span><span class="hint">Toutes les réponses de cette série commencent par la lettre <b style="color:var(--led)">${it.lettre}</b>.</span></div>`;
        }
        if (it.theme) {
          extra = `<div><span class="chip">Thème : <b>${esc(it.theme)}</b></span></div>`;
        } else if (it.sousTitre) {
          extra = `<div><span class="chip">🎯 Focus : <b>${esc(it.sousTitre)}</b></span></div>`;
        }
        if (it.relais) {
          extra = `<div class="relais-chain">
            ${r.items
              .map(
                (_, idx) =>
                  `<span class="relais-step ${
                    idx < S.ii ? "done" : idx === S.ii ? "cur" : ""
                  }">⚡ Étape ${idx + 1}</span>`
              )
              .join("")}
          </div>`;
        }
        corps = `${extra}<p class="q">${esc(it.q)}</p>${champ()}`;
      } else if (it.type === "casse") {
        corps = `<p class="q" style="font-size:18px">Qui ou que suis-je ? Moins tu utilises d'indices, plus tu gagnes de points !</p>
          <ol class="clues" id="clues"></ol>
          <button class="btn ghost sm" type="button" id="b-ind" style="align-self:flex-start">🔓 Débloquer l'indice suivant (−10 pts)</button>
          ${champ()}`;
      } else if (it.type === "assoc") {
        const droite = shuffle(it.paires.map((p, i) => ({ t: p[1], i })));
        S.assocRight = droite;
        corps = `<div><span class="chip">Thème : <b>${esc(it.theme)}</b></span></div>
          <p class="hint" style="margin:0">Touche un élément à gauche, puis son partenaire à droite.</p>
          <div class="assoc">
            <div class="col" id="colL">${it.paires
              .map(
                (p, i) =>
                  `<button class="tile" type="button" data-l="${i}"><span class="tag">${
                    i + 1
                  }</span><span>${esc(p[0])}</span></button>`
              )
              .join("")}</div>
            <div class="col" id="colR">${droite
              .map(
                (p, k) =>
                  `<button class="tile" type="button" data-r="${k}"><span class="tag"></span><span>${esc(
                    p.t
                  )}</span></button>`
              )
              .join("")}</div>
          </div>
          <div class="answer-actions">
            <button class="btn" type="button" id="b-assoc" disabled>✓ Valider</button>
            <button class="btn ghost" type="button" id="b-skip">Passer</button>
          </div>`;
      }

      const cmds =
        it.type === "casse"
          ? "« indice » ou « je passe »"
          : it.type === "assoc"
          ? "relie les paires puis dis « valider »"
          : "« je passe » pour passer";

      const voix = cfg.voix
        ? `<div class="voice">
            <button class="mic" type="button" id="b-mic" aria-label="Toucher pour parler au micro">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
            </button>
            <div class="heard" id="heard">
              <span class="st">${
                cfg.lecture
                  ? "Écoute la question…"
                  : "👆 Touche le bouton 🎙️ pour parler"
              }</span>
              <span class="tx"></span>
              <span class="hint">Dis ta réponse · ${cmds}</span>
            </div>
          </div>`
        : "";

      d.innerHTML = `
        <div class="eyebrow">
          <div class="eyebrow-left">
            <span>${
              r.isTheme
                ? "🌍 Entraînement Thématique"
                : `Rubrique ${S.ri + 1}/${S.rubs.length}`
            }</span>
            <span>·</span>
            <span>${num}</span>
          </div>
          <div class="row" style="gap:6px">
            ${
              cfg.lecture && TTS
                ? `<button class="btn sm ghost" type="button" id="b-replay-tts" style="padding:4px 9px;font-size:12px">🔊 Relire</button>`
                : ""
            }
            <button class="btn sm ghost" type="button" id="b-quit" style="padding:4px 9px;font-size:12px">✕ Quitter</button>
          </div>
        </div>
        <h2 class="rub">${r.icon || ""} ${esc(r.nom)}</h2>
        ${corps}
        ${voix}
        <div id="fb"></div>
      `;

      $("#b-quit")?.addEventListener("click", () => accueil("jouer"));
      $("#b-replay-tts")?.addEventListener("click", () => {
        focusRep();
        lire(texteALire(r, it), () => focusRep());
      });

      if (it.type === "casse") majIndices();
      if (it.type === "assoc") brancherAssoc(it);

      const inp = $("#rep");
      if (inp) {
        focusRep();
        $("#b-val").addEventListener("click", () => valider());
        $("#b-pass")?.addEventListener("click", () => valider(true));
        inp.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            valider();
          }
        });
        if (it.mot) {
          inp.addEventListener("input", () => majGrilleMot(it.mot, inp.value));
          $("#b-hint-let")?.addEventListener("click", () => {
            if (S.revealedLetters < it.mot.length - 1) {
              S.revealedLetters++;
              majGrilleMot(it.mot, inp.value);
              focusRep();
            }
          });
        }
      }

      const bi = $("#b-ind");
      if (bi) bi.addEventListener("click", indiceSuivant);
      const bs = $("#b-skip");
      if (bs) bs.addEventListener("click", () => valider(true));

      const bm = $("#b-mic");
      if (bm) {
        bm.addEventListener("click", async () => {
          if (V.on || V.want) {
            stopEcoute();
            return;
          }
          try {
            TTS && TTS.cancel();
          } catch (e) {}
          V.bloque = false;
          if (V.perm !== "granted") {
            const ok = await demanderPermissionMicro(false);
            if (!ok) {
              micBloque("not-allowed");
              return;
            }
          }
          ecouter(true);
        });
      }

      renderScores();
      renderListe();
      setTimer();
      stopEcoute();
      clearInterval(tick);
      const qid = ++S.qid;
      lire(texteALire(r, it), () => {
        if (!S || S.qid !== qid || S.etat !== "question") return;
        focusRep();
        demarrer();
        ecouter(false);
        majMic();
      });
    }

    function focusRep() {
      // Focus automatique désactivé pour éviter l'ouverture intempestive du clavier virtuel sur mobile
    }

    function majGrilleMot(mot, val) {
      const clean = String(val || "")
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^A-Z]/g, "");
      const cells = $$("#mot-cells .cell");
      cells.forEach((c, i) => {
        if (i < S.revealedLetters) {
          c.textContent = mot[i];
          c.className = "cell given";
        } else {
          const ch = clean[i] || (clean[0] !== mot[0] ? clean[i - 1] : "") || "";
          c.textContent = ch;
          c.className = "cell" + (ch ? " typed" : "");
        }
      });
    }

    /* Input sur 1 ligne pleine largeur + Boutons Valider & Passer juste en dessous */
    function champ() {
      return `<div class="answer" id="form-rep">
        <input id="rep" placeholder="Tape ta réponse ici…" aria-label="Ta réponse" enterkeyhint="done" autocomplete="off" autocapitalize="off" spellcheck="false">
        <div class="answer-actions">
          <button class="btn" type="button" id="b-val">✓ Valider</button>
          <button class="btn ghost" type="button" id="b-pass">Passer →</button>
        </div>
      </div>`;
    }

    function majIndices() {
      const { it } = itemCourant();
      $("#clues").innerHTML = it.ind
        .map((t, i) =>
          i < S.indice
            ? `<li><span class="pts">${40 - i * 10} pt</span><span>${esc(t)}</span></li>`
            : `<li class="locked"><span class="pts">${
                40 - i * 10
              } pt</span><span>🔒 Indice ${i + 1}</span></li>`
        )
        .join("");
      const b = $("#b-ind");
      if (b) b.disabled = S.indice >= 4;
      renderListe();
    }

    function indiceSuivant() {
      if (S.etat !== "question") return;
      if (S.indice >= 4) {
        valider(true);
        return;
      }
      S.indice++;
      S.t = S.tmaxCur;
      majIndices();
      focusRep();
      clearInterval(tick);
      setTimer();
      stopEcoute();
      const { it } = itemCourant(),
        qid = ++S.qid;
      lire(`Indice ${S.indice}. ${it.ind[S.indice - 1]}`, () => {
        if (!S || S.qid !== qid || S.etat !== "question") return;
        focusRep();
        demarrer();
        ecouter(false);
      });
    }

    function brancherAssoc(it) {
      const L = $("#colL"),
        R = $("#colR");
      const clearPairClasses = (el) =>
        el.classList.remove("pair-0", "pair-1", "pair-2", "pair-3");
      const maj = () => {
        L.querySelectorAll(".tile").forEach((b) => {
          const i = +b.dataset.l;
          clearPairClasses(b);
          b.classList.toggle("sel", S.assocSel === i);
          if (i in S.assocMap) b.classList.add(`pair-${i % 4}`);
        });
        R.querySelectorAll(".tile").forEach((b) => {
          const k = +b.dataset.r;
          clearPairClasses(b);
          const l = Object.keys(S.assocMap).find((x) => S.assocMap[x] === k);
          if (l !== undefined) b.classList.add(`pair-${+l % 4}`);
          b.querySelector(".tag").textContent = l !== undefined ? +l + 1 : "";
        });
        $("#b-assoc").disabled = Object.keys(S.assocMap).length < it.paires.length;
      };
      L.addEventListener("click", (e) => {
        const b = e.target.closest(".tile");
        if (!b || S.etat !== "question") return;
        const i = +b.dataset.l;
        if (i in S.assocMap) {
          delete S.assocMap[i];
          S.assocSel = i;
        } else S.assocSel = S.assocSel === i ? null : i;
        maj();
      });
      R.addEventListener("click", (e) => {
        const b = e.target.closest(".tile");
        if (!b || S.etat !== "question") return;
        const k = +b.dataset.r;
        const deja = Object.keys(S.assocMap).find((x) => S.assocMap[x] === k);
        if (deja !== undefined) {
          delete S.assocMap[deja];
          maj();
          return;
        }
        if (S.assocSel === null) return;
        S.assocMap[S.assocSel] = k;
        SFX.tick();
        const libre = it.paires.findIndex((_, i) => !(i in S.assocMap));
        S.assocSel = libre < 0 ? null : libre;
        maj();
      });
      $("#b-assoc").addEventListener("click", () => valider());
      S.assocSel = 0;
      maj();
    }

    function demarrer() {
      clearInterval(tick);
      let last = performance.now();
      tick = setInterval(() => {
        const now = performance.now();
        S.t -= (now - last) / 1000;
        last = now;
        if (S.t <= 0) {
          S.t = 0;
          setTimer();
          const { it } = itemCourant();
          if (it.type === "casse" && S.indice < 4) {
            indiceSuivant();
            return;
          }
          valider(true);
          return;
        }
        setTimer();
      }, 100);
    }

    function valider(passe) {
      resetAccumulationVocale();
      if (!S || S.etat !== "question") return;
      const { r, it } = itemCourant();
      let ok = false,
        pts = 0,
        saisie = "",
        attendu = "";

      if (it.type === "assoc") {
        const tilesL = $$("#colL .tile");
        const tilesR = $$("#colR .tile");
        ok = !passe && it.paires.every((_, i) => S.assocRight[S.assocMap[i]]?.i === i);
        tilesL.forEach((b) => {
          const i = +b.dataset.l;
          b.classList.add(S.assocRight[S.assocMap[i]]?.i === i ? "good" : "wrong");
        });
        tilesR.forEach((b) => {
          const k = +b.dataset.r;
          const l = Object.keys(S.assocMap).find((x) => S.assocMap[x] === k);
          const isRight = l !== undefined && S.assocRight[k]?.i === +l;
          b.classList.add(isRight ? "good" : "wrong");
        });
        pts = ok ? 10 : 0;
        attendu = it.paires.map((p) => `${p[0]} → ${p[1]}`).join(" · ");
        saisie = passe ? "(passée)" : "association";
        if (ok) unlockBadge("assoc_master");
      } else {
        saisie = passe ? "" : $("#rep")?.value || "";
        if (!passe && !saisie.trim()) {
          return;
        }
        ok = !passe && juste([saisie, ...(S.alts || [])], it.a);
        pts = ok ? (it.type === "casse" ? 40 - (S.indice - 1) * 10 : 10) : 0;
        attendu = it.a[0];
        if (ok && it.type === "casse" && S.indice === 1) unlockBadge("detective");
      }

      clearInterval(tick);
      S.etat = "retour";
      try {
        TTS && TTS.cancel();
      } catch (e) {}
      const oral = !!S.alts;
      S.alts = null;

      const valeurPossible = it.type === "casse" ? 40 - (S.indice - 1) * 10 : 10;
      S.score += pts;
      r.pts += pts;
      r.fait += 1;

      if (ok) {
        r.ok++;
        S.streak++;
        if (S.streak > stats.bestStreak) stats.bestStreak = S.streak;
        if (S.streak >= 5) unlockBadge("streak_5");
        if (S.streak >= 10) unlockBadge("streak_10");
        if (S.streak >= 3) SFX.streak();
        else SFX.ok();
        if (S.streak === 5 || S.streak === 10) lancerConfettis();
        if (it.isRevision) {
          removeMistake(it.q);
          unlockBadge("reviser");
        }
      } else {
        S.streak = 0;
        SFX.ko();
        if (it.type === "texte") {
          addMistake({ q: it.q, a: it.a, info: it.info, rub: r.nom });
        }
      }

      stats.qsTotal++;
      if (ok) {
        stats.bonsTotal++;
        stats.xp += pts;
      }
      saveStats();

      S.log.push({
        rub: r.nom,
        q:
          it.type === "assoc"
            ? `Association : ${it.theme}`
            : it.type === "casse"
            ? "Casse-tête"
            : it.q,
        ok,
        saisie,
        attendu,
        info: it.info || "",
        pts
      });

      const desk = $("#desk");
      desk.classList.remove("flash-ok", "flash-ko");
      void desk.offsetWidth;
      desk.classList.add(ok ? "flash-ok" : "flash-ko");

      const inp = $("#rep");
      if (inp) inp.disabled = true;
      $$("#form-rep button, #b-ind, #b-assoc, #b-skip, #b-hint-let").forEach(
        (b) => (b.disabled = true)
      );
      if (it.mot)
        $$("#mot-cells .cell").forEach((c, i) => {
          c.textContent = it.mot[i];
          c.className = "cell given";
        });

      const finRelais = it.relais && !ok && S.ii < r.items.length - 1;
      if (it.relais && ok && S.ii === r.items.length - 1 && r.ok === r.items.length) {
        unlockBadge("relais_master");
      }
      const corrigeable = !ok && !passe && it.type !== "assoc";

      $("#fb").innerHTML = `
        <div class="feedback ${ok ? "ok" : "ko"}" id="fbox">
          <div>
            <strong id="fb-t">${
              ok ? `✓ Bravo ! +${pts} points` : passe ? "⏭️ Question passée" : "✗ Raté"
            }</strong>
            ${oral ? `<div class="hint">J'ai entendu : « ${esc(saisie)} »</div>` : ""}
            <div style="margin-top:3px">${
              ok ? "Bonne réponse : " : "Réponse attendue : "
            }<b style="color:var(--fg);font-size:18px">${esc(attendu)}</b></div>
            ${
              finRelais
                ? `<div class="hint" id="fb-relais" style="color:var(--bad);margin-top:3px">⚠️ Erreur au relais : la rubrique s'arrête ici.</div>`
                : ""
            }
          </div>
          ${
            it.info
              ? `<div class="did-you-know">💡 <b>Le savais-tu ?</b> ${esc(it.info)}</div>`
              : ""
          }
          <div class="feedback-actions">
            ${
              corrigeable
                ? `<button class="btn sm ghost" type="button" id="b-fix">Mal compris ? Compter juste</button>`
                : ""
            }
            <button class="btn" type="button" id="b-next">${
              estDernier(finRelais) ? "🏁 Voir les résultats" : "Question suivante →"
            }</button>
          </div>
        </div>
      `;

      $("#b-next").addEventListener("click", suivant);
      $("#b-next").focus();
      if (finRelais) S.coupeRelais = true;

      const bf = $("#b-fix");
      if (bf) {
        bf.addEventListener("click", () => {
          S.score += valeurPossible;
          r.pts += valeurPossible;
          r.ok++;
          stats.bonsTotal++;
          stats.xp += valeurPossible;
          saveStats();
          if (it.type === "texte") removeMistake(it.q);
          const l = S.log[S.log.length - 1];
          l.ok = true;
          l.pts = valeurPossible;
          l.corrige = true;
          if (it.relais) {
            S.coupeRelais = false;
            $("#fb-relais")?.remove();
          }
          $("#fbox").className = "feedback ok";
          $("#fb-t").textContent = `✓ +${valeurPossible} points (accordé)`;
          bf.remove();
          $("#b-next").textContent = estDernier(false)
            ? "🏁 Voir les résultats"
            : "Question suivante →";
          SFX.ok();
          renderScores();
          renderListe();
        });
      }

      renderScores();
      renderListe();
      setTimer();
      if (cfg.voix) {
        montrer("", false);
        V.want = true;
        if (!V.on && !V.rec) ecouter(false);
        majMic();
      }
    }

    function estDernier(coupe) {
      const r = S.rubs[S.ri];
      return S.ri === S.rubs.length - 1 && (coupe || S.ii >= r.items.length - 1);
    }

    function suivant() {
      if (!S || S.etat !== "retour") return;
      const r = S.rubs[S.ri];
      if (S.coupeRelais || S.ii >= r.items.length - 1) {
        S.coupeRelais = false;
        S.ri++;
        S.ii = 0;
      } else {
        S.ii++;
      }
      if (S.ri >= S.rubs.length) {
        fin();
        return;
      }
      afficherQuestion();
    }

    function fin() {
      S.etat = "fin";
      clearInterval(tick);
      stopEcoute();
      SFX.win();

      stats.parties++;
      unlockBadge("first_game");

      const tot = S.score;
      const max = S.rubs.reduce(
        (a, r) => a + (r.id === "casse" ? r.items.length * 40 : r.items.length * 10),
        0
      );
      if (tot >= 300) unlockBadge("score_300");
      saveStats();

      const best = store.get("geh-best");
      let record = false;
      if (!best || tot > best.pts) {
        store.set("geh-best", { pts: tot, niveau: cfg.niveau });
        record = true;
      }
      if (record || tot >= max * 0.6) lancerConfettis();

      const bons = S.log.filter((l) => l.ok).length;
      const titre =
        tot >= max * 0.75
          ? "👑 Génie en Herbe confirmé !"
          : tot >= max * 0.5
          ? "👏 Très belle performance !"
          : tot >= max * 0.25
          ? "💪 Bon entraînement, continue !"
          : "🌱 Chaque partie te rend plus fort !";

      $("#desk").innerHTML = `
        <div class="eyebrow">
          <span>Fin de partie · Niveau ${NIVEAUX[cfg.niveau].nom}</span>
          ${record ? '<span class="chip ok">🏆 <b>Nouveau record !</b></span>' : ""}
        </div>
        <h2 class="rub">${titre}</h2>
        <div class="row" style="align-items:flex-end;gap:20px">
          <div>
            <div class="led big">${tot}</div>
            <div class="hint">sur ${max} points possibles</div>
          </div>
          <div class="stat-card" style="flex:1;min-width:160px">
            <div class="lbl">Bilan de la session</div>
            <div style="font-size:17px;font-weight:700;margin-top:3px">${bons} / ${
        S.log.length
      } réponses justes</div>
            <div class="hint">+${tot} XP ajoutés à ton profil</div>
          </div>
        </div>
        <div class="feedback-actions">
          <button class="btn" type="button" id="b-rejouer">🔄 Rejouer</button>
          ${
            getMistakes().length
              ? `<button class="btn ghost" type="button" id="b-rev-now">🧠 Réviser (${
                  getMistakes().length
                })</button>`
              : ""
          }
          <button class="btn ghost" type="button" id="b-menu">🏠 Menu</button>
        </div>
        <div class="field">
          <span>Corrigé détaillé & Culture générale</span>
          <ul class="review">
            ${S.log
              .map(
                (l) => `<li>
              <span class="dot" style="background:var(${l.ok ? "--ok" : "--bad"})"></span>
              <div>
                <b>${esc(l.rub)}</b> — ${esc(l.q)}
                <div class="exp">Réponse : <b style="color:var(--fg)">${esc(
                  l.attendu
                )}</b>${
                  !l.ok && l.saisie && l.saisie !== "association"
                    ? ` · ta saisie : « ${esc(l.saisie)} »`
                    : ""
                }${
                  l.pts ? ` · <span style="color:var(--ok)">+${l.pts} pts</span>` : ""
                }</div>
                ${
                  l.info
                    ? `<div class="hint" style="color:var(--led);margin-top:2px">💡 ${esc(
                        l.info
                      )}</div>`
                    : ""
                }
              </div>
            </li>`
              )
              .join("")}
          </ul>
        </div>
      `;

      $("#b-rejouer").addEventListener("click", () => nouvellePartie());
      $("#b-rev-now")?.addEventListener("click", () => nouvellePartie("revision"));
      $("#b-menu").addEventListener("click", () => accueil("jouer"));
      renderScores();
      renderListe();
      setTimer();
    }

    /* --- Événements Globaux --- */
    document.addEventListener("keydown", (e) => {
      if (!S) return;
      if (e.key === "Escape" && S.etat === "question") {
        e.preventDefault();
        valider(true);
      } else if (
        e.key === "Enter" &&
        S.etat === "retour" &&
        document.activeElement?.id !== "b-next"
      ) {
        e.preventDefault();
        suivant();
      } else if (
        S.etat === "question" &&
        e.key.length === 1 &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey
      ) {
        const inp = $("#rep");
        if (inp && !inp.disabled && document.activeElement !== inp) {
          inp.focus();
        }
      }
    });

    $("#side-switch").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-sm]");
      if (!b) return;
      sideMode = b.dataset.sm;
      $$("#side-switch button").forEach((x) => x.classList.toggle("active", x === b));
      renderListe();
    });

    $("#rlist").addEventListener("click", async (e) => {
      const liTheme = e.target.closest("li[data-ti]");
      if (liTheme) {
        fermerDrawer();
        await nouvellePartie("theme", +liTheme.dataset.ti);
        return;
      }
      const li = e.target.closest("li[data-ri]");
      if (!li) return;
      const idx = +li.dataset.ri;
      fermerDrawer();
      if (!S) {
        await nouvellePartie("rubrique", idx);
      } else if (S.etat !== "fin" && idx < S.rubs.length) {
        S.ri = idx;
        S.ii = 0;
        afficherQuestion();
      }
    });

    $("#nav-tabs").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-tab]");
      if (!b) return;
      accueil(b.dataset.tab);
    });

    $("#logo-home").addEventListener("click", () => accueil("jouer"));
    $("#title-home").addEventListener("click", () => accueil("jouer"));

    function majBtnSfx() {
      const b = $("#b-sfx");
      b.textContent = cfg.sfx ? "🔊" : "🔇";
      b.classList.toggle("muted", !cfg.sfx);
    }
    $("#b-sfx").addEventListener("click", () => {
      cfg.sfx = !cfg.sfx;
      store.set("geh-cfg", cfg);
      majBtnSfx();
      if (cfg.sfx) SFX.ok();
    });
    majBtnSfx();

    function ouvrirDrawer() {
      $("#side-panel").classList.add("drawer-open");
      $("#b-close-drawer").style.display = "inline-flex";
      $("#backdrop").classList.add("show");
    }
    function fermerDrawer() {
      $("#side-panel").classList.remove("drawer-open");
      $("#b-close-drawer").style.display = "none";
      $("#backdrop").classList.remove("show");
    }
    $("#b-mob-rubs").addEventListener("click", ouvrirDrawer);
    $("#b-close-drawer").addEventListener("click", fermerDrawer);
    $("#backdrop").addEventListener("click", fermerDrawer);

    /* ==========================================================================
       GESTION PWA, OPTION D'INSTALLATION ACTIVE, HORS-LIGNE & MISES À JOUR
       ========================================================================== */
    let deferredInstallPrompt = window.__deferredPwaPrompt || null;
    let waitingSW = null;

    function majBoutonInstallEntete() {
      const btnTop = $("#b-install-top");
      if (!btnTop) return;
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true;
      btnTop.style.display = isStandalone ? "none" : "inline-flex";
    }

    async function declencherInstallation() {
      SFX.init();
      const promptEvent = deferredInstallPrompt || window.__deferredPwaPrompt;
      if (promptEvent) {
        try {
          promptEvent.prompt();
          const choice = await promptEvent.userChoice;
          if (choice && choice.outcome === "accepted") {
            deferredInstallPrompt = null;
            window.__deferredPwaPrompt = null;
            SFX.ok();
            fermerModalInstallation();
            majBoutonInstallEntete();
            if (curTab === "atelier" && !S) renderTabAtelier();
          }
          return;
        } catch (e) {}
      }
      // Si l'invite native n'est pas directement disponible (ex: iOS Safari ou déjà installé),
      // afficher le guide interactif d'installation adapté à l'appareil
      ouvrirModalInstallation();
    }

    function ouvrirModalInstallation() {
      const modal = $("#install-modal");
      const body = $("#install-modal-steps");
      if (!modal || !body) return;
      const ua = navigator.userAgent || "";
      const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      const isAndroid = /Android/i.test(ua);

      if (isIOS) {
        body.innerHTML = `
          <li><span class="step-num">1</span><div>Touche le bouton <b>Partager ⬆️</b> situé dans la barre de Safari (en bas ou en haut de l'écran).</div></li>
          <li><span class="step-num">2</span><div>Fais défiler le menu et touche <b>« Sur l'écran d'accueil ➕ »</b>.</div></li>
          <li><span class="step-num">3</span><div>Valide en touchant <b>« Ajouter »</b> en haut à droite : l'icône <b>Génies en Herbe</b> sera installée sur ton téléphone !</div></li>
        `;
      } else if (isAndroid) {
        body.innerHTML = `
          <li><span class="step-num">1</span><div>Touche le menu <b>⋮</b> (les 3 petits points en haut à droite de Chrome).</div></li>
          <li><span class="step-num">2</span><div>Sélectionne <b>« Installer l'application »</b> ou <b>« Ajouter à l'écran d'accueil »</b>.</div></li>
          <li><span class="step-num">3</span><div>Confirme : l'application s'installera sur ton téléphone et fonctionnera même sans Internet !</div></li>
        `;
      } else {
        body.innerHTML = `
          <li><span class="step-num">1</span><div>Dans la barre d'adresse en haut à droite de ton navigateur (Chrome / Edge), clique sur l'icône <b>📲 Installer Génies en Herbe</b> (ou menu <b>⋮ → Enregistrer et partager → Installer la page en tant qu'application</b>).</div></li>
          <li><span class="step-num">2</span><div>Sur téléphone (Android / iPhone), ouvre cette page et touche <b>« 📲 Installer »</b> ou <b>Partager → Sur l'écran d'accueil</b>.</div></li>
        `;
      }
      modal.classList.add("show");
    }

    function fermerModalInstallation() {
      $("#install-modal")?.classList.remove("show");
    }

    $("#b-install-top")?.addEventListener("click", declencherInstallation);
    $("#b-close-install-modal")?.addEventListener("click", fermerModalInstallation);
    $("#install-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "install-modal") fermerModalInstallation();
    });

    $("#b-close-mic-modal")?.addEventListener("click", fermerModalMicro);
    $("#mic-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "mic-modal") fermerModalMicro();
    });
    $("#b-retry-mic-modal")?.addEventListener("click", async () => {
      fermerModalMicro();
      SFX.init();
      await demanderPermissionMicro(true);
    });
    $("#b-switch-keyboard")?.addEventListener("click", () => {
      fermerModalMicro();
      cfg.voix = false;
      store.set("geh-cfg", cfg);
      if (!S) renderAccueil();
      SFX.ding();
    });

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      window.__deferredPwaPrompt = e;
      majBoutonInstallEntete();
      if (curTab === "atelier" && !S) renderTabAtelier();
    });

    window.addEventListener("pwa-prompt-ready", () => {
      deferredInstallPrompt = window.__deferredPwaPrompt;
      majBoutonInstallEntete();
      if (curTab === "atelier" && !S) renderTabAtelier();
    });

    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      window.__deferredPwaPrompt = null;
      fermerModalInstallation();
      majBoutonInstallEntete();
      if (curTab === "atelier" && !S) renderTabAtelier();
    });

    majBoutonInstallEntete();

    function majReseau() {
      const on = navigator.onLine;
      $("#net-dot").classList.toggle("offline", !on);
      $("#net-lbl").textContent = on ? "Prêt hors-ligne" : "Mode Hors-ligne ✓";
    }
    window.addEventListener("online", majReseau);
    window.addEventListener("offline", majReseau);
    majReseau();

    function afficherBanniereMaj(worker) {
      waitingSW = worker;
      $("#update-banner").classList.add("show");
    }

    $("#b-apply-update").addEventListener("click", () => {
      if (waitingSW) {
        waitingSW.postMessage({ type: "SKIP_WAITING" });
      } else {
        window.location.reload();
      }
    });
    $("#b-dismiss-update").addEventListener("click", () => {
      $("#update-banner").classList.remove("show");
    });

    async function verifierMiseAJourManuelle() {
      const st = $("#upd-status");
      if (!navigator.onLine) {
        if (st)
          st.textContent =
            "⚠️ Hors-ligne : reconnecte-toi à Internet pour rechercher une mise à jour.";
        return;
      }
      if (st) st.textContent = "🔄 Recherche de mises à jour…";
      try {
        if ("serviceWorker" in navigator) {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg) {
            await reg.update();
            if (reg.waiting) {
              afficherBanniereMaj(reg.waiting);
              if (st)
                st.textContent =
                  "✨ Nouvelle version trouvée ! Clique sur « Mettre à jour » en haut.";
              return;
            }
            if (reg.active) {
              const mc = new MessageChannel();
              reg.active.postMessage({ type: "REFRESH_CACHE" }, [mc.port2]);
            }
          }
        }
        if (st)
          st.textContent = `✅ Application à jour (v${
            window.GEH_VERSION || "2.4.0"
          }) et prête hors-ligne !`;
      } catch (e) {
        if (st) st.textContent = "✅ Version actuelle prête hors-ligne.";
      }
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          if (reg.waiting) {
            afficherBanniereMaj(reg.waiting);
          }
          reg.addEventListener("updatefound", () => {
            const nw = reg.installing;
            if (!nw) return;
            nw.addEventListener("statechange", () => {
              if (nw.state === "installed" && navigator.serviceWorker.controller) {
                afficherBanniereMaj(nw);
              }
            });
          });
        })
        .catch(() => {});

      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    }

    const urlMode = new URLSearchParams(window.location.search).get("mode");
    if (urlMode && ["express", "complet", "revision"].includes(urlMode)) {
      cfg.format = urlMode;
    }

    accueil("jouer");
  }, [mounted]);

  if (!mounted) {
    return <div className="wrap" style={{ minHeight: "100vh" }} />;
  }

  return (
    <>
      <canvas id="confetti-canvas" />
      <div className="backdrop" id="backdrop" />

      <div className="wrap">
        {/* Bannière de mise à jour PWA */}
        <div
          className="update-banner"
          id="update-banner"
          role="status"
          aria-live="polite"
        >
          <div>
            <strong style={{ color: "var(--ok)" }}>
              ✨ Nouvelle version disponible !
            </strong>
            <span
              className="hint"
              style={{ display: "block", color: "var(--fg)" }}
            >
              Une mise à jour du jeu et des questions est prête.
            </span>
          </div>
          <div className="row">
            <button className="btn sm ok" type="button" id="b-apply-update">
              Mettre à jour
            </button>
            <button className="btn sm ghost" type="button" id="b-dismiss-update">
              Plus tard
            </button>
          </div>
        </div>

        {/* Fenêtre modale d'installation PWA (active sur tous les appareils) */}
        <div
          className="install-modal"
          id="install-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="install-modal-title"
        >
          <div className="install-modal-card">
            <div className="eyebrow">
              <span>Application Hors-Ligne (PWA)</span>
              <span className="chip ok">100% Gratuit</span>
            </div>
            <h3 className="rub" id="install-modal-title" style={{ fontSize: "24px" }}>
              📲 Installer Génies en Herbe
            </h3>
            <p className="hint" style={{ margin: 0, color: "var(--fg)" }}>
              Installe l&apos;application sur ton écran d&apos;accueil pour jouer en plein écran et hors-ligne :
            </p>
            <ol className="install-steps" id="install-modal-steps" />
            <div className="row" style={{ justifyContent: "flex-end", marginTop: "4px" }}>
              <button
                className="btn sm"
                type="button"
                id="b-close-install-modal"
                style={{ width: "100%" }}
              >
                ✓ J&apos;ai compris
              </button>
            </div>
          </div>
        </div>

        {/* Fenêtre modale d'aide pour débloquer le microphone */}
        <div
          className="install-modal"
          id="mic-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mic-modal-title"
        >
          <div className="install-modal-card">
            <div className="eyebrow">
              <span>Autorisation Navigateur</span>
              <span className="chip warn" id="mic-modal-badge">Microphone</span>
            </div>
            <h3 className="rub" id="mic-modal-title" style={{ fontSize: "22px" }}>
              🎙️ Comment débloquer le micro ?
            </h3>
            <p className="hint" id="mic-modal-intro" style={{ margin: 0, color: "var(--fg)" }}>
              Le navigateur ou le système bloque actuellement l&apos;accès au micro pour ce site :
            </p>
            <ol className="install-steps" id="mic-modal-steps" />
            <div className="col" style={{ gap: "8px", marginTop: "6px" }}>
              <button
                className="btn sm"
                type="button"
                id="b-retry-mic-modal"
                style={{ width: "100%" }}
              >
                🔄 Tester à nouveau l&apos;accès au micro
              </button>
              <button
                className="btn sm ghost"
                type="button"
                id="b-switch-keyboard"
                style={{ width: "100%" }}
              >
                ⌨️ Jouer en mode Clavier / Buzzer (sans micro)
              </button>
              <button
                className="btn sm ghost"
                type="button"
                id="b-close-mic-modal"
                style={{ width: "100%" }}
              >
                ✕ Fermer cette aide
              </button>
            </div>
          </div>
        </div>

        {/* Tableau de score & Entête Plateau TV (Optimisé petit écran & desktop) */}
        <header className="board">
          <div className="board-top">
            <div className="brand-area">
              <img
                src="/icons/icon.svg"
                alt=""
                className="brand-logo"
                id="logo-home"
                title="Retour à l'accueil"
              />
              <div className="brand" id="title-home">
                Génies en Herbe
                <small>
                  <span className="status-dot" id="net-dot" />
                  <span id="net-lbl">Prêt hors-ligne</span>
                </small>
              </div>
            </div>

            <div className="board-actions">
              <button
                className="btn-install-head"
                type="button"
                id="b-install-top"
                title="Installer l'application sur le téléphone"
              >
                📲 Installer
              </button>
              <button
                className="icon-btn"
                type="button"
                id="b-sfx"
                title="Effets sonores"
                aria-label="Effets sonores"
              >
                🔊
              </button>
            </div>
          </div>

          <div className="board-hud">
            <div className="hud-left" id="hud-left" />

            <div className="timer" id="timer" aria-label="Temps restant">
              <span className="led" id="tval">
                40
              </span>
            </div>

            <div className="hud-right" id="scores" />
          </div>
        </header>

        {/* Navigation par onglets (3 colonnes sur la même ligne) */}
        <nav className="nav-tabs" id="nav-tabs" aria-label="Menu principal">
          <button type="button" className="active" data-tab="jouer">
            🎮 Jouer
          </button>
          <button type="button" data-tab="stats">
            🏆 Club & Stats{" "}
            <span id="err-badge" className="badge-cnt" hidden>
              0
            </span>
          </button>
          <button type="button" data-tab="atelier">
            📲 Appli & MAJ
          </button>
        </nav>

        {/* Barre mobile de progression des rubriques (visible en partie sur téléphone) */}
        <div className="mob-rubbar" id="mob-rubbar">
          <span
            id="mob-rub-txt"
            style={{
              fontWeight: 700,
              color: "var(--led)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            Rubrique 1/14
          </span>
          <div className="dots" id="mob-dots" />
          <button
            className="btn sm ghost"
            type="button"
            id="b-mob-rubs"
            style={{ padding: "4px 9px", fontSize: "12px", flexShrink: 0 }}
          >
            Rubriques ▾
          </button>
        </div>

        <div className="main" id="main-grid">
          <section className="desk" id="desk" aria-live="polite" />
          <aside className="side" id="side-panel">
            <div className="side-head">
              <div className="side-switch" id="side-switch">
                <button
                  type="button"
                  className="active"
                  data-sm="rubriques"
                >
                  📋 14 Rubriques
                </button>
                <button type="button" data-sm="themes">
                  🌍 12 Thématiques
                </button>
              </div>
              <button
                className="btn sm ghost"
                type="button"
                id="b-close-drawer"
                style={{ display: "none", padding: "4px 8px", fontSize: "12px" }}
              >
                Fermer ✕
              </button>
            </div>
            <p
              className="hint"
              id="side-sub"
              style={{ margin: "0 4px 6px", fontSize: "11.5px" }}
            >
              Touche un élément pour lancer l&apos;entraînement :
            </p>
            <ol className="rlist" id="rlist" />
          </aside>
        </div>
      </div>
    </>
  );
}

