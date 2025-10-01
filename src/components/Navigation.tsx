import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from './LanguageSwitcher'
import { useAuth } from '@/hooks/useAuth'

export default function Navigation() {
  const location = useLocation()
  const { user, isAuthenticated, logout } = useAuth()

  const navItems = [
    { path: '/about', label: '서비스 소개' },
    { path: '/pricing', label: '요금제' },
    { path: '/samples', label: '미리보기' },
    { path: '/contact', label: '문의하기' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-2 z-50 opacity-90 rounded-lg my-2 mx-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-900">
              AI 착용샷
            </Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name || '사용자'}
                  </span>
                </div>
                <Button variant="outline" size="sm" onClick={() => logout()}>
                  로그아웃
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    로그인
                  </Button>
                </Link>
                <Button size="sm">시작하기</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
