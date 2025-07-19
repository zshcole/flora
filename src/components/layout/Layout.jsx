import Menu from '../menu'
import styles from './layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Menu />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
