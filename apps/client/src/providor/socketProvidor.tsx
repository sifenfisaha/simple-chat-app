"use client";
import React, { createContext, useContext, useEffect } from "react";
import { getSocket } from "@/lib/socket";

const SocketContext = createContext<any>(null);

export function SocketProvidor({ children }: { children: React.ReactNode }) {
  const socket = getSocket();

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return <SocketContext value={socket}>{children}</SocketContext>;
}

export function useScoket() {
  return useContext(SocketContext);
}
