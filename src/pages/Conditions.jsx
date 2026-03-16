import "../css/accueil.css";
import { useEffect, useState } from "react";

export default function Conditions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container py-5">
      {showScrollTop && (
        <button
          type="button"
          className="scrollTop"
          onClick={handleScrollTop}
          aria-label="Retour en haut"
          title="Retour en haut"
        >
          ↑
        </button>
      )}

      <div className="text-light">
        <h1 className="mb-4">Conditions générales de vente</h1>

        <p>
          <strong>Date de dernière mise à jour :</strong> 18/09/2025
        </p>

        <p>Le Prestataire peut être joint aux coordonnées suivantes :</p>
        <ul>
          <li>16 rue de Chatillon, 91260 Juvisy-sur-Orge</li>
          <li>07 60 29 23 63</li>
          <li>gore.goli@gmail.com</li>
        </ul>

        <h2 className="mt-4">Article 1 - Champ d’application</h2>
        <p>
          Les présentes conditions générales de vente (les « Conditions
          Générales ») s&apos;appliquent à la vente des produits commercialisés
          par le Vendeur (les « Produits ») auprès de tout consommateur et
          non-professionnel désirant en bénéficier (le « Client »).
        </p>

        <p>
          Les Conditions Générales prévoient notamment les conditions d’achat,
          de paiement et de livraison des Produits commandés par le Client. Le
          Client peut se reporter à la description de chaque Produit figurant
          dans le catalogue du Vendeur afin de connaître les caractéristiques de
          ce dernier.
        </p>

        <p>
          La passation d’une commande de Produits emporte, de la part du Client,
          l’acceptation préalable sans restriction ni réserve des Conditions
          Générales, dont le Client déclare avoir pris connaissance.
        </p>

        <p>
          Les Conditions Générales sont applicables sous réserve de toute
          stipulation contraire figurant au bon de commande ou à des conditions
          particulières le cas échéant conclues entre le Vendeur et le Client
          concerné.
        </p>

        <p>
          Les Conditions Générales s’entendent sans préjudice des dispositions
          légales applicables et notamment celles prévues par le Code de la
          consommation.
        </p>

        <h2 className="mt-4">Article 2 – Produits et disponibilité</h2>
        <p>
          Le prix et les caractéristiques essentielles de chaque Produit sont
          décrits dans le catalogue du Vendeur et édités, selon le cas, par le
          Vendeur ou ses fournisseurs. Les descriptions sont susceptibles de
          comporter des indications, photographies et graphismes qui ne sont
          communiqués qu’à titre illustratif et peuvent être modifiés ou mis à
          jour par le Vendeur.
        </p>

        <p>
          Les Produits proposés sont conformes à la législation française et aux
          normes européennes CE en vigueur au moment de la passation de la
          commande.
        </p>

        <p>
          Le fait pour le Vendeur de présenter des Produits dans son catalogue
          ne constitue pas une obligation de commercialisation, notamment en cas
          de rupture de stock, d’indisponibilité des Produits ou d’impossibilité
          de procéder à la commercialisation desdits Produits, quelle qu’en soit
          la raison.
        </p>

        <p>
          Dans le cas où un ou plusieurs Produits seraient indisponibles à la
          suite de la passation d’une commande, le Vendeur informera le Client
          par écrit du délai d’attente quant à la réception du Produit
          momentanément indisponible.
        </p>

        <ul>
          <li>
            Le Vendeur pourra, avec l’accord du Client, proposer au même prix un
            produit de nature identique à celui initialement commandé.
          </li>
          <li>
            Le Client aura le choix d’attendre la disponibilité du ou des
            Produits manquants afin de recevoir la globalité de sa commande en
            un seul envoi.
          </li>
          <li>Le Client pourra annuler totalement la commande.</li>
          <li>
            Le Client pourra annuler la commande des Produits indisponibles et
            recevoir les autres Produits figurant dans la commande dans les
            délais annoncés.
          </li>
        </ul>

        <p>
          Dans les deux derniers cas, lorsque le Client aura déjà procédé au
          versement d’une somme, il sera remboursé suivant des modalités
          équivalentes à celles applicables en cas d’exercice du droit de
          rétractation.
        </p>

        <h2 className="mt-4">Article 3 - Commandes</h2>
        <h3 className="h5 mt-3">3.1 Conditions préalables</h3>
        <p>
          Les Produits sont réservés aux personnes ayant la qualité de client
          particulier, consommateur ou non-professionnel tel que défini par le
          Code de la consommation.
        </p>

        <p>
          Le Vendeur ne commercialise pas de Produits auprès de toute personne
          physique ou morale agissant pour des besoins professionnels ou dans le
          cadre d’une activité professionnelle accessoire. Chaque Client
          s&apos;interdit d&apos;effectuer des achats de Produits en grande
          quantité afin de les revendre à quelque titre et sous quelque forme
          que ce soit.
        </p>

        <p>
          La commande de Produits est réservée aux Clients justifiant
          obligatoirement d&apos;une adresse de livraison en France
          métropolitaine, [Liste des pays et territoires concernés], de format
          et standard français (nom, prénom, adresse postale, code postal,
          ville, pays).
        </p>

        <h3 className="h5 mt-3">3.2 Passation d’une commande</h3>
        <p>
          Tout Client désirant passer une commande auprès du Vendeur devra
          remplir et signer un bon de commande résumant notamment les
          caractéristiques essentielles du ou des Produits commandés, le prix
          total, les conditions de paiement, le délai ou la durée de livraison,
          toute éventuelle restriction de livraison, un numéro de suivi de la
          commande du Client et les modalités d’exercice du droit de
          rétractation lorsqu’il est applicable.
        </p>

        <p>
          En cas de vente de Produits dont la fabrication est entreprise sur
          commande spéciale du Client, la commande est précédée de
          l’établissement d’un devis détaillé, d’une durée de validité de 5 ans
          à compter de sa date de création, mentionnant le prix ou le mode de
          calcul du prix et dont l’acceptation et la signature par le Client
          vaut alors bon de commande.
        </p>

        <p>
          Pour toute vente de biens meubles, le Vendeur devra le cas échéant
          mentionner sur le bon de commande la période pendant laquelle les
          pièces détachées indispensables à l’utilisation des Produits sont
          disponibles sur le marché auprès du fabricant ou de l’importateur.
        </p>

        <p>
          La confirmation de la commande a lieu dès signature du bon de commande
          par le Vendeur ou envoi par ce dernier d’un courrier électronique de
          confirmation de la commande, la commande devenant ainsi ferme et
          définitive, sous réserve toutefois de l’application éventuelle du
          droit de rétractation du Client.
        </p>

        <p>
          Aucune commande ne peut dès lors être modifiée ou annulée sans accord
          préalable et écrit entre le Vendeur et le Client.
        </p>

        <p>
          Sous réserve de l’application éventuelle du droit de rétractation, en
          cas d’annulation par le Client d’une commande confirmée, pour quelque
          motif que ce soit, et sans préjudice de tous dommages et intérêts
          complémentaires :
        </p>

        <ul>
          <li>
            l’acompte éventuellement versé à la commande par le Client restera
            acquis de plein droit au Vendeur et ne donnera lieu à aucun
            remboursement ; ou
          </li>
          <li>
            une somme correspondant à 0 % du prix total hors taxes des Produits
            sera due au Vendeur et facturée au Client.
          </li>
        </ul>

        <p>
          Réciproquement, en cas d’annulation par le Vendeur d’une commande
          confirmée, pour quelque motif que ce soit, l’acompte éventuellement
          versé à la commande par le Client lui sera restitué, étant précisé
          qu’il sera restitué au double si la commande ne correspond pas à une
          commande spéciale sur devis du Client.
        </p>

        <p>
          Sauf dans le cas de commande spéciale sur devis, tout acompte versé
          d’avance par le Client portera intérêt au taux légal à l&apos;expiration
          d&apos;un délai de trois mois à compter du versement jusqu&apos;à la
          livraison, sans préjudice de l&apos;obligation du Vendeur de livrer les
          Produits.
        </p>

        <h3 className="h5 mt-3">3.3 Contrôle des commandes</h3>
        <p>
          Chaque Client garantit la sincérité et l&apos;exactitude des
          informations fournies pour les besoins de sa commande et s&apos;engage
          à notifier au Vendeur toute modification éventuelle.
        </p>

        <p>
          Pour lutter contre la fraude, le Vendeur ou ses prestataires de
          paiement ou de livraison peuvent être amenés à demander des
          justificatifs supplémentaires au Client ou prendre attache avec ce
          dernier, au moment de l&apos;acceptation et/ou de l’expédition de la
          commande.
        </p>

        <p>
          Le Vendeur se réserve également le droit de ne pas accepter ou
          d’annuler la commande de tout Client qui aurait fourni des
          informations erronées, qui ne procèderait pas au paiement des Produits
          ou avec lequel existerait un litige relatif au paiement d’une commande
          antérieure.
        </p>

        <h2 className="mt-4">Suite du document</h2>
        <p>
          Le reste de tes conditions générales de vente peut être conservé sur
          le même modèle, en séparant clairement chaque article avec des titres,
          sous-titres, paragraphes et listes pour améliorer la lisibilité.
        </p>

        <hr className="my-4 border-light" />

        <h2 className="mt-4">Annexe : Formulaire de rétractation</h2>
        <p>À l’attention de : Monsieur GOLI Gore Gbaka</p>
        <p>16 rue de Chatillon, 91260 Juvisy-sur-Orge</p>

        <p>
          Je vous notifie par la présente ma rétractation du contrat portant sur
          l’achat des produits suivants :
        </p>

        <ul>
          <li>Nom(s) et référence(s) de la ou des commande(s)</li>
          <li>Commandé(s) le</li>
          <li>Nom du client à l’origine de la commande</li>
          <li>Adresse du client à l’origine de la commande</li>
          <li>Signature du client</li>
        </ul>
      </div>
    </section>
  );
}