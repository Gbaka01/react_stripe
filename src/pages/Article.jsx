import "../css/article.css";
import { useEffect, useState } from "react";
import api from "../lib/axios.jsx";
import { useParams } from "react-router-dom";

export default function Article() {
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [message, setMessage] = useState(null);

  const token = localStorage.getItem("token");
  const { id } = useParams();

  // Charger le manga + toutes les images
  function fetchData() {
    api
      .get(`/manga/${id}`)
      .then((res) => {
        setData(res.data);
        return api.get(`/image/all`);
      })
      .then((res2) => {
        setImages(res2.data);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setLoaded(true);
      });
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  // Sélection
  function toggleSelect(e, imageId) {
    e.target.classList.toggle("bg-dark");

    setSelectedImages((prev) =>
      prev.includes(imageId)
        ? prev.filter((id) => id !== imageId)
        : [...prev, imageId]
    );
  }

  // Ajouter
  function addImages() {
    api
      .put(`/manga/add/${id}`, { images: selectedImages })
      .then(() => {
        setSelectedImages([]);
        setIsModalOpen(false);
        fetchData();
      })
      .catch((err) => console.log(err));
  }

  // Supprimer
  function removeImages() {
    api
      .put(`/manga/remove/${id}`, { images: selectedImages })
      .then(() => {
        setSelectedImages([]);
        setIsModal2Open(false);
        fetchData();
      })
      .catch((err) => console.log(err));
  }

  // Ajouter au panier
function addArticle(id) {
  const token = localStorage.getItem("token");
  let cartId = localStorage.getItem("cartId");

  // ⚠️ réparer les cartId corrompus
  if (cartId === "null" || cartId === "undefined" || cartId === "") {
    cartId = null;
  }

  // 🔑 Si pas connecté ET pas de panier → créer cartId
  if (!token && !cartId) {
    cartId = crypto.randomUUID();
    localStorage.setItem("cartId", cartId);
  }

  // 📦 Construction du payload
  const payload = {
    ref: id,
    quantity: 1,
  };

  if (!token) {
    payload.cartId = cartId; // obligatoire, toujours
  }

  console.log("📦 Payload envoyé:", payload);

  api.post(
    "/commandLine/new",
    payload,
    { headers: token ? { Authorization: `Bearer ${token}` } : {} }
  )
    .then((res) => {
      console.log("✅ Article ajouté :", res.data);
      setMessage("✅ Article ajouté au panier");
    })
    .catch((err) => {
      console.error("❌ Erreur addArticle:", err.response?.data || err.message);
      setMessage(
        `❌ Erreur lors de l'ajout au panier : ${
          err.response?.data?.message || "inconnue"
        }`
      );
    });
}



  if (!loaded) return <p>Chargement...</p>;
  if (error) return <p>Erreur sur le site</p>;

  return (
    <section>
      {data ? (
        <div>
          {/* Images */}
          {data.images?.length > 0 &&
            data.images.map((image) => (
              <img key={image._id} src={image.url} alt={image.alt} />
            ))}

          <h2>{data.titre}</h2>

          <div id="actions">
            <button className="btn-primary" onClick={() => addArticle(data._id)}>
              Ajouter au panier
            </button>

            {message && <p>{message}</p>}

            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
              Ajouter des images
            </button>

            <button className="btn-primary" onClick={() => setIsModal2Open(true)}>
              Supprimer des images
            </button>
          </div>

          {/* MODAL AJOUT */}
          {isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Médiathèque</h2>
                <button className="btn-close" onClick={() => setIsModalOpen(false)}>
                  ✕
                </button>

                <div className="modal-content">
                  {images.map((image) => (
                    <img
                      key={image._id}
                      src={image.url}
                      className="modal-img"
                      onClick={(e) => toggleSelect(e, image._id)}
                    />
                  ))}
                </div>

                <button className="btn-primary" onClick={addImages}>
                  Ajouter
                </button>
              </div>
            </div>
          )}

          {/* MODAL SUPPRESSION */}
          {isModal2Open && (
            <div className="modal-overlay" onClick={() => setIsModal2Open(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Images associées</h2>
                <button className="btn-close" onClick={() => setIsModal2Open(false)}>
                  ✕
                </button>

                <div className="modal-content">
                  {data.images.map((image) => (
                    <img
                      key={image._id}
                      src={image.url}
                      className="modal-img"
                      onClick={(e) => toggleSelect(e, image._id)}
                    />
                  ))}
                </div>

                <button className="btn-primary" onClick={removeImages}>
                  Supprimer
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Rien à afficher</p>
      )}
    </section>
  );
}






