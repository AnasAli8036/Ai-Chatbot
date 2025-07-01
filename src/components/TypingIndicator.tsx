'use client';

import { motion } from 'framer-motion';

export default function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1 p-4">
      <div className="flex space-x-1">
        <motion.div
          className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.4,
          }}
        />
      </div>
      <span className="text-sm text-secondary-500 ml-2">AI is thinking...</span>
    </div>
  );
}
