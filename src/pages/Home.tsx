import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles, Camera, Zap } from 'lucide-react'
import FadeInUp from '@/components/animations/FadeInUp'
import ParallaxSection from '@/components/animations/ParallaxSection'
import { Link } from 'react-router-dom'

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
              <span className="text-sm font-medium text-gray-700">새로운 커머스와의 조우</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
              완벽한 모델 착용샷
              <br />
              경험 그 이상의 경험
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              옷 사진을 업로드하고 분위기, 채도, 장소를 설정하면
              <br />
              <span className="font-semibold text-blue-600">AI가 당신만의 모델 착용샷을 생성</span>
              해드립니다
            </p>
          </div>
        </FadeInUp>

        {/* Feature Section 1: 모델 착용샷 & 사용샷 */}
        <FadeInUp delay={0.3}>
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Camera className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">완벽한 비주얼 콘텐츠</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
              모델 착용샷
              <br />
              사용샷까지
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              전문 모델이 착용한 듯한 착용샷과
              <br />
              <span className="font-semibold text-blue-600">
                실제 사용 장면을 담은 사용샷을 한 번에
              </span>
            </p>
          </div>
        </FadeInUp>

        {/* Feature Section 2: 썸네일 → 상세페이지 */}
        <FadeInUp delay={0.4}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Zap className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-gray-700">빠른 일괄 처리</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
              썸네일부터
              <br />
              상세페이지까지
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              한 번의 클릭으로 필요한 모든 이미지를
              <br />
              <span className="font-semibold text-blue-600">빠르게 생성하고 즉시 사용</span>
            </p>
          </div>
        </FadeInUp>

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
        {/* <div className="py-4">
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
        </div> */}

        {/* Features Grid */}
        {/* <div className="py-20">
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
        </div> */}

        {/* CTA Section */}
        <div className="py-20">
          <FadeInUp delay={1.3}>
            <div className="text-center bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">지금 바로 시작해보세요</h2>
              <p className="text-xl mb-8 opacity-90">
                무료로 체험하고 AI의 놀라운 결과를 확인하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white px-8 py-4 text-md font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    지금 시작하기
                  </Button>
                </Link>
                <Link to="/samples">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white/10 px-8 py-4 text-md font-semibold"
                  >
                    미리 보기
                  </Button>
                </Link>
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
