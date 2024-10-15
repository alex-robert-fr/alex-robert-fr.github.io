import Section from "../components/Section";

function Skills({ className }: { className: string }) {
  return (
    <Section className={className}>
      <>
        <h3>Bas niveau</h3>
        <ul>
          <li>C</li>
          <li>Rust</li>
          <li>ASM x86</li>
        </ul>
        <h3>Web</h3>
        <ul>
          <li>NodeJS</li>
          <li>Typescript</li>
          <li>Vite</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>Python</li>
        </ul>
        <h3>Outils</h3>
        <ul>
          <li>GCC / clang</li>
          <li>Docker</li>
          <li>Neovim</li>
          <li>GDB</li>
          <li>Valgrind</li>
          <li>PNPM</li>
        </ul>
      </>
    </Section>
  );
}

export default Skills;
