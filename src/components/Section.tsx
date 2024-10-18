import { ReactElement } from "react";
import "./Section.css";

function Section({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return <div className={`${className} section`}>{children}</div>;
}
export default Section;
