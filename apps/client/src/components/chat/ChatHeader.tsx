import { currentRoom, onlineCount } from './data';

export function ChatHeader() {
  return (
    <header className="border-b border-slate-200/70 bg-white/55 px-5 py-4 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Current Room
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight">
            #{currentRoom}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {onlineCount} online
          </span>
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            Settings
          </button>
        </div>
      </div>
    </header>
  );
}
