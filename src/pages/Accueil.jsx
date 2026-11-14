import { useState, useEffect, useCallback } from "react";
 
/**
 * Page d'accueil — dessinsgore.fr
 * « Dessins de Goré » — Goli Gore Gbaka
 *
 * Usage : <Accueil oeuvres={[{ src, titre, annee, technique }, ...]} />
 * Remplacez les images par défaut par vos propres fichiers (dossier /public/images).
 */
 
const OEUVRES_PAR_DEFAUT = [
  { src: "/l-incredibilite-thomas.jpg", titre: "Tension I", annee: 2026, technique: "dessin au crayon" },
  { src: "/l-odalisque-blonde.jpg", titre: "Corps fragile", annee: 2026, technique: "dessin au crayon" },
  { src: "/le-radeau-de-la-meduse.jpg", titre: "Émotion brute", annee: 2026, technique: "dessin au crayon" },
];
 
export default function Accueil({ oeuvres = OEUVRES_PAR_DEFAUT, intervalle = 6000 }) {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const total = oeuvres.length;
 
  const suivant = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const precedent = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
 
  // Défilement automatique (désactivé au survol ou si l'utilisateur préfère moins d'animations)
  useEffect(() => {
    const reduit = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (pause || reduit || total < 2) return;
    const t = setInterval(suivant, intervalle);
    return () => clearInterval(t);
  }, [pause, suivant, intervalle, total]);
 
  // Navigation clavier
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") suivant();
    if (e.key === "ArrowLeft") precedent();
  };
 
  const oeuvre = oeuvres[index];
 
  return (
    <>
      <style>{CSS}</style>
 
      <header className="dg-header">
        <a href="/" className="dg-logo">Dessins de Goré</a>
        <nav aria-label="Navigation principale">
          <a href="/media">Œuvres</a>
          <a href="/galerie">Boutique</a>
          <a href="/a-propos">L’artiste</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
 
      <main className="dg-main">
        <section className="dg-hero">
          <p className="dg-sur-titre">Goli Gore Gbaka – Dessins contemporains</p>
          <h1>Dessins de Goré</h1>
          <p className="dg-accroche">
            Une exploration du corps, de la tension et de l’émotion brute.
            <br />
            Entre figuration et déformation, chaque œuvre interroge la fragilité humaine.
          </p>
          <div className="dg-cta">
            <a href="/media" className="dg-btn dg-btn-plein">Découvrir les œuvres</a>
            <a href="/galerie" className="dg-btn">Acquérir un dessin</a>
          </div>
        </section>
 
        {total > 0 && (
          <section
            className="dg-carrousel"
            aria-roledescription="carrousel"
            aria-label="Œuvres à la une"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            onFocus={() => setPause(true)}
            onBlur={() => setPause(false)}
          >
            <figure className="dg-diapo" aria-live="polite">
              <img
                key={oeuvre.src}
                src={oeuvre.src}
                alt={`${oeuvre.titre} — ${oeuvre.technique}, ${oeuvre.annee}, dessin de Goli Gore Gbaka`}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <figcaption>
                <strong>{oeuvre.titre}</strong>
                <span>{oeuvre.technique} · {oeuvre.annee}</span>
              </figcaption>
            </figure>
 
            {total > 1 && (
              <div className="dg-controles">
                <button type="button" onClick={precedent} aria-label="Œuvre précédente">
                  ← Précédent
                </button>
                <div className="dg-points">
                  {oeuvres.map((o, i) => (
                    <button
                      key={o.src}
                      type="button"
                      className={i === index ? "actif" : ""}
                      aria-label={`Afficher ${o.titre}`}
                      aria-current={i === index}
                      onClick={() => setIndex(i)}
                    />
                  ))}
                </div>
                <button type="button" onClick={suivant} aria-label="Œuvre suivante">
                  Suivant →
                </button>
              </div>
            )}
          </section>
        )}
 
        <section className="dg-intro">
          <h2>La démarche</h2>
          <p>
            Le trait de Goré cherche ce qui se plie, se tend et résiste dans le corps.
            Chaque dessin est une pièce unique, réalisée à la main et proposée à la vente
            avec certificat d’authenticité.
          </p>
          <a href="/a-propos" className="dg-lien">En savoir plus sur l’artiste →</a>
        </section>
      </main>
 
      <footer className="dg-footer">
        <p>GOLI Gore Gbaka — © Copyright {new Date().getFullYear()}</p>
        <nav aria-label="Liens secondaires">
          <a href="https://femmegore.fr" target="_blank" rel="noopener">Femme-Goré</a>
          <a href="https://goligbaka.fr" target="_blank" rel="noopener">goligbaka.fr</a>
          <a href="/mentions">Mentions légales</a>
          
    <button class="cc cc-manage" id="open-preferences" type="button">Gérer mes cookies</button>
        </nav>
      </footer>
    </>
  );
}
 
const CSS = `
:root {
  --dg-fond: #f6f3ee;
  --dg-texte: #1b1a18;
  --dg-doux: #6b655c;
  --dg-accent: #8a2c1f;
  --dg-ligne: #dcd5ca;
}
@media (prefers-color-scheme: dark) {
  :root { --dg-fond:#141311; --dg-texte:#ece7df; --dg-doux:#a39b8f; --dg-accent:#d0644f; --dg-ligne:#2e2b27; }
}
body { margin:0; background:var(--dg-fond); color:var(--dg-texte);
  font-family: "Cormorant Garamond", Georgia, serif; }
.dg-header, .dg-main, .dg-footer { max-width:1100px; margin:0 auto; padding:0 20px; }
.dg-header { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap;
  gap:12px; padding-top:24px; padding-bottom:24px; border-bottom:1px solid var(--dg-ligne); }
.dg-logo { font-size:1.5rem; letter-spacing:.04em; color:inherit; text-decoration:none; }
.dg-header nav { display:flex; gap:20px; flex-wrap:wrap; }
.dg-header nav a, .dg-footer a { color:var(--dg-doux); text-decoration:none; font-family:system-ui, sans-serif; font-size:.9rem; }
.dg-header nav a:hover, .dg-footer a:hover { color:var(--dg-accent); }
 
.dg-hero { text-align:center; padding:72px 0 48px; }
.dg-sur-titre { font-family:system-ui, sans-serif; text-transform:uppercase; letter-spacing:.18em;
  font-size:.75rem; color:var(--dg-doux); margin:0 0 12px; }
.dg-hero h1 { font-size:clamp(2.6rem, 7vw, 5rem); font-weight:400; margin:0 0 20px; line-height:1; }
.dg-accroche { font-size:1.25rem; line-height:1.6; color:var(--dg-doux); max-width:640px; margin:0 auto 32px; }
.dg-cta { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
.dg-btn { font-family:system-ui, sans-serif; font-size:.95rem; padding:12px 24px; border:1px solid var(--dg-texte);
  color:var(--dg-texte); text-decoration:none; transition:all .2s; }
.dg-btn:hover { border-color:var(--dg-accent); color:var(--dg-accent); }
.dg-btn-plein { background:var(--dg-texte); color:var(--dg-fond); }
.dg-btn-plein:hover { background:var(--dg-accent); color:#fff; }
 
.dg-carrousel { outline:none; margin-bottom:72px; }
.dg-diapo { margin:0; text-align:center; }
.dg-diapo img { width:100%; max-height:72vh; object-fit:contain; background:var(--dg-ligne);
  animation:dg-fondu .6s ease; }
@keyframes dg-fondu { from { opacity:0 } to { opacity:1 } }
.dg-diapo figcaption { margin-top:14px; display:flex; flex-direction:column; gap:4px; }
.dg-diapo figcaption strong { font-size:1.3rem; font-weight:500; }
.dg-diapo figcaption span { font-family:system-ui, sans-serif; font-size:.85rem; color:var(--dg-doux); }
.dg-controles { display:flex; justify-content:space-between; align-items:center; margin-top:20px; }
.dg-controles > button { background:none; border:none; cursor:pointer; color:var(--dg-texte);
  font-family:system-ui, sans-serif; font-size:.9rem; padding:8px; }
.dg-controles > button:hover { color:var(--dg-accent); }
.dg-points { display:flex; gap:8px; }
.dg-points button { width:9px; height:9px; border-radius:50%; border:1px solid var(--dg-doux);
  background:none; padding:0; cursor:pointer; }
.dg-points button.actif { background:var(--dg-accent); border-color:var(--dg-accent); }
 
.dg-intro { max-width:680px; margin:0 auto 96px; text-align:center; }
.dg-intro h2 { font-weight:400; font-size:2rem; margin:0 0 16px; }
.dg-intro p { font-size:1.2rem; line-height:1.7; color:var(--dg-doux); }
.dg-lien { color:var(--dg-accent); font-family:system-ui, sans-serif; text-decoration:none; }
 
.dg-footer { border-top:1px solid var(--dg-ligne); padding-top:24px; padding-bottom:32px;
  display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px; font-family:system-ui, sans-serif;
  font-size:.85rem; color:var(--dg-doux); }
.dg-footer p { margin:0; }
.dg-footer nav { display:flex; gap:16px; flex-wrap:wrap; align-items:center; }
.dg-cookies { background:none; border:none; color:var(--dg-doux); cursor:pointer; font:inherit; padding:0; }
.dg-cookies:hover { color:var(--dg-accent); }
@media (max-width:600px) { .dg-hero { padding:48px 0 32px; } .dg-controles > button { font-size:.8rem; } }
`;
 
