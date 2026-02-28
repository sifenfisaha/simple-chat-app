export type ChatMessage = {
  id: number;
  user: string;
  time: string;
  text: string;
  mine: boolean;
  roomId: string;
};

export interface ServerToClientEvents {
  receive_message: ({
    message,
    roomId,
  }: {
    message: string;
    roomId: string;
  }) => void;
}

export interface ClietnToServerEvents {
  send_message: ({ message }: { message: ChatMessage }) => void;
  join_room: (roomId: string) => void;
}
