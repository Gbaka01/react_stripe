import '../css/form.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from '../lib/axios'

export default function FormRegister() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        address: '',
        zipcode: '',
        town: '',
    })

    const [message, setMessage] = useState('')

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const res = await api.post("/user/register", data)
            setMessage("Compte créé avec succès 🎉")
            console.log(res.data)

            navigate('/')
        } catch (err) {
            console.error(err)
            setMessage(err.response?.data?.message || "Erreur lors de l'inscription ❌")
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="firstname">Prénom</label>
            <input onChange={handleChange} type="text" name="firstname" id="firstname" />

            <label htmlFor="lastname">Nom</label>
            <input onChange={handleChange} type="text" name="lastname" id="lastname" />

            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" name="email" id="email" />

            <label htmlFor="password">Mot de passe</label>
            <input onChange={handleChange} type="password" name="password" id="password" />

            <label htmlFor="address">Adresse</label>
            <input onChange={handleChange} type="text" name="address" id="address" /> {/* ✔ Correction */}

            <label htmlFor="zipcode">Code postal</label>
            <input onChange={handleChange} type="text" name="zipcode" id="zipcode" />

            <label htmlFor="town">Ville</label>
            <input onChange={handleChange} type="text" name="town" id="town" />

            <button type="submit">Valider</button>

            {message && <p>{message}</p>}
        </form>
    )
}
