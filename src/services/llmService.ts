import { LLMConfig, Message } from '@/types/chat';

export class LLMService {
  private config: LLMConfig;

  constructor(config: LLMConfig) {
    this.config = config;
  }

  async generateResponse(messages: Message[]): Promise<string> {
    switch (this.config.provider) {
      case 'groq':
        return this.callGroq(messages);
      case 'openai':
        return this.callOpenAI(messages);
      case 'anthropic':
        return this.callAnthropic(messages);
      default:
        throw new Error(`Unsupported LLM provider: ${this.config.provider}`);
    }
  }

  private async callGroq(messages: Message[]): Promise<string> {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error('GROQ_API_KEY is not configured');
    }

    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.config.model || 'llama3-8b-8192',
        messages: formattedMessages,
        max_tokens: this.config.maxTokens || 1024,
        temperature: this.config.temperature || 0.7,
        stream: false,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Groq API error: ${error}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  }

  private async callOpenAI(messages: Message[]): Promise<string> {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.config.model || 'gpt-3.5-turbo',
        messages: formattedMessages,
        max_tokens: this.config.maxTokens || 1024,
        temperature: this.config.temperature || 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenAI API error: ${error}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  }

  private async callAnthropic(messages: Message[]): Promise<string> {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY is not configured');
    }

    // Convert messages to Anthropic format
    const systemMessage = messages.find(m => m.role === 'assistant')?.content || '';
    const userMessages = messages.filter(m => m.role === 'user');
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: this.config.model || 'claude-3-sonnet-20240229',
        max_tokens: this.config.maxTokens || 1024,
        messages: userMessages.map(msg => ({
          role: 'user',
          content: msg.content
        })),
        system: systemMessage,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Anthropic API error: ${error}`);
    }

    const data = await response.json();
    return data.content[0]?.text || 'Sorry, I could not generate a response.';
  }

  updateConfig(newConfig: Partial<LLMConfig>) {
    this.config = { ...this.config, ...newConfig };
  }
}

// Default configuration using Groq (free tier)
export const defaultLLMConfig: LLMConfig = {
  provider: 'groq',
  model: 'llama3-8b-8192', // Fast and free model
  maxTokens: 1024,
  temperature: 0.7,
};

export const llmService = new LLMService(defaultLLMConfig);
