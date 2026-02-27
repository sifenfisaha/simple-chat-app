import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const getSocket = () => {
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
