export interface ServerToClientEvents {
  receive_message: (message: string) => void;
}

export interface ClietnToServerEvents {
  send_message: (message: string) => void;
  join_room: (roomId: string) => void;
}
