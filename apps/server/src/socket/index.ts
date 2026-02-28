import { Server } from "socket.io";
import type {
  ServerToClientEvents,
  ClietnToServerEvents,
} from "../types/types";

export function registerSocketHandler(
  io: Server<ClietnToServerEvents, ServerToClientEvents>,
) {
  io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on("send_message", ({ message, roomId }) => {
      console.log("server mess", message);
      console.log(roomId);
    });

    socket.on("join_room", (roomId) => {
      socket.join(roomId);
      console.log(`Socket: ${socket.id} joined room: ${roomId}`);
    });

    socket.on("disconnect", () => {
      console.log(`user disconnected: ${socket.id}`);
    });
  });
}
