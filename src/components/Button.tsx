import { ReactElement } from "react";

function Button({ children }: { children: ReactElement }) {
  return (
    <div className="mx-2 inline-block cursor-pointer rounded border border-border bg-background/50 px-5 py-3 transition duration-500 ease-in-out hover:border-white/45 hover:transition hover:duration-300 hover:ease-in-out">
      {children}
    </div>
  );
}

export default Button;
