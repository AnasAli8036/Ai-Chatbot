'use client';

import { motion } from 'framer-motion';
import { Message } from '@/types/chat';
import { formatTime } from '@/lib/utils';
import { User, Bot } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
  isLast?: boolean;
}

export default function MessageBubble({ message, isLast }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''} ${
        isLast ? 'mb-4' : 'mb-6'
      }`}
    >
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser
            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
            : 'bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-700 border border-secondary-200 shadow-sm'
        }`}
      >
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </motion.div>

      {/* Message Content */}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[80%]`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-br-md shadow-lg'
              : 'bg-white text-secondary-800 border border-secondary-200 rounded-bl-md shadow-md backdrop-blur-sm'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </motion.div>

        {/* Timestamp */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-secondary-400 mt-1 px-1"
        >
          {formatTime(message.timestamp)}
        </motion.span>
      </div>
    </motion.div>
  );
}
