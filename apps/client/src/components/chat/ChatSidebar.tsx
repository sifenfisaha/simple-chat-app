import { brand, currentRoom, rooms, teammates } from './data';

export function ChatSidebar() {
  return (
    <aside className="flex h-[40vh] min-h-[250px] w-full flex-col overflow-y-auto border-b border-slate-200/70 bg-white/65 lg:h-full lg:w-[270px] lg:shrink-0 lg:border-b-0 lg:border-r">
      <div className="p-5 hidden sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
          {brand.name}
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          {brand.title}
        </h1>
        <p className="mt-1 text-sm text-slate-600">{brand.description}</p>
      </div>

      <div className="border-y border-slate-200/70 px-5 py-4 sm:px-6">
        <label
          className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500"
          htmlFor="room-input"
        >
          Join Room
        </label>
        <div className="mt-3 flex gap-2">
          <input
            id="room-input"
            type="text"
            placeholder="project-room"
            className="w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm outline-none transition focus:border-teal-300 focus:ring-2 focus:ring-teal-100"
          />
          <button
            type="button"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Join
          </button>
        </div>
      </div>

      <div className="px-5 py-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Rooms
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 lg:grid-cols-1">
          {rooms.map((room) => (
            <button
              key={room}
              type="button"
              className={`rounded-xl border px-3 py-2 text-left transition ${
                room === currentRoom
                  ? 'border-teal-200 bg-teal-50 text-slate-900'
                  : 'border-slate-200 bg-white/80 text-slate-600 hover:border-teal-200 hover:text-slate-900'
              }`}
            >
              #{room}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden border-t border-slate-200/70 px-5 py-4 sm:block sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Team
        </p>
        <div className="mt-3 space-y-2">
          {teammates.map((person) => (
            <div
              key={person.name}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-3 py-2"
            >
              <p className="text-sm font-medium text-slate-700">{person.name}</p>
              <p className="text-xs text-slate-500">{person.status}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
