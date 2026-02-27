"use client";
import React, { createContext, useContext, useEffect } from "react";
import { getSocket } from "@/lib/socket";
import { Socket } from "socket.io-client";
import { ServerToClientEvents, ClietnToServerEvents } from "@/types/types";

type TypedSocket = Socket<ServerToClientEvents, ClietnToServerEvents>;

const SocketContext = createContext<TypedSocket | null>(null);

export function SocketProvidor({ children }: { children: React.ReactNode }) {
  const socket = getSocket();

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return <SocketContext value={socket}>{children}</SocketContext>;
}

export function useScoket() {
  const socket = useContext(SocketContext);
  if (!socket)
    throw new Error("useScoket must be used inside a SocketProvidor.");
  return socket;
}
