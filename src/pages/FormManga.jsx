import '../css/form.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../lib/axios.jsx';

export default function FormManga() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        titre: '',
        description: '',
        prix: '',
        stock: 0,
        tome: '',
        isbn: '',
    })
    const [message, setMessage] = useState('')

    function handleChange(e){
        setData({...data, [e.target.name]: e.target.value})
        console.log(data)
    }

    function handleSubmit(e){
        e.preventDefault()
        api.post(`/manga/new`, data)
        .then(res => {
            setMessage("Article créé")
            console.log(res.data)
            navigate(`/article/${res.data._id}`)
        })
        .catch(err =>
            console.log(err)
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="titre">Titre</label>
            <input onChange={handleChange} type="text" name="titre" id="titre" />
            <label htmlFor="description">Description</label>
            <input onChange={handleChange} type="text" name="description" id="description" />
            <label htmlFor="prix">Prix en €</label>
            <input onChange={handleChange} type="text" name="prix" id="prix" />
            <label htmlFor="stock">Stock (facultatif)</label>
            <input onChange={handleChange} type="text" name="stock" id="stock" />
            <label htmlFor="tome">Tome n° (facultatif)</label>
            <input onChange={handleChange} type="text" name="tome" id="prix" />
            <label htmlFor="isbn">Isbn (facultatif)</label>
            <input onChange={handleChange} type="text" name="isbn" id="isbn" />
            <button type="submit">Valider</button>
            {message!='' && <p>{message}</p>}
        </form>
    )
}