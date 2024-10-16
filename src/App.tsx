import Section from "./components/Section";
import Presentation from "./Sections/Presentation";
import Skills from "./Sections/Skills";
import SocialMedias from "./Sections/SocialMedias";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="grid max-h-[90%] max-w-6xl grid-cols-4 grid-rows-8 flex-wrap">
        <Presentation className="col-span-3 row-span-3" />
        <Skills className="col-span-1 row-span-6" />
        <SocialMedias className="col-span-1 row-span-5" />
        <Section className="col-span-2 row-span-3">
          <p>Projets</p>
        </Section>
        <Section className="col-span-2 row-span-2">
          <p>Projets actuel</p>
        </Section>
        <Section className="col-span-1 row-span-2">
          <p>Blog</p>
        </Section>
      </div>
    </div>
  );
}

export default App;
