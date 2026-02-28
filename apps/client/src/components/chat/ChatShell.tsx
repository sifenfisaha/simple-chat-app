"use client";

import { useEffect, useState } from "react";
import { ChatBackground } from "./ChatBackground";
import { ChatComposer } from "./ChatComposer";
import { ChatHeader } from "./ChatHeader";
import { ChatMessageList } from "./ChatMessageList";
import { ChatSidebar } from "./ChatSidebar";

export function ChatShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(min-width: 1024px)").matches;
  });

  useEffect(() => {
    const viewportMatcher = window.matchMedia("(min-width: 1024px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsSidebarOpen(event.matches);
    };

    viewportMatcher.addEventListener("change", handleViewportChange);

    return () => {
      viewportMatcher.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <main className="relative h-screen max-h-screen overflow-hidden text-slate-900">
      <ChatBackground />

      <section className="relative mx-auto flex h-full max-h-full w-full max-w-[94rem] flex-col overflow-hidden border border-white/70 bg-white/75 shadow-[0_24px_70px_rgba(15,23,42,0.15)] backdrop-blur-xl [animation:shellIn_520ms_cubic-bezier(0.22,1,0.36,1)_both] lg:flex-row">
        <ChatSidebar isOpen={isSidebarOpen} />

        {isSidebarOpen ? (
          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 z-30 bg-slate-900/35 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        ) : null}

        <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <ChatHeader
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
          />
          <ChatMessageList />
          <ChatComposer />
        </section>
      </section>
    </main>
  );
}
