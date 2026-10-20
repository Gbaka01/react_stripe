import { useEffect } from "react";
import "../css/accueil.css";
 
/*
 * Mentions légales — dessinsgore.fr (GOLI Gore Gbaka)
 * Rédigé à partir d'un modèle LegalPlace.
 */
 
const SITE_NAME = "dessinsgore.fr";
const SITE_URL = "https://dessinsgore.fr";
const DATE_VIGUEUR = "20/10/2026";
 
const EDITEUR = {
  nom: "Gore Gbaka GOLI",
  adresse: "16 rue de Châtillon, 91260 Juvisy-sur-Orge, France",
  telAffiche: "07 60 29 23 63",
  telLien: "+33760292363",
  email: "gore.goli@gmail.com",
  // Si vous vendez vos œuvres (artiste-auteur ou micro-entrepreneur), décommentez et renseignez :
  // siret: "123 456 789 00012",
};
 
const HEBERGEUR = {
  nom: "OVH SAS",
  adresse: "2 rue Kellermann, 59100 Roubaix, France",
  telAffiche: "1007",
  site: "https://www.ovhcloud.com",
};
 
const lienExterne = { target: "_blank", rel: "noopener noreferrer" };
 
export default function Mentions() {
  // Titre de l'onglet propre à cette page
  useEffect(() => {
    const ancienTitre = document.title;
    document.title = "Mentions légales | Dessins de Goré";
    return () => {
      document.title = ancienTitre;
    };
  }, []);
 
  // Lien « En savoir plus » du bandeau (/mentions#cookies) : défile jusqu'à la section.
  useEffect(() => {
    const allerAAncre = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView({ block: "start" })
      );
    };
    allerAAncre();
    window.addEventListener("hashchange", allerAAncre);
    return () => window.removeEventListener("hashchange", allerAAncre);
  }, []);
 
  const mail = (
    <a href={`mailto:${EDITEUR.email}`}>{EDITEUR.email}</a>
  );
 
  return (
    <section
      className="container py-5 text-light"
      aria-labelledby="mentions-titre"
      style={{ maxWidth: "800px", lineHeight: 1.6 }}
    >
      <h1 id="mentions-titre" className="mb-2">Mentions légales</h1>
      <p className="text-secondary mb-4">En vigueur au {DATE_VIGUEUR}</p>
 
      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
        pour la confiance dans l’économie numérique, il est porté à la
        connaissance des utilisateurs et visiteurs (ci-après l’« Utilisateur »)
        du site <a href={SITE_URL}>{SITE_NAME}</a> (ci-après le « Site ») les
        présentes mentions légales.
      </p>
      <p>
        La connexion et la navigation sur le Site par l’Utilisateur impliquent
        l’acceptation intégrale et sans réserve des présentes mentions légales.
      </p>
 
      <h2 id="editeur" className="h4 mt-5">Édition du site</h2>
      <p>
        L’édition et la direction de la publication du Site sont assurées par{" "}
        {EDITEUR.nom} (ci-après l’« Éditeur ») :
      </p>
      <ul>
        <li>Adresse : {EDITEUR.adresse}</li>
        <li>
          Téléphone : <a href={`tel:${EDITEUR.telLien}`}>{EDITEUR.telAffiche}</a>
        </li>
        <li>E-mail : {mail}</li>
        {EDITEUR.siret && <li>SIRET : {EDITEUR.siret}</li>}
      </ul>
 
      <h2 id="hebergeur" className="h4 mt-5">Hébergeur</h2>
      <p>
        Le Site est hébergé par {HEBERGEUR.nom}, {HEBERGEUR.adresse}.
        Téléphone : {HEBERGEUR.telAffiche}.{" "}
        <a href={HEBERGEUR.site} {...lienExterne}>
          Site de l’hébergeur
        </a>
      </p>
 
      <h2 id="acces" className="h4 mt-5">Accès au site</h2>
      <p>
        Le Site est normalement accessible à tout moment. L’Éditeur peut
        toutefois suspendre, limiter ou interrompre le Site, notamment pour
        procéder à des mises à jour ou à des modifications de son contenu.
        L’Éditeur ne pourra être tenu responsable des conséquences éventuelles
        de cette indisponibilité.
      </p>
 
      <h2 id="donnees" className="h4 mt-5">Collecte des données personnelles</h2>
      <p>
        Le Site collecte et traite les données personnelles dans le respect de
        la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux
        fichiers et aux libertés, et du règlement (UE) 2016/679 du 27 avril
        2016 (RGPD).
      </p>
      <p>
        L’Utilisateur dispose d’un droit d’accès, de rectification, de
        suppression et d’opposition sur ses données personnelles, qu’il peut
        exercer par e-mail à {mail}. Il peut également introduire une
        réclamation auprès de la{" "}
        <a href="https://www.cnil.fr" {...lienExterne}>CNIL</a>.
      </p>
 
      <h2 id="cookies" className="h4 mt-5">Cookies</h2>
      <p>
        Le Site peut déposer des cookies sur le terminal de l’Utilisateur. Les
        cookies strictement nécessaires au fonctionnement du Site ne requièrent
        pas de consentement. Les autres cookies (mesure d’audience, réseaux
        sociaux…) ne sont déposés qu’avec l’accord de l’Utilisateur, recueilli
        via le bandeau affiché lors de sa première visite. L’Utilisateur peut
        à tout moment modifier son choix ou supprimer les cookies depuis les
        paramètres de son navigateur.
      </p>
 
      <h2 id="propriete" className="h4 mt-5">Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus du Site (dessins, textes, images, logo) est la
        propriété de l’Éditeur. Toute utilisation, reproduction, diffusion,
        commercialisation ou modification de tout ou partie du Site sans
        autorisation expresse de l’Éditeur est interdite et pourra entraîner
        des poursuites judiciaires.
      </p>
 
      <p className="small text-secondary mt-5">
        Rédigé à partir d’un modèle{" "}
        <a href="https://www.legalplace.fr" {...lienExterne}>LegalPlace</a>.
      </p>
    </section>
  );
}
 
 