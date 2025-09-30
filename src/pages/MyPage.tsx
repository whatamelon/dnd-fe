import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import {
  User,
  Settings,
  History,
  Download,
  Trash2,
  Search,
  Filter,
  Calendar,
  Image as ImageIcon,
  Star,
  Share2,
} from 'lucide-react'

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [searchTerm, setSearchTerm] = useState('')
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout(
      {},
      {
        onSuccess: () => {
          navigate('/login')
        },
      }
    )
  }

  // 샘플 히스토리 데이터
  const historyData = [
    {
      id: 1,
      title: '캐주얼 스타일 착용샷',
      type: '다중 옷',
      date: '2024-01-15',
      images: ['/api/placeholder/300/400', '/api/placeholder/300/400'],
      settings: {
        mood: '캐주얼',
        saturation: '보통',
        location: '카페',
      },
      isFavorite: true,
    },
    {
      id: 2,
      title: '포멀 드레스 착용샷',
      type: '단일 옷',
      date: '2024-01-14',
      images: ['/api/placeholder/300/400'],
      settings: {
        mood: '포멀',
        saturation: '높음',
        location: '오피스',
      },
      isFavorite: false,
    },
    {
      id: 3,
      title: '스포티웨어 착용샷',
      type: '다중 옷',
      date: '2024-01-13',
      images: ['/api/placeholder/300/400', '/api/placeholder/300/400', '/api/placeholder/300/400'],
      settings: {
        mood: '스포티',
        saturation: '낮음',
        location: '헬스장',
      },
      isFavorite: true,
    },
    {
      id: 4,
      title: '데이트룩 착용샷',
      type: '단일 옷',
      date: '2024-01-12',
      images: ['/api/placeholder/300/400'],
      settings: {
        mood: '로맨틱',
        saturation: '보통',
        location: '레스토랑',
      },
      isFavorite: false,
    },
  ]

  const filteredHistory = historyData.filter(
    item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.settings.mood.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const tabs = [
    { id: 'profile', label: '프로필', icon: <User className="w-4 h-4" /> },
    { id: 'history', label: '히스토리', icon: <History className="w-4 h-4" /> },
    { id: 'settings', label: '설정', icon: <Settings className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">마이페이지</h1>
            <p className="text-gray-600">개인 설정과 생성 이력을 관리하세요</p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle>{user?.name || '사용자님'}</CardTitle>
                    <CardDescription>프로 플랜 사용자</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">87</div>
                      <div className="text-sm text-gray-600">생성한 착용샷</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">12</div>
                      <div className="text-sm text-gray-600">즐겨찾기</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">5</div>
                      <div className="text-sm text-gray-600">이번 달 생성</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>계정 정보</CardTitle>
                    <CardDescription>개인 정보를 확인하고 수정할 수 있습니다</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                        <Input defaultValue="사용자" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          이메일
                        </label>
                        <Input defaultValue={user?.email || 'user@example.com'} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        현재 플랜
                      </label>
                      <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                        <div>
                          <div className="font-semibold">프로 플랜</div>
                          <div className="text-sm text-gray-600">월 100회 생성 가능</div>
                        </div>
                        <Button variant="outline" size="sm">
                          플랜 변경
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button>정보 저장</Button>
                      <Button variant="outline">비밀번호 변경</Button>
                      <Button variant="destructive" onClick={handleLogout}>
                        로그아웃
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div>
              {/* Search and Filter */}
              <Card className="p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="착용샷 검색..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    필터
                  </Button>
                </div>
              </Card>

              {/* History Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHistory.map(item => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-1 h-48">
                        {item.images.map((image, index) => (
                          <div key={index} className="bg-gray-200 flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-gray-400" />
                          </div>
                        ))}
                      </div>
                      {item.isFavorite && (
                        <div className="absolute top-2 right-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        </div>
                      )}
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {item.type}
                        </span>
                      </div>

                      <div className="space-y-1 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </div>
                        <div>분위기: {item.settings.mood}</div>
                        <div>채도: {item.settings.saturation}</div>
                        <div>장소: {item.settings.location}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="w-3 h-3 mr-1" />
                          다운로드
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredHistory.length === 0 && (
                <Card className="p-12 text-center">
                  <History className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
                  <p className="text-gray-600">다른 검색어를 시도해보세요</p>
                </Card>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>알림 설정</CardTitle>
                  <CardDescription>받고 싶은 알림을 선택하세요</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>이메일 알림</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>생성 완료 알림</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>플랜 만료 알림</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>마케팅 이메일</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>계정 설정</CardTitle>
                  <CardDescription>계정 관련 설정을 관리하세요</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    비밀번호 변경
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    이메일 변경
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    계정 삭제
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    데이터 내보내기
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
