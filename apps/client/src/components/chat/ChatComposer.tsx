'use client';
import React, { useState } from 'react';
import { useScoket } from '@/providor/socketProvidor';
import { useAppContext } from '@/providor/AppProvidor';

const ROOM_ID = 'general';

export function ChatComposer() {
  const { socket, isConnected, isConnecting } = useScoket();

  const [message, setMessage] = useState('');
  const [sendError, setSendError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const { currentRoom } = useAppContext();

  const sendMessage = (text: string) => {
    setIsSending(true);
    setSendError(null);

    if (!currentRoom) {
      setSendError('No room selected');
      setIsSending(false);
      return;
    }

    socket.emit('send_message', { roomId: currentRoom, text }, (res) => {
      setIsSending(false);
      if (!res.ok) {
        setSendError(res.error);
        return;
      }
      setMessage('');
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isConnected) return;
    const trimmed = message.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="border-t border-slate-200/70 bg-white/60 px-5 py-4 sm:px-6"
    >
      <label
        className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500"
        htmlFor="message-input"
      >
        Write Message
      </label>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          id="message-input"
          autoComplete="off"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Share an update..."
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-100"
        />
        <button
          type="submit"
          className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition ${
            !isConnecting && !isSending
              ? 'bg-slate-900 hover:bg-slate-700'
              : 'bg-slate-900/50 disabled:cursor-not-allowed'
          }`}
          disabled={!isConnected || isSending}
        >
          {isConnecting ? 'Connecting...' : isSending ? 'Sending...' : 'Send'}
        </button>
      </div>
      {sendError ? (
        <p className="mt-2 text-xs text-rose-600">{sendError}</p>
      ) : null}
    </form>
  );
}
