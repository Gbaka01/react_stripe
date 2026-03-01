import "../css/accueil.css";
import { useEffect, useState } from "react";
import api from "../lib/axios.jsx";

export default function Media() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null); // 👈 nouveau state

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

    // fermeture avec ESC
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!loaded) return <p>En cours de chargement...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="media-gallery">
      {showButton && (
        <button className="scrollTop" onClick={handleScrollTop}>
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
            <img
              src={image.url}
              alt={image.title || "image"}
              loading="lazy"
              onClick={() => setSelectedImage(image.url)} // 👈 clic
            />
          </div>
        ))
      ) : (
        <p>Rien à afficher</p>
      )}

      {/* 👇 MODAL LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img
            className="lightbox-content"
            src={selectedImage}
            alt="Agrandissement"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}