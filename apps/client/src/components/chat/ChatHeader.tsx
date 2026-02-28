import { currentRoom, onlineCount } from "./data";

type ChatHeaderProps = {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
};

export function ChatHeader({
  isSidebarOpen,
  onToggleSidebar,
}: ChatHeaderProps) {
  return (
    <header className="border-b border-slate-200/70 bg-white/55 px-5 py-4 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <button
            type="button"
            aria-controls="chat-sidebar"
            aria-expanded={isSidebarOpen}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 lg:hidden"
            onClick={onToggleSidebar}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4"
            >
              {isSidebarOpen ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5H17M3 10H17M3 15H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Current Room
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">
              #{currentRoom}
            </h2>
          </div>
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
