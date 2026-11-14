import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page introuvable – Dessins de Goré";
    const m = document.createElement("meta");
    m.name = "robots"; m.content = "noindex";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  return (
    <main style={{
      minHeight: "70vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "3rem 1rem", fontFamily: '"Dancing Script", cursive',
      color: "#212529"
    }}>
      <h1 style={{ fontSize: "clamp(4rem, 15vw, 9rem)", margin: 0, lineHeight: 1 }}>404</h1>
      <p style={{ fontSize: "1.8rem", margin: "1rem 0 .5rem" }}>
        Ce dessin s'est effacé de la toile…
      </p>
      <p style={{ fontSize: "1.3rem", opacity: .75, marginBottom: "2rem" }}>
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/" className="btn btn-dark btn-lg">Retour à l'accueil</Link>
        <Link to="/galerie" className="btn btn-outline-dark btn-lg">Voir la galerie</Link>
      </div>
    </main>
  );
}