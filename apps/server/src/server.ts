import app from ".";
import http from "http";
import { logger } from "./db/logger";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { registerSocketHandler } from "./socket";

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

registerSocketHandler(io);

server.listen(PORT, () => {
  logger.info("Express server listening on http://localhost:%d", PORT);
});
