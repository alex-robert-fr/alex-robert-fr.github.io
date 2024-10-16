import Bubble from "./components/Bubble";
import Section from "./components/Section";
import Presentation from "./Sections/Presentation";
import Skills from "./Sections/Skills";
import SocialMedias from "./Sections/SocialMedias";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <Bubble />
      <Bubble />
      <Bubble />
      <svg className="absolute left-0 top-0 z-[10] h-full w-full opacity-50">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="gray"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className=" z-10 grid max-h-[90%] max-w-6xl grid-cols-4 grid-rows-8 flex-wrap">
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
