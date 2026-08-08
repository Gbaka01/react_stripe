import '../css/form.css'
import api from "../lib/axios.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function FormImage() {
  const [alt, setAlt] = useState('')
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null);

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (!file) return setError({ message: "Veuillez choisir un fichier image" })

    const formData = new FormData()
    formData.append('alt', alt)
    formData.append('name', file) // ⚠️ doit correspondre au backend

    try {
      const res = await api.post(`/image/new`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      console.log("✅ Image envoyée :", res.data)
      navigate('/media')
    } catch (err) {
      console.error(err)
      setError(err.response?.data || { message: "Erreur serveur" })
    }
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="alt">Description</label>
      <input
        name="alt"
        onChange={(e) => setAlt(e.target.value)}
        type="text"
        id="alt"
        placeholder="Description de l’image"
        required
      />

      <label htmlFor="name">Fichier image</label>
      <input
        name="name"
        type="file"
        id="name"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />

      <button type="submit">Enregistrer</button>

      {error && <p className="error">{error.message}</p>}
    </form>
  )
}


