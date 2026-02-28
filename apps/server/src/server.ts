import app from './index.js';
import http from 'http';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { registerSocketHandler } from './socket/index.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

registerSocketHandler(io);

server.listen(PORT, () => {
  console.log('Express server listening on http://localhost:%d', PORT);
});
