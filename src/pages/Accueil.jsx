import "../css/accueil.css";
import { useEffect, useState } from "react";

export default function Accueil() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Chatbot
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

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

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "Vous",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(
        "https://votre-api.com/chatbot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "Bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "Bot",
          text: "Erreur de connexion au serveur.",
        },
      ]);
    }

    setMessage("");
  };

  return (
    <>
      {/* Chatbot */}
      <div id="chatbox" className="chatbox">
        <div id="messages" className="messages">
          {messages.map((msg, index) => (
            <p key={index}>
              <strong>{msg.sender} :</strong> {msg.text}
            </p>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="button" onClick={sendMessage}>
            Envoyer
          </button>
        </div>
      </div>

      {/* Bouton retour en haut */}
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

      <h1 className="text-light text-center">
        Goli Gore Gbaka – Dessins contemporains
      </h1>

      <h2 className="text-light text-center">
        Une exploration du corps, de la tension et de l’émotion brute.
      </h2>

      <h2 className="text-light text-center">
        Entre figuration et déformation, chaque œuvre interroge la fragilité humaine.
      </h2>

      {/* Carousel Bootstrap */}
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
              alt="L'incrédulité de Thomas"
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
              alt="Le Radeau de la Méduse"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Précédent</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </>
  );
}