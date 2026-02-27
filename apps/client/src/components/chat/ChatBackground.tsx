export function ChatBackground() {
  return (
    <>
      <div className="chat-blob pointer-events-none absolute -top-28 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-teal-200/80 to-cyan-100/60 blur-3xl" />
      <div className="chat-blob pointer-events-none absolute -right-14 top-44 h-80 w-80 rounded-full bg-gradient-to-br from-orange-200/80 to-amber-100/60 blur-3xl [animation-delay:1.3s]" />
    </>
  );
}
