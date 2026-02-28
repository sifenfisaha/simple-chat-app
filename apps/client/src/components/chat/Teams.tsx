import { useAppContext } from '@/providor/AppProvidor';

export default function Teams() {
  const { teammates } = useAppContext();
  return (
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
  );
}
