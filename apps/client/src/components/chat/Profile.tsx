"use client";
import { useScoket } from "@/providor/socketProvidor";

export const Profile = () => {
  const { socket, isConnecting } = useScoket();
  return (
    <div className="flex flex-col gap-3 p-6">
      <p className="capitalize text-zinc-500">id</p>
      {isConnecting ? <p>loading</p> : <p>{socket.id}</p>}
    </div>
  );
};
