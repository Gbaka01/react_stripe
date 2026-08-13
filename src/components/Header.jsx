import { NavLink } from "react-router-dom";

export default function Header() {
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const getNavLinkClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Dessins de Goré
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Afficher ou masquer la navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/galerie">
                  Galerie
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/a-propos">
                  À propos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/panier">
                  Panier
                </NavLink>
              </li>

              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <NavLink className={getNavLinkClass} to="/login">
                      Connexion
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className={getNavLinkClass} to="/register">
                      S’inscrire
                    </NavLink>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/media">
                  Médias
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/mentions">
                  Mentions légales
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/conditions">
                  Conditions générales de vente
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={getNavLinkClass} to="/contact">
                  Contact
                </NavLink>
              </li>

              {isLoggedIn && (
                <li className="nav-item dropdown">
                  <button
                    type="button"
                    className="nav-link dropdown-toggle btn btn-link"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ajouter
                  </button>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/addarticle"
                      >
                        Ajouter un article
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/addimage"
                      >
                        Ajouter une image
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}