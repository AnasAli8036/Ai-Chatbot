# AI Chatbot 🤖

A beautiful, modern AI chatbot with elegant UI/UX, smooth animations, and easy integration capabilities. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Beautiful UI/UX**: Modern design with smooth animations and elegant colors
- **Multiple LLM Support**: Easy switching between Groq, OpenAI, Anthropic, and custom providers
- **Fast & Free**: Uses Groq API for lightning-fast responses with generous free tier
- **Easy Integration**: Embeddable widget for any website
- **Responsive Design**: Works perfectly on desktop and mobile
- **TypeScript**: Full type safety and excellent developer experience
- **Real-time Chat**: Instant responses with typing indicators
- **Modular Architecture**: Easy to customize and extend

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Add your Groq API key to `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 3. Get Your Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key to your `.env.local` file

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your chatbot!

## 🔧 Configuration

### Switching LLM Providers

The chatbot supports multiple LLM providers. Edit `src/services/llmService.ts` to change the default configuration:

```typescript
export const defaultLLMConfig: LLMConfig = {
  provider: 'groq', // 'groq' | 'openai' | 'anthropic'
  model: 'llama3-8b-8192',
  maxTokens: 1024,
  temperature: 0.7,
};
```

### Supported Models

**Groq (Free & Fast):**
- `llama3-8b-8192` - Fast and efficient
- `llama3-70b-8192` - More capable but slower
- `mixtral-8x7b-32768` - Good balance of speed and quality

**OpenAI:**
- `gpt-3.5-turbo` - Fast and cost-effective
- `gpt-4` - Most capable

**Anthropic:**
- `claude-3-sonnet-20240229` - Balanced performance
- `claude-3-opus-20240229` - Most capable

## 🌐 Integration

### Embed in Any Website

Add this iframe to any website:

```html
<iframe 
  src="https://your-domain.com/embed" 
  width="400" 
  height="600"
  frameborder="0">
</iframe>
```

### API Usage

Send POST requests to `/api/chat`:

```javascript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'Hello!' }
    ]
  })
});

const data = await response.json();
console.log(data.message);
```

## 🎨 Customization

### Colors & Themes

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

### Animations

Customize animations in `src/components/` files using Framer Motion.

## 📱 Responsive Design

The chatbot is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Embedded iframes

## 🔒 Security

- API keys are stored securely in environment variables
- CORS is properly configured for embedded usage
- Input validation and error handling
- Rate limiting considerations

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🛠️ Development

### Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── api/chat/       # Chat API endpoint
│   ├── embed/          # Embeddable widget
│   └── page.tsx        # Main page
├── components/         # React components
├── services/           # LLM service layer
├── types/              # TypeScript types
└── lib/                # Utility functions
```

### Adding New LLM Providers

1. Add provider type to `src/types/chat.ts`
2. Implement provider method in `src/services/llmService.ts`
3. Add environment variables for API keys

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🆘 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify your API keys are correct
3. Ensure your environment variables are set
4. Check the GitHub issues for similar problems

## 🎯 Roadmap

- [ ] Voice input/output
- [ ] File upload support
- [ ] Chat history persistence
- [ ] User authentication
- [ ] Custom model fine-tuning
- [ ] Analytics dashboard
- [ ] Multi-language support

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
