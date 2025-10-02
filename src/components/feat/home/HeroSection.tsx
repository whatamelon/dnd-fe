import { Sparkles } from 'lucide-react'
import FadeInUp from '@/components/animations/FadeInUp'

export default function HeroSection() {
  return (
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
  )
}
