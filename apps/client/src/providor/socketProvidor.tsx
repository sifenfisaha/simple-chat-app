"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getSocket } from "@/lib/socket";
import { Socket } from "socket.io-client";
import { ServerToClientEvents, ClietnToServerEvents } from "@/types/types";

type TypedSocket = Socket<ServerToClientEvents, ClietnToServerEvents>;

type socketContextValue = {
  socket: TypedSocket;
  isConnected: boolean;
  isConnecting: boolean;
  lastError: string | null;
};

const SocketContext = createContext<socketContextValue | null>(null);

export function SocketProvidor({ children }: { children: React.ReactNode }) {
  const socket = getSocket();

  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [isConnecting, setIsConnecting] = useState<boolean>(!socket.connected);
  const [lastError, setLastError] = useState<string | null>(null);

  useEffect(() => {
    const handleConnect = () => {
      setIsConnected(true);
      setIsConnecting(false);
      setLastError(null);
    };

    const handleDisconnect = () => {
      setIsConnecting(true);
      setIsConnected(false);
    };
    const handleConnectError = (err: Error) => {
      setIsConnected(false);
      setIsConnecting(true);
      setLastError(err.message);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("connect_error", handleConnectError);

    if (!socket.connected) {
      setIsConnecting(true);
      socket.connect();
    }

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);
      socket.disconnect();
    };
  }, [socket]);

  const value = useMemo(
    () => ({ socket, isConnected, isConnecting, lastError }),
    [socket, isConnected, isConnecting, lastError],
  );

  return <SocketContext value={value}>{children}</SocketContext>;
}

export function useScoket() {
  const socket = useContext(SocketContext);
  if (!socket)
    throw new Error("useScoket must be used inside a SocketProvidor.");
  return socket;
}
