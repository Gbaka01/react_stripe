import '../css/accueil.css';
import { useEffect, useState } from "react";
import api from "../lib/axios.jsx";
import { useNavigate } from "react-router-dom";

export default function Accueil() {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    function fetchData(){
        api.get('/manga/all')
        .then(res => {
            setData(res.data)
            console.log(res.data)
            setLoaded(true)
        })
        .catch(err => {
            setError(err)
            console.log(err)
            setLoaded(true)
        })
    }

    useEffect(()=>fetchData(), [])

    return !loaded ? <p>En cours de chargement</p> : error ? <p>Erreur sur le site</p> :
        <section>
            {data.length>0 ?
            data.map(manga =>
            <div key={manga._id}>
                {manga.images.length>0 && <img src={manga.images[0].url} alt={manga.images[0].url} />}
                <h2 className= "text-light">{manga.titre}</h2>
                <p className= "text-light">{manga.description.split(' ').slice(0,20).join(' ') + '...'}</p>
                <p className= "text-light">Prix : {manga.prix}€</p>
                <button onClick={() => navigate(`/article/${manga._id}`)}>En savoir plus</button>
            </div> )  
            : <p>Rien à afficher</p>     
        }
        </section>
    
}
