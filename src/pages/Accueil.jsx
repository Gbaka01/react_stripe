import "../css/accueil.css";
import { useEffect, useState } from "react";
import api from "../lib/axios.jsx";
import { useNavigate } from "react-router-dom";

export default function Accueil() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navigate = useNavigate();

  async function fetchData() {
    try {
      const res = await api.get("/manga/all");
      setData(Array.isArray(res.data) ? res.data : []);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err);
      setData([]);
    } finally {
      setLoaded(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Affiche le bouton après X px de scroll
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!loaded) return <p>En cours de chargement...</p>;
  if (error) return <p>Erreur sur le site</p>;

  return (
    <section id="top">
      {/* ✅ visible seulement quand on a scrollé */}
      {showScrollTop && (
        <a href="#top" className="scrollTop" onClick={handleScrollTop} aria-label="Retour en haut">
          ↑
        </a>
      )}

      {data.length > 0 ? (
        data.map((manga) => {
          const firstImg = manga?.images?.[0]?.url;

          return (
            <div key={manga._id}>
              {firstImg && <img src={firstImg} alt={manga.titre || "manga"} />}
              <h2 className="text-light">{manga.titre}</h2>
              <p className="text-light">
                {(manga.description || "").split(" ").slice(0, 20).join(" ") + "..."}
              </p>
              <p className="text-light">Prix : {manga.prix}€</p>
              <button onClick={() => navigate(`/article/${manga._id}`)}>En savoir plus</button>
            </div>
          );
        })
      ) : (
        <p>Rien à afficher</p>
      )}

      <a href="https://amzn.to/4awG3ds" target="_blank" rel="noreferrer">
        Lien pour acheter vers Amazon
      </a>
    </section>
  );
}
