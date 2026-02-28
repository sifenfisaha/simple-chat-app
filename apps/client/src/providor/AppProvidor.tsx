'use client';
import { createContext, useCallback, useContext, useState } from 'react';
import { ChatMessage } from '@repo/contracts';

type AppContextType = {
  currentRoom?: string | null;
  setcurrentRoom?: (room: string) => void;
  rooms: string[];
  teammates: { name: string; status: string }[];
  messages: { room: string; messages: ChatMessage[] }[];

  addRoom: (room: string) => void;
  addTeammate: (teammate: { name: string; status: string }) => void;
  addMessage: (room: string, message: ChatMessage) => void;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvidor = ({ children }: { children: React.ReactNode }) => {
  const [rooms, setRooms] = useState<string[]>([]);
  const [teammates, setTeammates] = useState<
    { name: string; status: string }[]
  >([]);
  const [messages, setMessages] = useState<
    { room: string; messages: ChatMessage[] }[]
  >([]);

  const addRoom = (room: string) => {
    setRooms((prev) => [...prev, room]);
  };

  const addTeammate = (teammate: { name: string; status: string }) => {
    setTeammates((prev) => [...prev, teammate]);
  };

  const addMessage = useCallback((room: string, message: ChatMessage) => {
    setMessages((prev) => {
      const existingRoom = prev.find((m) => m.room === room);
      if (existingRoom) {
        return prev.map((m) =>
          m.room === room ? { ...m, messages: [...m.messages, message] } : m
        );
      } else {
        return [...prev, { room, messages: [message] }];
      }
    });
  }, []);
  const [currentRoom, setCurrentRoom] = useState<string>();

  return (
    <AppContext.Provider
      value={{
        rooms,
        teammates,
        messages,
        addRoom,
        addTeammate,
        addMessage,
        currentRoom,
        setcurrentRoom: setCurrentRoom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
