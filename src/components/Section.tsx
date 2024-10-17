import { ReactElement } from "react";

function Section({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return (
    <div
      className={`${className} m-1 inline-block rounded-lg border border-border p-9 text-foreground hover:border-primary`}
    >
      {children}
    </div>
  );
}
export default Section;
