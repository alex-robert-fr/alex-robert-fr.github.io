import Section from "../components/Section";

function SocialMedias({ className }: { className: string }) {
  return (
    <Section className={className}>
      <>
        <ul>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Discord</li>
          <li>Mail</li>
        </ul>
      </>
    </Section>
  );
}

export default SocialMedias;
