import Section from "../components/Section";

function Presentation({ className }: { className: string }) {
  return (
    <Section className={className}>
      <>
        <h2>Bienvenue sur mon portfolio !</h2>
        <p className="text-muted_foreground">
          Bonjour, je m'appelle Alex Robert, j'ai 22 ans et je suis passionné
          par la programmation depuis mes 10 ans, en particulier en C et en
          assembleur x86. Bien que je sois encore en apprentissage sur l'ASM
          x86, j'adore explorer le bas niveau et en découvrir toutes ses
          subtilités. Je suis constamment à la recherche de nouveaux défis, car
          pour moi, coder, c'est repousser les limites et explorer de nouvelles
          possibilités. Mon ambition est de participer à des projets innovants,
          aux côtés d'autres passionnés, pour créer quelque chose
          d'exceptionnel.
        </p>
      </>
    </Section>
  );
}

export default Presentation;
