import Section from "./components/Section";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="grid max-h-[75%] max-w-5xl grid-cols-4 grid-rows-8 flex-wrap">
        <Section className="col-span-3 row-span-3">Presentation</Section>
        <Section className="col-span-1 row-span-6">Competences</Section>
        <Section className="col-span-1 row-span-5">Reseaux</Section>
        <Section className="col-span-2 row-span-3">Projets</Section>
        <Section className="col-span-2 row-span-2">Projets actuel</Section>
        <Section className="col-span-1 row-span-2">Blog</Section>
      </div>
    </div>
  );
}

export default App;
