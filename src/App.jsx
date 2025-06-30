import styles from './App.module.css'
import { LuCat } from 'react-icons/lu'

function App() {

  return (

    <div className={styles.app}>
      <header className={styles.header}>
      <LuCat className={styles.logo} size={40} strokeWidth={2.75} />
        <h1 className={styles.title}>flora</h1>
      </header>
      <div className={styles.chatContainer}/>
    </div>
  )
}

export default App
