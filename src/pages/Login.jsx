import '../css/form.css';
import { useState } from "react";
import api from "../lib/axios.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    api.post("/user/login", form)
      .then(res => {
        setStatus("Connexion réussie ✔");

        localStorage.setItem('token', res.data.token);
         localStorage.setItem("user", res.data.user);
        localStorage.setItem("userId", res.data.userId);

        navigate('/');
      })
      .catch(err => {
        console.log(err.response);
        setStatus("Erreur lors de l’envoi ❌");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <label>Mot de passe</label>
      <input
        type="password"
        name="password"
        placeholder="Votre password"
        value={form.password}   // ✔ correction
        onChange={handleChange}
        required
      />

      <button type="submit">Envoyer</button>

      {status && <p>{status}</p>}
    </form>
  );
}
