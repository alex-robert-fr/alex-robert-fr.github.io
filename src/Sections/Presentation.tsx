import Button from "../components/Button";
import Section from "../components/Section";

function Presentation({ className }: { className: string }) {
  return (
    <Section className={className}>
      <>
        <h2 className="mb-2 text-lg">Bienvenue sur mon p'tit bout de web !</h2>
        <p className="text-muted_foreground">
          Passionné par la programmation depuis mes 10 ans, je m'intéresse au
          bas niveau depuis 5 ans maintenant. J'adore relever de nouveaux défis
          et apprendre en continu. Mon objectif est de bosser sur des projets
          innovants avec d'autres passionnés pour créer quelque chose de
          vraiment unique.
        </p>
        <div className="mt-10">
          <Button text="Github" />
          <Button text="Linkedin" />
          <Button text="Discord" />
          <Button text="Email" />
        </div>
      </>
    </Section>
  );
}

export default Presentation;
