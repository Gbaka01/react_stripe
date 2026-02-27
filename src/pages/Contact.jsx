import { useState } from "react";
import "../css/contact.css";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "2b8ecfb8-edd3-421c-8e93-5f12c8e67430");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message envoyé avec succès !");
        event.target.reset();
      } else {
        setResult("❌ Erreur lors de l'envoi.");
      }
    } catch (error) {
      setResult("⚠️ Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
  <form onSubmit={onSubmit}>
    <div className="form-container">
      <h2>Contact Formulaire</h2>

      <div className="input-box">
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" className="field" name="name" required />
      </div>

      <div className="input-box">
        <label htmlFor="email">Votre Email</label>
        <input id="email" type="email" className="field" name="email" required />
      </div>

      <div className="input-box">
        <label htmlFor="message">Votre Message</label>
        <textarea id="message" className="field mess" name="message" required />
      </div>

      <button type="submit">Envoyer</button>

      {result && <p className="result">{result}</p>}
    </div>
  </form>
</section>

  );
}


