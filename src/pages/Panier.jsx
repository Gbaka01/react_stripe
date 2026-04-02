import "../css/accueil.css";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import api from "../lib/axios.jsx";

export default function Panier() {

  const [panier, setPanier] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  function fetchData() {
    const cartId = localStorage.getItem("cartId");
    const token = localStorage.getItem("token");

    api
      .get("/command/panier", {
        params: token ? {} : { cartId },
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((res) => setPanier(res.data))
      .catch((err) =>
        setError(err.response?.data?.message || "Erreur réseau")
      )
      .finally(() => setLoaded(true));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // --------------------------------------------------------
  // 🔥 PAIEMENT AVEC STRIPE
  // --------------------------------------------------------
  const handlePay = async () => {
    if (!panier || !panier.commandLines?.length) {
      return setMessage("Panier vide !");
    }

    try {
      const stripe = await stripePromise;

      const response = await api.post(`/payment/checkout/${panier.commandId}`);

      if (!response.data.checkout_url) {
        return setMessage("Erreur paiement : URL non reçue");
      }

      window.location.href = response.data.checkout_url;

    } catch (error) {
      console.error(error);
      setMessage("Erreur lors du paiement");
    }
  };


  // --------------------------------------------------------
  // RENDU
  // --------------------------------------------------------
  if (!loaded) return <p>Chargement…</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <section>
      <h1>🛍️ Panier</h1>

      {message && <p>{message}</p>}

      {/* Sécurisé : panier peut encore être null */}
      <h2>Total : {panier?.total} €</h2>

      {panier?.commandLines?.length > 0 ? (
        <>
          <ul>
            {panier.commandLines.map((line) => (
              <li key={line._id}>
                <h3>
                  {line.ref.titre}
                  {line.ref.tome && ` - tome ${line.ref.tome}`}
                </h3>

                <p>Prix unitaire : {line.ref.prix} €</p>

                <p>Quantité : {line.quantity}</p>
              </li>
            ))}
          </ul>

          <button onClick={handlePay} className="btn btn-primary mt-3">
            💳 Acheter
          </button>
        </>
      ) : (
        <p>Le panier est vide</p>
      )}
    </section>
  );
}