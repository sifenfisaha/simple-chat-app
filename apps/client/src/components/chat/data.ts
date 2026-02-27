export type Teammate = {
  name: string;
  status: string;
};

export type ChatMessage = {
  id: number;
  user: string;
  time: string;
  text: string;
  mine: boolean;
};

export const brand = {
  name: 'Pulse Chat',
  title: 'Team Space',
  description: 'Keep decisions visible, fast, and searchable.',
};

export const currentRoom = 'design-sprint';
export const onlineCount = 6;

export const rooms = [
  'design-sprint',
  'build-ship',
  'customer-voice',
  'product-feed',
  'launch-checklist',
];

export const teammates: Teammate[] = [
  { name: 'Ava', status: 'Online' },
  { name: 'Noah', status: 'In review' },
  { name: 'Mila', status: 'Heads down' },
];

export const sampleMessages: ChatMessage[] = [
  {
    id: 1,
    user: 'Ava',
    time: '09:41',
    text: 'Morning team. Shipping typing indicators today?',
    mine: false,
  },
  {
    id: 2,
    user: 'You',
    time: '09:42',
    text: 'Yes, endpoint is live. I am polishing the chat screen now.',
    mine: true,
  },
  {
    id: 3,
    user: 'Noah',
    time: '09:43',
    text: 'Perfect. I will test room switching and unread badges after lunch.',
    mine: false,
  },
  {
    id: 4,
    user: 'You',
    time: '09:45',
    text: 'Great. I will keep this room updated once the UI is merged.',
    mine: true,
  },
];
