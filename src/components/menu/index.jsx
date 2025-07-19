import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LuUser,
  LuSun,
  LuMoon,
  LuMonitor,
  LuInfo,
  LuFileText,
  LuShield,
  LuGithub,
  LuInstagram,
  LuTriangle,
  LuBug,
  LuLogIn,
  LuMenu,
  LuX
} from 'react-icons/lu'
import { FaXTwitter } from 'react-icons/fa6'
import styles from './menu.module.css'

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('system')
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    // Add theme logic here
  }

  const handleNavigation = (path) => {
    navigate(path)
    setIsOpen(false) // Close menu after navigation
  }

  return (
    <>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <LuMenu size={24} />
      </button>

      {isOpen && (
        <>
          <div className={styles.overlay} onClick={toggleMenu} />
          <div className={styles.menu}>
            <div className={styles.header}>
              <button className={styles.closeButton} onClick={toggleMenu}>
                <LuX size={20} />
              </button>
            </div>

            <div className={styles.userSection}>
              <LuUser className={styles.userIcon} size={24} />
              <div>
                <div className={styles.userName}>Guest</div>
                <div className={styles.userSubtext}>Sign in to save your progress</div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.menuItem}>
                <LuSun className={styles.icon} size={20} />
                <span>Theme</span>
                <div className={styles.themeToggle}>
                  <button 
                    className={`${styles.themeButton} ${theme === 'light' ? styles.active : ''}`}
                    onClick={() => handleThemeChange('light')}
                  >
                    <LuSun size={16} />
                  </button>
                  <button 
                    className={`${styles.themeButton} ${theme === 'system' ? styles.active : ''}`}
                    onClick={() => handleThemeChange('system')}
                  >
                    <LuMonitor size={16} />
                  </button>
                  <button 
                    className={`${styles.themeButton} ${theme === 'dark' ? styles.active : ''}`}
                    onClick={() => handleThemeChange('dark')}
                  >
                    <LuMoon size={16} />
                  </button>
                </div>
              </div>

              <div className={styles.menuItem} onClick={() => handleNavigation('/about')}>
                <LuInfo className={styles.icon} size={20} />
                <span>About</span>
              </div>

              <div className={styles.menuItem}>
                <LuFileText className={styles.icon} size={20} />
                <span>Terms</span>
              </div>

              <div className={styles.menuItem} onClick={() => handleNavigation('/privacy')}>
                <LuShield className={styles.icon} size={20} />
                <span>Privacy</span>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.menuItem}>
                <LuGithub className={styles.icon} size={20} />
                <span>Github</span>
              </div>

              <div className={styles.menuItem}>
                <FaXTwitter className={styles.icon} size={20} />
                <span>X.com</span>
              </div>

              <div className={styles.menuItem}>
                <LuInstagram className={styles.icon} size={20} />
                <span>Instagram</span>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.menuItem}>
                <LuTriangle className={styles.icon} size={20} />
                <span>Deploy with Vercel</span>
              </div>

              <div className={styles.menuItem}>
                <LuBug className={styles.icon} size={20} />
                <span>Feature/Bug Request</span>
              </div>
            </div>

            <div className={styles.signInSection}>
              <div className={styles.signInItem}>
                <span>Sign In</span>
                <LuLogIn className={styles.icon} size={20} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Menu
