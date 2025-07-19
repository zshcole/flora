
import { useNavigate } from 'react-router-dom'
import { TbArrowLeft } from 'react-icons/tb'
import styles from './privacy.module.css'

function Privacy() {
const navigate = useNavigate()
  return (
    <div className={styles.privacy}>
    <button className={styles.backButton} onClick={() => navigate('/')}>
    <TbArrowLeft size={20} />
    Back to Chat
    </button>
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Privacy Policy</h1>
      <p className={styles.heroDescription}>
        This is a placeholder for the privacy policy. In the future, this page
        will contain detailed information about how user data is collected,
        used, and protected on the Flora platform.
      </p>
    </section>
    </div>
  )
}

export default Privacy
