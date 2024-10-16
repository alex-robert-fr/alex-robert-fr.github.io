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
      className={`${className} m-1 inline-block rounded-lg border border-border bg-card bg-opacity-50 p-9 text-foreground backdrop-blur-xl hover:border-primary`}
    >
      {children}
    </div>
  );
}
export default Section;
