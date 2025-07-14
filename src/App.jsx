import { useState } from 'react'
import { TbCannabis } from 'react-icons/tb'
import { GoogleGenAI } from "@google/genai";

import ChatComponent from './components/chat'
import Controls from './components/controls'
import Menu from './components/menu'
import styles from './App.module.css'

const genAI = new GoogleGenAI( { apiKey: import.meta.env.VITE_GEMINI_API_KEY})
const chat = genAI.chats.create({ model: 'gemini-2.0-flash', history: [] });

function App() {
  const [messages, setMessages] = useState([])

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }
  
  async function handleSendMessage(content) {
      addMessage({ content, role: 'user' })
    try {
      const result = await chat.sendMessage({
        message: content
      })

      addMessage({ content: result.text, role: 'assistant' })
    } catch (error) {
      console.error('Error generating response:', error)
      setMessages((prevMessages) => [...prevMessages, {
        role: 'assistant',
        content: 'Sorry, I encountered an error while processing your request. Please try again.'
      }])
    }
  }

  return (
    <div className={styles.app}>
      <Menu />

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

export default App
