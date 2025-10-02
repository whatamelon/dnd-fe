import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Camera, Palette, MapPin, Zap, Shield, Globe } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
      <Navigation variant="minimal" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">AI 옷 착용샷 생성 서비스</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 AI 기술을 활용하여 옷 사진을 업로드하고 원하는 분위기와 장소에서의 모델 착용샷을
              생성하는 혁신적인 서비스입니다.
            </p>
          </div>

          {/* 서비스 소개 */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-blue-500" />
                  서비스 개요
                </CardTitle>
                <CardDescription className="text-lg">
                  AI 기술로 만드는 완벽한 옷 착용샷
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  우리 서비스는 최신 AI 기술을 활용하여 옷 사진을 업로드하고 원하는 분위기, 채도,
                  장소를 설정하면 현실적인 모델 착용샷을 생성해드립니다.
                </p>
                <p className="text-gray-600">
                  개인 사용자부터 패션 브랜드, 온라인 쇼핑몰까지 다양한 분야에서 활용할 수 있는
                  혁신적인 솔루션을 제공합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Camera className="w-8 h-8 text-yellow-500" />
                  핵심 기능
                </CardTitle>
                <CardDescription className="text-lg">
                  강력하고 직관적인 AI 생성 기능
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>다중/단일 옷 착용샷 생성</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>분위기, 채도, 장소 커스터마이징</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>고품질 AI 생성 이미지</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span>빠른 처리 속도</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>히스토리 관리 및 저장</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 기술적 특징 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardHeader>
                <Palette className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>다양한 설정 옵션</CardTitle>
                <CardDescription>분위기, 채도, 장소 등 세밀한 커스터마이징</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  원하는 분위기(캐주얼, 포멀, 스포티 등), 채도 조절, 다양한 장소 배경을 선택하여
                  완벽한 착용샷을 만들 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>빠른 처리 속도</CardTitle>
                <CardDescription>고성능 AI 모델로 빠른 결과물 제공</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  최신 AI 기술을 활용하여 몇 분 내에 고품질의 착용샷을 생성합니다. 대기 시간을
                  최소화했습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>안전한 서비스</CardTitle>
                <CardDescription>개인정보 보호 및 데이터 보안</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  업로드된 이미지는 안전하게 처리되며, 개인정보 보호를 위해 엄격한 보안 정책을
                  적용하고 있습니다.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 사용 사례 */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-500" />
                활용 분야
              </CardTitle>
              <CardDescription className="text-lg">
                다양한 분야에서 활용 가능한 AI 착용샷 생성 서비스
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👕</span>
                  </div>
                  <h3 className="font-semibold mb-2">온라인 쇼핑몰</h3>
                  <p className="text-sm text-gray-600">상품 이미지로 모델 착용샷 생성</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <h3 className="font-semibold mb-2">패션 브랜드</h3>
                  <p className="text-sm text-gray-600">신상품 런칭 시 마케팅 이미지 제작</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-semibold mb-2">개인 사용자</h3>
                  <p className="text-sm text-gray-600">개인 옷장의 옷들로 착용샷 미리보기</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📸</span>
                  </div>
                  <h3 className="font-semibold mb-2">콘텐츠 제작</h3>
                  <p className="text-sm text-gray-600">SNS, 블로그용 패션 콘텐츠 제작</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 기술 스택 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">기술 스택</CardTitle>
              <CardDescription>현대적인 웹 기술로 구축된 안정적인 서비스</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">프론트엔드</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      React 19 + TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Tailwind CSS v4
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      Shadcn/ui
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      React Router
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">개발 도구</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Vite (빌드 도구)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      pnpm (패키지 매니저)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      ESLint + Prettier
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      React i18next
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
