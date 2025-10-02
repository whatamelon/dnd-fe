import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Pricing from '@/pages/Pricing'
import MyPage from '@/pages/MyPage'
import Contact from '@/pages/Contact'
import ZonePage from '@/pages/Zone'
import Login from '@/pages/Login'
import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { Session } from '@supabase/supabase-js'

function App() {
  const { isAuthenticated, isLoading } = useAuth()
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session ?? null))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s ?? null))
    return () => sub.subscription.unsubscribe()
  }, [])

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* 인증 상태에 따른 조건부 라우팅 */}
          <Route path="/zone" element={<ZonePage />} />
          <Route path="/mypage" element={isAuthenticated || session ? <MyPage /> : <Login />} />
          <Route path="/login" element={isAuthenticated || session ? <MyPage /> : <Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
