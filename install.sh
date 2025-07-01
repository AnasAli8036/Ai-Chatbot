#!/bin/bash

echo "🚀 Setting up AI Chatbot..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔧 Setting up environment..."
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "⚠️  Please add your GROQ_API_KEY to .env.local"
fi

echo "✅ Setup complete!"
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "To get your Groq API key:"
echo "  1. Visit https://console.groq.com/"
echo "  2. Sign up for a free account"
echo "  3. Create an API key"
echo "  4. Add it to .env.local"
