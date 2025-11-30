import '../css/accueil.css'
import { useEffect, useState } from "react"
import api from "../lib/axios.jsx"

export default function Media() {
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get('/image/all')
        setData(res.data || [])
      } catch (err) {
        console.error("Erreur côté API :", err.response?.data || err.message)
        setError(err.response?.data || { message: "Erreur serveur" })
      } finally {
        setLoaded(true)
      }
    }
    fetchData()
  }, []) // ✅ bien fermer la parenthèse et le crochet ici

  if (!loaded) return <p>En cours de chargement...</p>
  if (error) return <p>{error.message}</p>

  return (
    <section className="media-gallery">
      {data.length > 0 ? (
        data.map((image) => (
          <div key={image._id} className="media-item">
            <img src={image.url} /> {/* ✅ utiliser image.url */}
          </div>
        ))
      ) : (
        <p>Rien à afficher</p>
      )}
    </section>
  )
}
