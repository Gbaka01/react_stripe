import { useNavigate } from "react-router-dom"


export default function Header  () {
const navigate = useNavigate()
    return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" onClick={() => navigate('/')}>Dessins de goré</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={() => navigate('/')}>Accueil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/panier')}>Panier</a>
        </li>
         
          <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/login')}>Connexion</a>
        </li>
          <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/register')}>S'inscrire</a>
        </li>
        
          <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/media')}>Media</a>
        </li>
           <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/mentions')}>Mentions legales</a>
        </li>
           <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/conditions')}>Conditions generales de vente</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ajouter
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" onClick={() => navigate('/addarticle')}>Ajouter un article</a></li>
            <li><a className="dropdown-item" onClick={() => navigate('/addimage')}>Ajouter une image</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </header>
    )
}