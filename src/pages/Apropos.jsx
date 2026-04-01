import "../css/accueil.css";
export default function Apropos() {
  return (
    <section className="container py-5 text-light">
      <h1 className="mb-4">À propos</h1>

      <p>
        Gore Gbaka Goli est un artiste autodidacte qui cultive sa pratique du
        dessin depuis l’enfance. Originaire de Marseille, il a suivi un
        parcours scientifique à l’université Paris XI avant de se consacrer
        pleinement à sa recherche esthétique, explorant la peinture et le
        dessin pour exprimer la beauté du monde.
      </p>

      <p>
        Sa démarche actuelle se distingue par une réinterprétation minimaliste
        de thèmes classiques et religieux. En s’appuyant sur l’influence de
        maîtres tels que Le Caravage, Rembrandt ou Ingres, l’artiste dépouille
        ses compositions au crayon pour n’en garder que l’essentiel du trait sur
        le papier.
      </p>

      <p>
        Entre académisme et expression sensible, Gore Gbaka Goli cherche à
        capter la lumière pour en faire le vecteur principal des émotions. La
        simplicité du geste souligne ainsi la profondeur des scènes bibliques ou
        historiques, transformant chaque ligne en une quête de clarté et de
        ressenti.
      </p>

      <div className="card bg-dark border-0 shadow m-5 mx-auto col-12 col-md-10 col-lg-8">
        <div className="card-body">
          <iframe
            className="pdf w-100"
            src="/certification_gore-gbaka-goli_11689.pdf"
            title="Certification Gore Gbaka Goli"
            style={{ minHeight: "600px", border: "none" }}
          />
        </div>
      </div>
    </section>
  );
}