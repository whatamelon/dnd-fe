import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Upload,
  Sparkles,
  Camera,
  History,
  CreditCard,
  User,
  ArrowRight,
  Play,
  Zap,
  Star,
  CheckCircle,
  Globe,
  Shield,
} from 'lucide-react'
import FadeInUp from '@/components/animations/FadeInUp'
import ParallaxSection from '@/components/animations/ParallaxSection'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.1,
            top: mousePosition.y * 0.1,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-full blur-3xl"
          style={{
            right: mousePosition.x * 0.05,
            bottom: mousePosition.y * 0.05,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-300/15 to-yellow-300/15 rounded-full blur-3xl"
          style={{
            left: '50%',
            top: '30%',
            transform: 'translateX(-50%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <FadeInUp delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                AI 기술로 혁신적인 패션 경험
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
              AI로 만드는
              <br />
              완벽한 옷 착용샷
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              옷 사진을 업로드하고 분위기, 채도, 장소를 설정하면
              <br />
              <span className="font-semibold text-blue-600">AI가 당신만의 모델 착용샷을 생성</span>
              해드립니다
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                지금 시작하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-white/80 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                샘플 보기
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <FadeInUp delay={0.4}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">생성된 착용샷</div>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.5}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">5K+</div>
                  <div className="text-sm text-gray-600">만족한 사용자</div>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.6}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">99%</div>
                  <div className="text-sm text-gray-600">만족도</div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </FadeInUp>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Feature 1: Multiple Clothes */}
          <FadeInUp delay={0.3}>
            <Card className="p-8 hover:shadow-2xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">다중 옷 착용샷 생성</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  여러 개의 옷을 조합하여 다양한 스타일의 착용샷을 만들어보세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>여러 개의 옷 사진 업로드</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>분위기, 채도, 장소 설정</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>다양한 스타일 조합 결과</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>고품질 AI 생성 이미지</span>
                  </li>
                </ul>
                <Button
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300"
                  size="lg"
                >
                  다중 옷 생성하기
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </FadeInUp>

          {/* Feature 2: Single Clothes */}
          <FadeInUp delay={0.4}>
            <Card className="p-8 hover:shadow-2xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">단일 옷 착용샷 생성</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  하나의 옷으로 빠르고 간편하게 착용샷을 생성해보세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span>하나의 옷 사진 업로드</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span>분위기, 채도, 장소 설정</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span>빠른 처리 속도</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span>간편한 사용법</span>
                  </li>
                </ul>
                <Button
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300"
                  size="lg"
                >
                  단일 옷 생성하기
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </FadeInUp>
        </div>

        {/* Process Section */}
        <div className="pb-[800px]">
          <ParallaxSection speed={0.3}>
            <FadeInUp delay={0.5}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  간단한 3단계로 완성
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  복잡한 과정 없이 몇 번의 클릭만으로 전문가 수준의 착용샷을 생성하세요
                </p>
              </div>
            </FadeInUp>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FadeInUp delay={0.6}>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">옷 사진 업로드</h3>
                  <p className="text-gray-600">원하는 옷의 사진을 업로드하세요</p>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.7}>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">스타일 설정</h3>
                  <p className="text-gray-600">분위기, 채도, 장소를 선택하세요</p>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.8}>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI 생성 완료</h3>
                  <p className="text-gray-600">몇 분 후 완성된 착용샷을 확인하세요</p>
                </div>
              </FadeInUp>
            </div>
          </ParallaxSection>
        </div>

        {/* Additional Features */}
        <div className="py-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInUp delay={0.9}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <History className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">히스토리 관리</CardTitle>
                  <CardDescription className="text-gray-600">
                    생성한 모든 착용샷을 체계적으로 관리하고 다시 확인할 수 있습니다
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeInUp>

            <FadeInUp delay={1.0}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">다양한 요금제</CardTitle>
                  <CardDescription className="text-gray-600">
                    개인용부터 기업용까지 다양한 플랜으로 서비스를 이용할 수 있습니다
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeInUp>

            <FadeInUp delay={1.1}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">마이페이지</CardTitle>
                  <CardDescription className="text-gray-600">
                    개인 설정과 생성 이력을 한눈에 확인하고 관리할 수 있습니다
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeInUp>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-20">
          <FadeInUp delay={1.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-xl text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 group">
                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">빠른 처리</h3>
                <p className="text-sm text-gray-600">2-5분 내 완성</p>
              </Card>
              <Card className="hover:shadow-xl text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 group">
                <Star className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">고품질</h3>
                <p className="text-sm text-gray-600">4K 해상도 지원</p>
              </Card>
              <Card className="hover:shadow-xl text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 group">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">다양한 장소</h3>
                <p className="text-sm text-gray-600">50+ 배경 선택</p>
              </Card>
              <Card className="hover:shadow-xl  text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 group">
                <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">안전한 서비스</h3>
                <p className="text-sm text-gray-600">개인정보 보호</p>
              </Card>
            </div>
          </FadeInUp>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <FadeInUp delay={1.3}>
            <div className="text-center bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">지금 바로 시작해보세요</h2>
              <p className="text-xl mb-8 opacity-90">
                무료로 체험하고 AI의 놀라운 결과를 확인하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  무료로 시작하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                >
                  요금제 보기
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-20px); }
        }
      `}</style>
    </div>
  )
}
