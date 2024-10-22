import { ReactElement } from "react";

function Button({ children, url }: { children: ReactElement; url: string }) {
  return (
    <a
      className="mx-2 inline-block rounded border border-border bg-background/50 px-5 py-3 transition duration-500 ease-in-out hover:border-white/45 hover:transition hover:duration-300 hover:ease-in-out"
      href={url}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default Button;
