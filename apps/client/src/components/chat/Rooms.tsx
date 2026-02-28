import { useAppContext } from '@/providor/AppProvidor';

export default function Rooms({ onJoin }: { onJoin: () => void }) {
  const { rooms, currentRoom, setcurrentRoom } = useAppContext();
  const handleRoomClick = (room: string) => {
    if (room === currentRoom) return;
    setcurrentRoom?.(room);
    onJoin();
  };
  return (
    <div className="px-5 py-4 sm:px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        Rooms
      </p>
      <div className="flex flex-col gap-2 mt-3">
        {rooms.map((room, index) => (
          <button
            onClick={() => handleRoomClick(room)}
            key={index}
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
  );
}
