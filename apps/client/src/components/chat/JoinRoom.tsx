'use client';

import { useAppContext } from '@/providor/AppProvidor';
import { useSocket } from '@/providor/socketProvidor';
import { useState } from 'react';

export default function JoinRoom({ onJoin }: { onJoin: () => void }) {
  const [roomInput, setRoomInput] = useState<string>('');
  const { socket, isConnected } = useSocket();
  const [joinError, setJoinError] = useState<string | null>(null);
  const [isJoining, setIsJoining] = useState<boolean>(false);
  const { addRoom, rooms, setcurrentRoom } = useAppContext();

  const joinRoom = (text: string) => {
    if (!isConnected) return;
    if (rooms.includes(text)) {
      setJoinError('You are already in this room');
      return;
    }
    socket.emit('join_room', { roomId: text }, (res) => {
      setIsJoining(true);
      setJoinError(null);
      if (!res.ok) {
        setJoinError(res.error);
        setIsJoining(false);
        return;
      }
      setJoinError(null);
      setIsJoining(false);
      addRoom(text);
      setcurrentRoom?.(text);
      setRoomInput('');
      onJoin();
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isConnected) return;
    const trimmed = roomInput.trim();
    if (!trimmed) return;
    joinRoom(trimmed);
  };

  return (
    <div className="border-y border-slate-200/70 px-5 py-4 sm:px-6">
      <label
        className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500"
        htmlFor="room-input"
      >
        Join Room
      </label>
      <div className="mt-3 flex flex-col gap-2">
        <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2">
          <input
            id="room-input"
            type="text"
            value={roomInput}
            onChange={(e) => setRoomInput(e.target.value)}
            placeholder="project-room"
            className="w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm outline-none transition focus:border-teal-300 focus:ring-2 focus:ring-teal-100"
          />
          <button
            type="submit"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            {isJoining ? 'Joining...' : 'Join'}
          </button>
        </form>
        {joinError ? (
          <p className="mt-2 text-xs text-rose-600">{joinError}</p>
        ) : null}
      </div>
    </div>
  );
}
