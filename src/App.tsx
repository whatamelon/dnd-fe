import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Pricing from '@/pages/Pricing'
import MyPage from '@/pages/MyPage'
import Contact from '@/pages/Contact'
import Login from '@/pages/Login'
import { useAuth } from '@/hooks/useAuth'

function App() {
  const { isAuthenticated, isLoading } = useAuth()

  // 로딩 중일 때 스피너 표시
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* 인증 상태에 따른 조건부 라우팅 */}
          <Route path="/mypage" element={isAuthenticated ? <MyPage /> : <Login />} />
          <Route path="/login" element={isAuthenticated ? <MyPage /> : <Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
