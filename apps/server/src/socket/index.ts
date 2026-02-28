import { Server } from 'socket.io';
import {
  ChatMessage,
  ClientToServerEvents,
  ServerToClientEvents,
} from '@repo/contracts';
import { nanoid } from 'nanoid';

export function registerSocketHandler(
  io: Server<ClientToServerEvents, ServerToClientEvents>
) {
  io.on('connection', (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on('join_room', ({ roomId }, ack) => {
      const normalizedRoomId = roomId?.trim();

      if (!normalizedRoomId) {
        ack?.({ ok: false, errro: 'roomId is required' });
        return;
      }

      socket.join(normalizedRoomId);
      console.log(`Socket ${socket.id} joined room ${normalizedRoomId}`);
      ack?.({ ok: true, data: { roomId: normalizedRoomId } });
    });

    socket.on('send_message', ({ roomId, text }, ack) => {
      const normalizedRoomId = roomId.trim();
      const normalizedText = text.trim();

      if (!normalizedRoomId) {
        ack?.({ ok: false, errro: 'roomId is required' });
        return;
      }

      if (!normalizedText) {
        ack?.({ ok: false, errro: 'text is required' });
        return;
      }

      const message: ChatMessage = {
        text,
        roomId,
        senderId: socket.id,
        createdAt: new Date().toISOString(),
        id: nanoid(),
      };
      io.to(normalizedRoomId).emit('receive_message', message);
      ack?.({ ok: true, data: { message } });
    });

    socket.on('disconnect', () => {
      console.log(`user disconnected: ${socket.id}`);
    });
  });
}
