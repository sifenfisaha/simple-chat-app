import { ChatBackground } from './ChatBackground';
import { ChatComposer } from './ChatComposer';
import { ChatHeader } from './ChatHeader';
import { ChatMessageList } from './ChatMessageList';
import { ChatSidebar } from './ChatSidebar';

export function ChatShell() {
  return (
    <main className="relative h-screen max-h-screen overflow-hidden text-slate-900">
      <ChatBackground />

      <section className="relative mx-auto flex h-full max-h-full w-full max-w-[94rem] flex-col overflow-hidden border border-white/70 bg-white/75 shadow-[0_24px_70px_rgba(15,23,42,0.15)] backdrop-blur-xl [animation:shellIn_520ms_cubic-bezier(0.22,1,0.36,1)_both] lg:flex-row">
        <ChatSidebar />

        <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <ChatHeader />
          <ChatMessageList />
          <ChatComposer />
        </section>
      </section>
    </main>
  );
}
