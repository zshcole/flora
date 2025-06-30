import { useState } from 'react'
import styles from './App.module.css'
import { LuCat } from 'react-icons/lu'
import Chat from './components/chat/index'
import Controls from './components/controls/index'
import { MESSAGES } from './constants'

function App() {
  const [messages, setMessages] = useState([])
  return (

    <div className={styles.app}>
      <header className={styles.header}>
      <LuCat className={styles.logo} size={40} strokeWidth={2.75} />
        <h1 className={styles.title}>flora</h1>
      </header>
      <div className={styles.chatContainer}>
        <Chat messages={messages}/>
      </div>
      <Controls />
    </div>
  )
}

export default App
