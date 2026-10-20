import "../css/accueil.css";
import { useEffect, useState } from "react";
 
const SITE = "https://dessinsgore.fr";
const EMAIL = "gore.goli@gmail.com";
const ADRESSE = "16 rue de Châtillon, 5ᵉ étage, 91260 Juvisy-sur-Orge";
 
function Article({ titre, children }) {
  return (
    <article className="mb-5">
      <h2 className="h4 mb-3">{titre}</h2>
      {children}
    </article>
  );
}
 
function Citation({ source, children }) {
  return (
    <blockquote className="border-start ps-3 my-3">
      <p className="fw-semibold mb-1">{source}</p>
      <p className="fst-italic mb-0">{children}</p>
    </blockquote>
  );
}
 
export default function Conditions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const handleScrollTop = () => {
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
        <h1 className="mb-2">Conditions générales de vente</h1>
        <p className="mb-5">En vigueur au 18/10/2026</p>
 
        {/* ARTICLE 1 */}
        <Article titre="Article 1 – Champ d’application">
          <p>
            Les présentes Conditions Générales de Vente (dites « CGV »)
            s’appliquent, sans restriction ni réserve, à l’ensemble des ventes
            conclues par le Vendeur auprès d’acheteurs non professionnels (« les
            Clients » ou « le Client »), désirant acquérir les produits proposés
            à la vente (« les Produits ») par le Vendeur sur le site{" "}
            <a href={SITE}>{SITE}</a>. Les Produits proposés à la vente sur le
            site sont les suivants : dessins.
          </p>
          <p>
            Les caractéristiques principales des Produits, et notamment les
            spécifications, illustrations et indications de dimensions, sont
            présentées sur le site, ce dont le Client est tenu de prendre
            connaissance avant de commander. Le choix et l’achat d’un Produit
            sont de la seule responsabilité du Client. Les offres de Produits
            s’entendent dans la limite des stocks disponibles, tels que précisés
            lors de la passation de la commande.
          </p>
          <p>
            Ces CGV sont accessibles à tout moment sur le site et prévaudront sur
            tout autre document. Le Client déclare avoir pris connaissance des
            présentes CGV et les avoir acceptées en cochant la case prévue à cet
            effet avant la mise en œuvre de la procédure de commande en ligne.
            Sauf preuve contraire, les données enregistrées dans le système
            informatique du Vendeur constituent la preuve de l’ensemble des
            transactions conclues avec le Client.
          </p>
          <p className="mb-1">Les coordonnées du Vendeur sont les suivantes :</p>
          <ul>
            <li>GOLI Gore Gbaka</li>
            <li>{ADRESSE}</li>
            <li>SIRET : 918 868 332 00019</li>
            <li>
              E-mail : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              Téléphone : <a href="tel:+33760292363">07 60 29 23 63</a>
            </li>
          </ul>
        </Article>
 
        {/* ARTICLE 2 */}
        <Article titre="Article 2 – Prix">
          <p>
            Les Produits sont fournis aux tarifs en vigueur figurant sur le site
            lors de l’enregistrement de la commande par le Vendeur. Les prix sont
            exprimés en euros, HT et TTC. Les tarifs tiennent compte d’éventuelles
            réductions qui seraient consenties par le Vendeur sur le site.
          </p>
          <p>
            Ces tarifs sont fermes et non révisables pendant leur période de
            validité, mais le Vendeur se réserve le droit, hors période de
            validité, d’en modifier les prix à tout moment.
          </p>
          <p>
            Les prix ne comprennent pas les frais de traitement, d’expédition, de
            transport et de livraison, qui sont facturés en supplément, dans les
            conditions indiquées sur le site et calculés préalablement à la
            passation de la commande. Le paiement demandé au Client correspond au
            montant total de l’achat, y compris ces frais.
          </p>
          <p>
            Une facture est établie par le Vendeur et remise au Client lors de la
            livraison des Produits commandés.
          </p>
        </Article>
 
        {/* ARTICLE 3 */}
        <Article titre="Article 3 – Commandes">
          <p>
            Il appartient au Client de sélectionner sur le site les Produits
            qu’il désire commander, selon les modalités suivantes : ajout du ou
            des Produits au panier, validation du panier, saisie des
            informations de livraison, acceptation des présentes CGV, puis
            paiement.
          </p>
          <p>
            Les offres de Produits sont valables tant qu’elles sont visibles sur
            le site, dans la limite des stocks disponibles. La vente ne sera
            considérée comme valide qu’après paiement intégral du prix. Il
            appartient au Client de vérifier l’exactitude de la commande et de
            signaler immédiatement toute erreur.
          </p>
          <p>
            Toute commande passée sur le site constitue la formation d’un contrat
            conclu à distance entre le Client et le Vendeur. Le Vendeur se
            réserve le droit d’annuler ou de refuser toute commande d’un Client
            avec lequel il existerait un litige relatif au paiement d’une
            commande antérieure. Le Client pourra suivre l’évolution de sa
            commande sur le site.
          </p>
        </Article>
 
        {/* ARTICLE 3 BIS */}
        <Article titre="Article 3 bis – Espace client – Compte">
          <p>
            Afin de passer commande, le Client est invité à créer un compte
            (espace personnel). Pour ce faire, il doit s’inscrire en remplissant
            le formulaire qui lui sera proposé au moment de sa commande et
            s’engage à fournir des informations sincères et exactes concernant
            son état civil et ses coordonnées, notamment son adresse e-mail.
          </p>
          <p>
            Le Client est responsable de la mise à jour des informations
            fournies. Il lui est précisé qu’il peut les modifier en se connectant
            à son compte.
          </p>
          <p>
            Pour accéder à son espace personnel et à l’historique de ses
            commandes, le Client devra s’identifier à l’aide de son nom
            d’utilisateur et de son mot de passe, qui lui seront communiqués
            après son inscription et qui sont strictement personnels. À ce
            titre, le Client s’en interdit toute divulgation. Dans le cas
            contraire, il restera seul responsable de l’usage qui en sera fait.
          </p>
          <p>
            Le Client pourra également solliciter sa désinscription en se rendant
            à la page dédiée de son espace personnel ou en envoyant un e-mail à{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Celle-ci sera effective dans
            un délai raisonnable.
          </p>
          <p>
            En cas de non-respect des conditions générales de vente et/ou
            d’utilisation, le site aura la possibilité de suspendre, voire de
            fermer, le compte d’un Client après mise en demeure adressée par voie
            électronique et restée sans effet. Toute suppression de compte, quel
            qu’en soit le motif, entraîne la suppression pure et simple de toutes
            les informations personnelles du Client.
          </p>
          <p>
            Tout événement dû à un cas de force majeure ayant pour conséquence un
            dysfonctionnement du site ou du serveur, et sous réserve de toute
            interruption ou modification en cas de maintenance, n’engage pas la
            responsabilité du Vendeur.
          </p>
          <p>
            La création du compte entraîne l’acceptation des présentes conditions
            générales de vente.
          </p>
        </Article>
 
        {/* ARTICLE 4 */}
        <Article titre="Article 4 – Conditions de paiement">
          <p className="mb-1">
            Le prix est payé par voie de paiement sécurisé, selon les modalités
            suivantes :
          </p>
          <ul>
            <li>paiement par carte bancaire.</li>
          </ul>
          <p>
            Le prix est payable comptant par le Client, en totalité, au jour de
            la passation de la commande.
          </p>
          <p>
            Les données de paiement sont échangées en mode crypté grâce au
            protocole défini par le prestataire de paiement agréé intervenant
            pour les transactions bancaires réalisées sur le site.
          </p>
          <p>
            Les paiements effectués par le Client ne seront considérés comme
            définitifs qu’après encaissement effectif par le Vendeur des sommes
            dues. Le Vendeur ne sera pas tenu de procéder à la délivrance des
            Produits commandés par le Client si celui-ci ne lui en paie pas le
            prix en totalité dans les conditions ci-dessus indiquées.
          </p>
        </Article>
 
        {/* ARTICLE 5 */}
        <Article titre="Article 5 – Livraisons">
          <p>
            Les Produits commandés par le Client seront livrés en France
            métropolitaine et partout dans le monde.
          </p>
          <p>
            Les livraisons interviennent dans un délai de 30 jours à l’adresse
            indiquée par le Client lors de sa commande sur le site. La livraison
            est constituée par le transfert au Client de la possession physique
            ou du contrôle du Produit. Sauf cas particulier ou indisponibilité
            d’un ou plusieurs Produits, les Produits commandés seront livrés en
            une seule fois. Le Vendeur s’engage à faire ses meilleurs efforts
            pour livrer les Produits commandés par le Client dans les délais
            ci-dessus précisés.
          </p>
          <p>
            Si les Produits commandés n’ont pas été livrés dans un délai de 30
            jours après la date indicative de livraison, pour toute autre cause
            que la force majeure ou le fait du Client, la vente pourra être
            résolue à la demande écrite du Client dans les conditions prévues aux
            articles L216-2, L216-3 et L241-4 du Code de la consommation. Les
            sommes versées par le Client lui seront alors restituées au plus tard
            dans les quatorze jours qui suivent la date de dénonciation du
            contrat, à l’exclusion de toute indemnisation ou retenue.
          </p>
          <p>
            En cas de demande particulière du Client concernant les conditions
            d’emballage ou de transport des Produits commandés, dûment acceptée
            par écrit par le Vendeur, les coûts y afférents feront l’objet d’une
            facturation spécifique complémentaire, sur devis préalablement
            accepté par écrit par le Client.
          </p>
          <p>
            Le Client est tenu de vérifier l’état des Produits livrés. Il dispose
            d’un délai de 30 jours à compter de la livraison pour formuler des
            réclamations par courrier ou par e-mail, accompagnées de tous les
            justificatifs y afférents (photos notamment). Passé ce délai et à
            défaut d’avoir respecté ces formalités, les Produits seront réputés
            conformes et exempts de tout vice apparent, et aucune réclamation ne
            pourra être valablement acceptée par le Vendeur.
          </p>
          <p>
            Le Vendeur remboursera ou remplacera dans les plus brefs délais, et à
            ses frais, les Produits livrés dont les défauts de conformité ou les
            vices apparents ou cachés auront été dûment prouvés par le Client,
            dans les conditions prévues aux articles L217-4 et suivants du Code
            de la consommation et à celles prévues aux présentes CGV.
          </p>
          <p>
            Le transfert des risques de perte et de détérioration ne sera réalisé
            qu’au moment où le Client prendra physiquement possession des
            Produits. Les Produits voyagent donc aux risques et périls du Vendeur,
            sauf lorsque le Client aura lui-même choisi le transporteur. Dans ce
            cas, les risques sont transférés au moment de la remise du bien au
            transporteur.
          </p>
        </Article>
 
        {/* ARTICLE 6 */}
        <Article titre="Article 6 – Transfert de propriété">
          <p>
            Le transfert de propriété des Produits du Vendeur au Client ne sera
            réalisé qu’après complet paiement du prix par ce dernier, et ce
            quelle que soit la date de livraison desdits Produits.
          </p>
        </Article>
 
        {/* ARTICLE 7 — texte corrigé : l'original citait le cas des
            livraisons régulières, qui ne s'applique pas ici */}
        <Article titre="Article 7 – Droit de rétractation">
          <p>
            Conformément à l’article L221-18 du Code de la consommation, le
            Client dispose d’un délai de quatorze (14) jours à compter de la
            réception du Produit pour exercer son droit de rétractation, sans
            avoir à motiver sa décision ni à supporter d’autres coûts que les
            frais de retour.
          </p>
          <p>
            Le droit de rétractation peut être exercé à l’aide du formulaire de
            rétractation figurant en annexe, également disponible sur le site, ou
            par toute autre déclaration dénuée d’ambiguïté exprimant la volonté
            de se rétracter, notamment par courrier postal ou par e-mail adressé
            au Vendeur aux coordonnées indiquées à l’article 1 des CGV.
          </p>
          <p>
            Les retours sont à effectuer dans leur état d’origine et complets
            (emballage, accessoires, certificat…), permettant leur
            recommercialisation à l’état neuf, accompagnés de la facture
            d’achat. Les Produits endommagés, salis ou incomplets ne sont pas
            repris. Les frais de retour restent à la charge du Client.
          </p>
          <p>
            Le remboursement sera effectué dans un délai de 14 jours à compter de
            la réception par le Vendeur des Produits retournés par le Client dans
            les conditions prévues au présent article.
          </p>
        </Article>
 
        {/* ARTICLE 8 */}
        <Article titre="Article 8 – Responsabilité du Vendeur – Garanties">
          <p className="mb-1">Les Produits fournis par le Vendeur bénéficient :</p>
          <ul>
            <li>
              de la garantie légale de conformité, pour les Produits
              défectueux, abîmés ou endommagés ou ne correspondant pas à la
              commande ;
            </li>
            <li>
              de la garantie légale contre les vices cachés provenant d’un
              défaut de matière, de conception ou de fabrication affectant les
              Produits livrés et les rendant impropres à l’utilisation.
            </li>
          </ul>
 
          <h3 className="h5 mt-4">Dispositions relatives aux garanties légales</h3>
 
          <Citation source="Article L217-4 du Code de la consommation">
            « Le vendeur est tenu de livrer un bien conforme au contrat et
            répond des défauts de conformité existant lors de la délivrance. Il
            répond également des défauts de conformité résultant de l’emballage,
            des instructions de montage ou de l’installation lorsque celle-ci a
            été mise à sa charge par le contrat ou a été réalisée sous sa
            responsabilité. »
          </Citation>
 
          <blockquote className="border-start ps-3 my-3">
            <p className="fw-semibold mb-1">
              Article L217-5 du Code de la consommation
            </p>
            <p className="fst-italic mb-1">« Le bien est conforme au contrat :</p>
            <p className="fst-italic mb-1">
              1° S’il est propre à l’usage habituellement attendu d’un bien
              semblable et, le cas échéant :
            </p>
            <ul className="fst-italic">
              <li>
                s’il correspond à la description donnée par le vendeur et
                possède les qualités que celui-ci a présentées à l’acheteur sous
                forme d’échantillon ou de modèle ;
              </li>
              <li>
                s’il présente les qualités qu’un acheteur peut légitimement
                attendre eu égard aux déclarations publiques faites par le
                vendeur, par le producteur ou par son représentant, notamment
                dans la publicité ou l’étiquetage ;
              </li>
            </ul>
            <p className="fst-italic mb-0">
              2° Ou s’il présente les caractéristiques définies d’un commun
              accord par les parties ou est propre à tout usage spécial recherché
              par l’acheteur, porté à la connaissance du vendeur et que ce
              dernier a accepté. »
            </p>
          </blockquote>
 
          <Citation source="Article L217-12 du Code de la consommation">
            « L’action résultant du défaut de conformité se prescrit par deux
            ans à compter de la délivrance du bien. »
          </Citation>
 
          <Citation source="Article 1641 du Code civil">
            « Le vendeur est tenu de la garantie à raison des défauts cachés de
            la chose vendue qui la rendent impropre à l’usage auquel on la
            destine, ou qui diminuent tellement cet usage, que l’acheteur ne
            l’aurait pas acquise, ou n’en aurait donné qu’un moindre prix, s’il
            les avait connus. »
          </Citation>
 
          <Citation source="Article 1648, alinéa 1er, du Code civil">
            « L’action résultant des vices rédhibitoires doit être intentée par
            l’acquéreur dans un délai de deux ans à compter de la découverte du
            vice. »
          </Citation>
 
          <Citation source="Article L217-16 du Code de la consommation">
            « Lorsque l’acheteur demande au vendeur, pendant le cours de la
            garantie commerciale qui lui a été consentie lors de l’acquisition
            ou de la réparation d’un bien meuble, une remise en état couverte
            par la garantie, toute période d’immobilisation d’au moins sept
            jours vient s’ajouter à la durée de la garantie qui restait à
            courir. Cette période court à compter de la demande d’intervention
            de l’acheteur ou de la mise à disposition pour réparation du bien en
            cause, si cette mise à disposition est postérieure à la demande
            d’intervention. »
          </Citation>
 
          <p>
            Afin de faire valoir ses droits, le Client devra informer le
            Vendeur, par écrit (e-mail ou courrier), de la non-conformité des
            Produits ou de l’existence des vices cachés à compter de leur
            découverte.
          </p>
          <p>
            Le Vendeur remboursera, remplacera ou fera réparer les Produits ou
            pièces sous garantie jugés non conformes ou défectueux. Les frais
            d’envoi seront remboursés sur la base du tarif facturé et les frais
            de retour seront remboursés sur présentation des justificatifs.
          </p>
          <p>
            Les remboursements, remplacements ou réparations des Produits jugés
            non conformes ou défectueux seront effectués dans les meilleurs
            délais et au plus tard dans les 30 jours suivant la constatation par
            le Vendeur du défaut de conformité ou du vice caché. Ce
            remboursement pourra être fait par virement ou chèque bancaire.
          </p>
          <p className="mb-1">
            La responsabilité du Vendeur ne saurait être engagée dans les cas
            suivants :
          </p>
          <ul>
            <li>
              non-respect de la législation du pays dans lequel les Produits
              sont livrés, qu’il appartient au Client de vérifier ;
            </li>
            <li>
              mauvaise utilisation, utilisation à des fins professionnelles,
              négligence ou défaut d’entretien de la part du Client, ainsi
              qu’en cas d’usure normale du Produit, d’accident ou de force
              majeure ;
            </li>
            <li>
              les photographies et graphismes présentés sur le site ne sont pas
              contractuels et ne sauraient engager la responsabilité du Vendeur.
            </li>
          </ul>
          <p>
            La garantie du Vendeur est, en tout état de cause, limitée au
            remplacement ou au remboursement des Produits non conformes ou
            affectés d’un vice.
          </p>
        </Article>
 
        {/* ARTICLE 9 */}
        <Article titre="Article 9 – Données personnelles">
          <p>
            Le Client est informé que la collecte de ses données à caractère
            personnel est nécessaire à la vente des Produits et à leur
            délivrance ou livraison, confiées au Vendeur. Ces données à
            caractère personnel sont collectées uniquement pour l’exécution du
            contrat de vente.
          </p>
 
          <h3 className="h5 mt-4">9.1 Collecte des données à caractère personnel</h3>
          <p className="mb-1">
            Les données à caractère personnel collectées sur le site sont les
            suivantes :
          </p>
          <ul>
            <li>
              <strong>Ouverture de compte</strong> : lors de la création du
              compte Client, nom, prénom, adresse postale, numéro de téléphone
              et adresse e-mail.
            </li>
            <li>
              <strong>Paiement</strong> : dans le cadre du paiement des
              Produits, les données financières relatives à la carte bancaire
              du Client sont traitées par le prestataire de paiement.
            </li>
          </ul>
 
          <h3 className="h5 mt-4">9.2 Destinataires des données à caractère personnel</h3>
          <p>
            Les données à caractère personnel sont réservées à l’usage exclusif
            du Vendeur et de ses salariés.
          </p>
 
          <h3 className="h5 mt-4">9.3 Responsable de traitement</h3>
          <p>
            Le responsable de traitement des données est le Vendeur, au sens de
            la loi Informatique et Libertés et du Règlement (UE) 2016/679 sur la
            protection des données à caractère personnel. Il peut être contacté
            à l’adresse <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
 
          <h3 className="h5 mt-4">9.4 Limitation du traitement</h3>
          <p>
            Sauf accord exprès du Client, ses données à caractère personnel ne
            sont pas utilisées à des fins publicitaires ou marketing.
          </p>
 
          <h3 className="h5 mt-4">9.5 Durée de conservation des données</h3>
          <p>
            Le Vendeur conservera les données ainsi recueillies pendant un délai
            de 5 ans, couvrant le temps de la prescription de la responsabilité
            civile contractuelle applicable.
          </p>
 
          <h3 className="h5 mt-4">9.6 Sécurité et confidentialité</h3>
          <p>
            Le Vendeur met en œuvre des mesures organisationnelles, techniques,
            logicielles et physiques en matière de sécurité du numérique pour
            protéger les données personnelles contre les altérations,
            destructions et accès non autorisés. Toutefois, Internet n’étant pas
            un environnement complètement sécurisé, le Vendeur ne peut garantir
            la sécurité de la transmission ou du stockage des informations sur
            Internet.
          </p>
 
          <h3 className="h5 mt-4">9.7 Mise en œuvre des droits des Clients et utilisateurs</h3>
          <p className="mb-1">
            En application de la réglementation applicable aux données à
            caractère personnel, les Clients et utilisateurs du site disposent
            des droits suivants, qu’ils exercent en écrivant au responsable de
            traitement (article 9.3) :
          </p>
          <ul>
            <li>mettre à jour ou supprimer les données qui les concernent ;</li>
            <li>supprimer leur compte ;</li>
            <li>
              exercer leur droit d’accès pour connaître les données personnelles
              les concernant ;
            </li>
            <li>demander la rectification de données inexactes ;</li>
            <li>
              demander la suppression de leurs données, conformément aux lois
              applicables en matière de protection des données ;
            </li>
            <li>
              solliciter la portabilité des données détenues par le Vendeur vers
              un autre prestataire ;
            </li>
            <li>s’opposer au traitement de leurs données par le Vendeur.</li>
          </ul>
          <p>
            Ces droits, dès lors qu’ils ne s’opposent pas à la finalité du
            traitement, peuvent être exercés par courrier ou par e-mail. Le
            responsable de traitement doit apporter une réponse dans un délai
            maximal d’un mois. En cas de refus de faire droit à la demande du
            Client, celui-ci doit être motivé.
          </p>
          <p>
            Le Client est informé qu’en cas de refus, il peut introduire une
            réclamation auprès de la CNIL (3 place de Fontenoy, 75007 Paris) ou
            saisir une autorité judiciaire.
          </p>
          <p>
            Le Client peut être invité à cocher une case par laquelle il accepte
            de recevoir des e-mails à caractère informatif et publicitaire de la
            part du Vendeur. Il aura toujours la possibilité de retirer son
            accord à tout moment en contactant le Vendeur ou en suivant le lien
            de désabonnement.
          </p>
        </Article>
 
        {/* ARTICLE 10 */}
        <Article titre="Article 10 – Propriété intellectuelle">
          <p>
            Le contenu du site est la propriété du Vendeur et de ses partenaires
            et est protégé par les lois françaises et internationales relatives
            à la propriété intellectuelle. Toute reproduction totale ou
            partielle de ce contenu est strictement interdite et est susceptible
            de constituer un délit de contrefaçon.
          </p>
        </Article>
 
        {/* ARTICLE 11 */}
        <Article titre="Article 11 – Droit applicable – Langue">
          <p>
            Les présentes CGV et les opérations qui en découlent sont régies et
            soumises au droit français. Les présentes CGV sont rédigées en
            langue française. Dans le cas où elles seraient traduites en une ou
            plusieurs langues étrangères, seul le texte français ferait foi en
            cas de litige.
          </p>
        </Article>
 
        {/* ARTICLE 12 */}
        <Article titre="Article 12 – Litiges">
          <p>
            Pour toute réclamation, le Client peut contacter le Vendeur à
            l’adresse postale ou e-mail indiquée à l’article 1 des présentes
            CGV.
          </p>
          <p>
            Conformément aux articles L612-1 et suivants du Code de la
            consommation, le Client peut recourir gratuitement à un médiateur de
            la consommation en vue de la résolution amiable d’un litige. Le
            médiateur désigné est :
          </p>
          {/* TODO : remplacer par un vrai médiateur de la consommation agréé
              (un tribunal n'est pas un médiateur) */}
          <ul>
            <li>[Nom du médiateur]</li>
            <li>[Adresse du médiateur]</li>
            <li>[Site internet / e-mail du médiateur]</li>
          </ul>
          <p>
            Tous les litiges relatifs aux opérations d’achat et de vente
            conclues en application des présentes CGV qui n’auraient pas fait
            l’objet d’un règlement amiable entre le Vendeur et le Client ou par
            médiation seront soumis aux tribunaux compétents dans les conditions
            de droit commun.
          </p>
        </Article>
 
        {/* ANNEXE */}
        <Article titre="Annexe I – Formulaire de rétractation">
          <p>
            Le présent formulaire doit être complété et renvoyé uniquement si le
            Client souhaite se rétracter de la commande passée sur{" "}
            <a href={SITE}>{SITE}</a>, sauf exclusions ou limites à l’exercice
            du droit de rétractation prévues par les présentes CGV.
          </p>
          <div className="border rounded p-3">
            <p className="mb-1">À l’attention de GOLI Gore Gbaka</p>
            <p>{ADRESSE}</p>
            <p className="mb-1">Date : ______________________</p>
            <p className="mb-1">
              Je notifie par la présente la rétractation du contrat portant sur
              le bien ci-dessous :
            </p>
            <ul>
              <li>Commande du (indiquer la date) : ____________________</li>
              <li>Numéro de la commande : ____________________</li>
              <li>Nom du Client : ____________________</li>
              <li>Adresse du Client : ____________________</li>
            </ul>
            <p className="mb-0">
              Signature du Client (uniquement en cas de notification du présent
              formulaire sur papier) :
            </p>
          </div>
        </Article>
      </div>
    </section>
  );
}
 