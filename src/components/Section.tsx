function Section({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <p
      className={`m-1 inline-block rounded-lg border border-border bg-card p-9 text-foreground ${className}`}
    >
      {children}
    </p>
  );
}
export default Section;
