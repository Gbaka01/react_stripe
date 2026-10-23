import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page introuvable | Dessins de Goré";
    const m = document.createElement("meta");
    m.name = "robots";
    m.content = "noindex";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  return (
    <div className="container text-center py-5">
      <h1 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "4rem" }}>404</h1>
      <p className="lead">Ce dessin semble s'être effacé… La page demandée n'existe pas.</p>
      <div className="d-flex gap-2 justify-content-center mt-4">
        <Link to="/" className="btn btn-dark">Retour à l'accueil</Link>
        <Link to="/galerie" className="btn btn-outline-dark">Voir la galerie</Link>
      </div>
    </div>
  );
}