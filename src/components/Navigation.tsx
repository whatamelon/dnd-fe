import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/about', label: '서비스 소개' },
    { path: '/pricing', label: '요금제' },
    { path: '/mypage', label: '마이페이지' },
    { path: '/contact', label: '문의하기' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
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
                      ? 'bg-blue-100 text-blue-700'
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
            <Button variant="outline" size="sm">
              로그인
            </Button>
            <Button size="sm">시작하기</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
