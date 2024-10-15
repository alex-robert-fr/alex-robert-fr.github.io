import { ReactElement } from "react";

function Section({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return (
    <p
      className={`${className} m-1 inline-block rounded-lg border border-border bg-card p-9 text-foreground`}
    >
      {children}
    </p>
  );
}
export default Section;
