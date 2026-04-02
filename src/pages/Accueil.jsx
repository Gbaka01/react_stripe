import "../css/accueil.css";

import { useEffect, useState } from "react";

export default function Accueil() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollTop && (
        <button
          type="button"
          className="scrollTop"
          onClick={handleScrollTop}
          aria-label="Retour en haut"
          title="Retour en haut"
        >
          ↑
        </button>
      )}   
      <h1 className="text-light text-center">Goli Gore Gbaka – Dessins contemporains</h1>
      <h1 className="text-light text-center">Une exploration du corps, de la tension et de l’émotion brute.</h1>
      <h1 className="text-light text-center">Entre figuration et déformation, chaque œuvre interroge la fragilité humaine.</h1>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/l-incredibilite-thomas.jpg"
              className="d-block w-100"
              alt="L'incrédibilité de Thomas"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/l-odalisque-blonde.jpg"
              className="d-block w-100"
              alt="L'Odalisque blonde"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/le-radeau-de-la-meduse.jpg"
              className="d-block w-100"
              alt="Le Radeau de la Meduse"
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </>
  );
}
