import Section from "../components/Section";

function Presentation({ className }: { className: string }) {
  return (
    <Section className={className}>
      <>
        <h2>Bienvenue sur mon portfolio !</h2>
        <p>
          Développeur autodidacte avec plus de 12 ans d'expérience, je suis
          passionné par la création de solutions techniques innovantes et
          efficaces. Ma philosophie repose sur l'apprentissage continu,
          l'expérimentation et la réalisation de projets concrets. Vous
          trouverez ici une sélection de mes travaux en développement
          informatique, allant de projets web à des solutions logicielles
          complexes. Explorez mes projets et n'hésitez pas à me contacter pour
          discuter de collaborations ou d'opportunités.
        </p>
      </>
    </Section>
  );
}

export default Presentation;
