'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getSocket } from '@/lib/socket';
import { Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from '@repo/contracts';

type TypedSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

type SocketContextValue = {
  socket: TypedSocket;
  isConnected: boolean;
  isConnecting: boolean;
  lastError: string | null;
};

const SocketContext = createContext<SocketContextValue | undefined>(undefined);

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const socket = useMemo(() => getSocket(), []);

  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [isConnecting, setIsConnecting] = useState<boolean>(!socket.connected);
  const [lastError, setLastError] = useState<string | null>(null);

  useEffect(() => {
    const handleConnect = () => {
      setIsConnected(true);
      setIsConnecting(false);
      setLastError(null);
    };

    const handleDisconnect = (reason: string) => {
      setIsConnected(false);
      setIsConnecting(reason !== 'io client disconnect');
    };

    const handleConnectError = (err: Error) => {
      setIsConnected(false);
      setIsConnecting(true);
      setLastError(err.message);
    };

    const handleSocketError = (payload: { message: string }) => {
      setLastError(payload.message);
    };

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', handleConnectError);
    socket.on('socket_error', handleSocketError);

    if (!socket.connected && !socket.active) {
      socket.connect();
    }

    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('connect_error', handleConnectError);
      socket.off('socket_error', handleSocketError);
      socket.disconnect();
    };
  }, [socket]);

  const value = useMemo(
    () => ({ socket, isConnected, isConnecting, lastError }),
    [socket, isConnected, isConnecting, lastError]
  );

  return <SocketContext value={value}>{children}</SocketContext>;
}

export function useSocket() {
  const context = useContext(SocketContext);
  if (!context)
    throw new Error('useSocket must be used inside a SocketProvider.');
  return context;
}

export const SocketProvidor = SocketProvider;
export const useScoket = useSocket;
