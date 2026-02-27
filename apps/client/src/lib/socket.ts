import { ClietnToServerEvents, ServerToClientEvents } from "@/types/types";
import { io, Socket } from "socket.io-client";

let socket: Socket<ServerToClientEvents, ClietnToServerEvents> | null = null;

export const getSocket = (): Socket<
  ServerToClientEvents,
  ClietnToServerEvents
> => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000", {
      autoConnect: false,
      auth: {
        // TODO: make the auth token dynamic
        token: "x-auth-token",
      },
    });
  }
  return socket;
};
