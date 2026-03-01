import "../css/accueil.css";
import { useEffect, useState } from "react";
import api from "../lib/axios.jsx";

export default function Media() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/image/all");
        setData(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Erreur côté API :", err.response?.data || err.message);
        setError(err.response?.data || { message: "Erreur serveur" });
      } finally {
        setLoaded(true);
      }
    }

    fetchData();

    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!loaded) return <p>En cours de chargement...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="media-gallery">
      {showButton && (
        <button className="scrollTop" onClick={handleScrollTop} aria-label="Retour en haut">
          ↑
        </button>
      )}

      {data.length > 0 ? (
        data.map((image, index) => (
          <div
            key={image._id}
            className="media-item fade-in"
            style={{ animationDelay: `${index * 800}ms` }}
          >
            <img src={image.url} alt={image.title || "image"} loading="lazy" />
          </div>
        ))
      ) : (
        <p>Rien à afficher</p>
      )}
    </section>
  );
}