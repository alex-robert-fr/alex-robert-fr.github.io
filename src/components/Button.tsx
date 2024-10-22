function Button({ text }: { text: string }) {
  return (
    <div className="mx-2 inline-block rounded border border-border bg-background/50 p-3 transition duration-500 ease-in-out hover:border-white/45 hover:transition hover:duration-300 cursor-pointer hover:ease-in-out">
      {text}
    </div>
  );
}

export default Button;
