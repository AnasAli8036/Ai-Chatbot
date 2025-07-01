import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Chatbot - Intelligent Conversations',
  description: 'Beautiful AI-powered chatbot with modern UI/UX and easy integration capabilities.',
  keywords: ['AI', 'chatbot', 'artificial intelligence', 'conversation', 'integration'],
  authors: [{ name: 'AI Chatbot Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
  openGraph: {
    title: 'AI Chatbot - Intelligent Conversations',
    description: 'Beautiful AI-powered chatbot with modern UI/UX and easy integration capabilities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot - Intelligent Conversations',
    description: 'Beautiful AI-powered chatbot with modern UI/UX and easy integration capabilities.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
