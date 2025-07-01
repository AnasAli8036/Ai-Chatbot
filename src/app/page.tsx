'use client';

import { motion } from 'framer-motion';
import ChatInterface from '@/components/ChatInterface';
import { Sparkles, Zap, Globe, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-4"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent mb-6"
          >
            AI Assistant
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experience intelligent conversations with our beautifully designed AI assistant.
            Crafted for seamless interactions and elegant user experiences.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-secondary-200">
              <Zap className="w-5 h-5 text-primary-500" />
              <span className="text-secondary-700 font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-secondary-200">
              <Globe className="w-5 h-5 text-primary-500" />
              <span className="text-secondary-700 font-medium">Easy Integration</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-secondary-200">
              <Code className="w-5 h-5 text-primary-500" />
              <span className="text-secondary-700 font-medium">Developer Friendly</span>
            </div>
          </motion.div>
        </div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-secondary-200 overflow-hidden h-[600px]">
            <ChatInterface />
          </div>
        </motion.div>


      </motion.div>
    </div>
  );
}
