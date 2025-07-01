export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface LLMProvider {
  name: string;
  apiKey: string;
  baseUrl?: string;
  model: string;
}

export interface ChatResponse {
  message: string;
  error?: string;
}

export interface LLMConfig {
  provider: 'groq' | 'openai' | 'anthropic' | 'custom';
  model: string;
  maxTokens?: number;
  temperature?: number;
}

export interface EmbedConfig {
  theme?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  width?: number;
  height?: number;
}
