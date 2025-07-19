import { Routes, Route } from 'react-router-dom'
import ChatPage from '../pages/ChatPage'
import AboutPage from '../pages/AboutPage'
import PrivacyPage from '../pages/PrivacyPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}

export default AppRoutes
