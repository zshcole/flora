import { Routes, Route } from 'react-router-dom'
import ChatPage from '../pages/ChatPage'
import AboutPage from '../pages/AboutPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default AppRoutes
