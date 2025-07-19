import { useState } from 'react'
import { TbCannabis } from 'react-icons/tb'
import { GoogleGenAI } from "@google/genai"

import ChatComponent from '../components/chat'
import Controls from '../components/controls'
import styles from './chatPage.module.css'

const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })
const chat = genAI.chats.create({ model: 'gemini-2.0-flash', history: [] })

function ChatPage() {
  const [messages, setMessages] = useState([])

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  function formatResponse(text) {
    return text
      // Remove excessive asterisks and clean up formatting
      .replace(/\*\*\*+/g, '**')
      .replace(/\*\s*\*\*/g, '**')
      // Fix spacing around bold text
      .replace(/\*\*([^*]+)\*\*/g, '**$1**')
      // Add proper line breaks before section headers
      .replace(/\*\*([^*]+):\*\*/g, '\n\n**$1:**')
      // Clean up multiple spaces and line breaks
      .replace(/\s+/g, ' ')
      .replace(/\n\s+/g, '\n')
      // Add line breaks after sentences for better readability
      .replace(/\.\s+/g, '.\n\n')
      // Clean up any remaining formatting issues
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  }

  async function handleSendMessage(content) {
    addMessage({ content, role: 'user' })
    try {
      const result = await chat.sendMessage({
        message: content
      })
      const formattedText = formatResponse(result.text)
      addMessage({ content: formattedText, role: 'assistant' })
    } catch (error) {
      console.error('Error generating response:', error)
      setMessages((prevMessages) => [...prevMessages, {
        role: 'assistant',
        content: 'Sorry, I encountered an error while processing your request. Please try again.'
      }])
    }
  }

  return (
    <div className={styles.chatPage}>
      <header className={styles.header}>
        <TbCannabis
          className={styles.logo}
          size={40}
          strokeWidth={1}
        />
        <h1 className={styles.title}>flora</h1>
        <TbCannabis
          className={styles.logo}
          size={40}
          strokeWidth={1}
        />
      </header>

      <main className={styles.chatContainer}>
        <ChatComponent messages={messages} />
      </main>

      <Controls onSendMessage={handleSendMessage} />
    </div>
  )
}

export default ChatPage
