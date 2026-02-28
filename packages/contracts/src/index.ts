export type Ack = { ok: true } | { ok: false; error: string };

export type ChatMessage = {
  id: string;
  roomId: string;
  text: string;
  senderId: string;
  createdAt: string;
};

export interface ClientToServerEvents {
  join_room: (payload: { roomId: string }, ack?: (res: Ack) => void) => void;
  send_message: (
    payload: { roomId: string; text: string },
    ack?: (res: Ack) => void
  ) => void;
}

export interface ServerToClientEvents {
  receive_message: (message: ChatMessage) => void;
  socket_error: (payload: { message: string }) => void;
}
