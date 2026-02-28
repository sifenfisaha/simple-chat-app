# Simple Chat App

A lightweight monorepo chat application with a Next.js client and a Node.js + Socket.IO server.

## Tech Stack

- **Client:** Next.js, React, TypeScript, Tailwind CSS
- **Server:** Express, Socket.IO, TypeScript
- **Workspace:** pnpm workspaces

## Requirements

- Node.js 20+
- pnpm 10+

## Getting Started

```bash
pnpm install
```

## Development

Run client and server together:

```bash
pnpm dev
```

Run services individually:

```bash
pnpm dev:client
pnpm dev:server
```

## Project Structure

```text
apps/
  client/     Next.js frontend
  server/     Express + Socket.IO backend
packages/
  contracts/  Shared TypeScript contracts
```
