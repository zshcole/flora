import { useState } from 'react'
import { 
  LuRabbit
} from 'react-icons/lu'

import Chat from './components/chat'
import Controls from './components/controls'
import Menu from './components/menu'
import styles from './App.module.css'

function App() {
  const [messages, setMessages] = useState([])

  function handleSendMessage(content) {
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content }])
  }

  return (
    <div className={styles.app}>
      <Menu />

      <header className={styles.header}>
        <LuRabbit
          className={styles.logo}
          size={40}
          strokeWidth={1}
        />
        <h1 className={styles.title}>flora.</h1>
      </header>

      <main className={styles.chatContainer}>
        <Chat messages={messages} />
      </main>

      <Controls onSendMessage={handleSendMessage} />
    </div>
  )
}

export default App
