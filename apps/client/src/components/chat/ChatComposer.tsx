export function ChatComposer() {
  return (
    <form className="border-t border-slate-200/70 bg-white/60 px-5 py-4 sm:px-6">
      <label
        className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500"
        htmlFor="message-input"
      >
        Write Message
      </label>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          id="message-input"
          type="text"
          placeholder="Share an update..."
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-teal-300 focus:ring-2 focus:ring-teal-100"
        />
        <button
          type="submit"
          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Send
        </button>
      </div>
      <p className="mt-2 hidden text-xs text-slate-500">Enter sends your message.</p>
    </form>
  );
}
