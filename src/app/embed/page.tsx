'use client';

import ChatInterface from '@/components/ChatInterface';

export default function EmbedPage() {
  return (
    <div className="h-screen w-full">
      <ChatInterface embedded={true} className="h-full" />
    </div>
  );
}
