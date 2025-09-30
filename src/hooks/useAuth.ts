import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

interface LoginCredentials {
  email: string
  password: string
}

interface GoogleLoginResponse {
  user: User
  token: string
}

// 임시 사용자 데이터 (실제로는 API에서 가져옴)
const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  name: '사용자',
  avatar: 'https://via.placeholder.com/40',
}

// API 함수들 (실제로는 백엔드 API 호출)
const authAPI = {
  // 현재 사용자 정보 가져오기
  getCurrentUser: async (): Promise<User | null> => {
    // 임시로 localStorage에서 토큰 확인
    const token = localStorage.getItem('auth_token')
    if (!token) return null
    // 실제로는 API 호출로 사용자 정보 확인
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockUser
  },

  // 이메일 로그인
  loginWithEmail: async (credentials: LoginCredentials): Promise<GoogleLoginResponse> => {
    // 실제로는 API 호출
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (credentials.email === 'test@test.com' && credentials.password === 'password') {
      const token = 'mock_jwt_token_' + Date.now()
      localStorage.setItem('auth_token', token)
      return {
        user: mockUser,
        token,
      }
    } else {
      throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.')
    }
  },

  // 구글 로그인
  loginWithGoogle: async (): Promise<GoogleLoginResponse> => {
    // 실제로는 Google OAuth 플로우
    await new Promise(resolve => setTimeout(resolve, 1000))

    const token = 'mock_google_token_' + Date.now()
    localStorage.setItem('auth_token', token)
    return {
      user: mockUser,
      token,
    }
  },

  // 로그아웃
  logout: async (): Promise<void> => {
    // 실제로는 API 호출로 토큰 무효화
    await new Promise(resolve => setTimeout(resolve, 500))
    localStorage.removeItem('auth_token')
  },
}

export const useAuth = () => {
  const queryClient = useQueryClient()

  // 현재 사용자 정보 쿼리
  const {
    data: user,
    isLoading: isUserLoading,
    error,
  } = useQuery({
    queryKey: ['auth', 'user'],
    queryFn: authAPI.getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5분
  })

  // 로그인 뮤테이션
  const loginMutation = useMutation({
    mutationFn: authAPI.loginWithEmail,
    onSuccess: data => {
      queryClient.setQueryData(['auth', 'user'], data.user)
    },
    onError: error => {
      console.error('로그인 실패:', error)
    },
  })

  // 구글 로그인 뮤테이션
  const googleLoginMutation = useMutation({
    mutationFn: authAPI.loginWithGoogle,
    onSuccess: data => {
      queryClient.setQueryData(['auth', 'user'], data.user)
    },
    onError: error => {
      console.error('구글 로그인 실패:', error)
    },
  })

  // 로그아웃 뮤테이션
  const logoutMutation = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      queryClient.setQueryData(['auth', 'user'], null)
      queryClient.clear() // 모든 쿼리 캐시 클리어
    },
  })

  return {
    user,
    isAuthenticated: !!user,
    isLoading: isUserLoading,
    error,
    login: loginMutation.mutate,
    loginWithGoogle: googleLoginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginLoading: loginMutation.isPending || googleLoginMutation.isPending,
    loginError: loginMutation.error || googleLoginMutation.error,
  }
}
