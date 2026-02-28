export type Ack<T = undefined> =
  | (T extends undefined ? { ok: true } : { ok: true; data: T })
  | { ok: false; error: string };

export type ChatMessage = {
  id: string;
  roomId: string;
  text: string;
  senderId: string;
  createdAt: string;
};

export type JoinRoomPayload = {
  roomId: string;
};

export type SendMessagePayload = {
  roomId: string;
  text: string;
};

export type JoinRoomAck = Ack<{ roomId: string }>;
export type SendMessageAck = Ack<{ message: ChatMessage }>;

export interface ClientToServerEvents {
  join_room: (
    payload: JoinRoomPayload,
    ack?: (res: JoinRoomAck) => void
  ) => void;
  send_message: (
    payload: SendMessagePayload,
    ack?: (res: SendMessageAck) => void
  ) => void;
}

export interface ServerToClientEvents {
  receive_message: (message: ChatMessage) => void;
  socket_error: (payload: { message: string }) => void;
}
