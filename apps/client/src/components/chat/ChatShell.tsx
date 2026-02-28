'use client';

import { useState } from 'react';
import { ChatBackground } from './ChatBackground';
import { ChatComposer } from './ChatComposer';
import { ChatHeader } from './ChatHeader';
import { ChatMessageList } from './ChatMessageList';
import { ChatSidebar } from './ChatSidebar';
import { useAppContext } from '@/providor/AppProvidor';

export function ChatShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { currentRoom } = useAppContext();

  return (
    <main className="relative h-screen max-h-screen overflow-hidden text-slate-900">
      <ChatBackground />

      <section className="relative mx-auto flex h-full max-h-full w-full max-w-[94rem] flex-col overflow-hidden border border-white/70 bg-white/75 shadow-[0_24px_70px_rgba(15,23,42,0.15)] backdrop-blur-xl [animation:shellIn_520ms_cubic-bezier(0.22,1,0.36,1)_both] lg:flex-row">
        <ChatSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {isSidebarOpen ? (
          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 z-30 bg-slate-900/35 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        ) : null}

        <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {!currentRoom ? (
            <>
              <ChatHeader
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
              />
              <div className="flex h-full flex-col items-center justify-center gap-4 px-5 text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Welcome to Chat!
                </h2>
                <p className="max-w-sm text-sm text-slate-500">
                  Join a room from the sidebar or create a new one to start
                  chatting.
                </p>
              </div>
            </>
          ) : null}
          {currentRoom ? (
            <>
              <ChatHeader
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
              />
              <ChatMessageList />
              <ChatComposer />
            </>
          ) : null}
        </section>
      </section>
    </main>
  );
}
