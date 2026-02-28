import JoinRoom from './JoinRoom';
import { Profile } from './Profile';
import Rooms from './Rooms';
import Teams from './Teams';

type ChatSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
  return (
    <aside
      id="chat-sidebar"
      className={`absolute [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300 inset-y-0 left-0 z-40 flex h-full w-[min(82vw,320px)] shrink-0 flex-col overflow-y-auto border-r border-slate-200/70 bg-white/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 lg:static lg:w-[270px] lg:bg-white/65 lg:shadow-none ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
    >
      <button
        type="button"
        className="rounded-full hidden border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        onClick={onClose}
      >
        Close
      </button>
      <Profile />
      <JoinRoom onJoin={onClose} />
      <Rooms onJoin={onClose} />
      {/* <Teams /> */}
    </aside>
  );
}
