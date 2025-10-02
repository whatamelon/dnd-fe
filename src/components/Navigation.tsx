import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from './LanguageSwitcher'
import { useAuth } from '@/hooks/useAuth'
import logo from '@/assets/logo/logo_light.png'
import { Sparkles, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  variant?: 'default' | 'transparent' | 'minimal'
  className?: string
}

export default function Navigation({ variant = 'default', className = '' }: NavigationProps) {
  const location = useLocation()
  const { user, isAuthenticated, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/about', label: '서비스 소개' },
    { path: '/pricing', label: '요금제' },
    { path: '/samples', label: '미리보기' },
    { path: '/contact', label: '문의하기' },
  ]

  const getNavStyles = () => {
    switch (variant) {
      case 'transparent':
        return 'bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50'
      case 'minimal':
        return 'bg-white shadow-sm border-b sticky top-0 z-50'
      default:
        return 'bg-white shadow-sm border-b sticky top-2 z-50 opacity-90 rounded-lg my-2 mx-2'
    }
  }

  return (
    <nav className={`${getNavStyles()} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="AI 착용샷" className="h-4" />
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
                <div className="hidden md:flex items-center space-x-2">
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
                <Link to="/login" className="hidden md:block">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white px-8 py-4 text-sm font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    지금 시작하기
                  </Button>
                </Link>
              </>
            )}

            {/* 모바일 메뉴 버튼 */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {!isAuthenticated && (
                <Link to="/login" className="block">
                  <Button
                    size="sm"
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    지금 시작하기
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
