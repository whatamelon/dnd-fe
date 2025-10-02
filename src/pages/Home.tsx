import { Camera, Zap } from 'lucide-react'
import BackgroundAnimation from '@/components/feat/home/BackgroundAnimation'
import HeroSection from '@/components/feat/home/HeroSection'
import FeatureSection from '@/components/feat/home/FeatureSection'
import ProcessSection from '@/components/feat/home/ProcessSection'
import CTASection from '@/components/feat/home/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 relative overflow-hidden">
      <BackgroundAnimation />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <HeroSection />

        {/* Feature Section 1: 모델 착용샷 & 사용샷 */}
        <FeatureSection
          icon={Camera}
          iconColor="text-blue-600"
          badgeText="완벽한 비주얼 콘텐츠"
          title="모델 착용샷
사용샷까지"
          description="전문 모델이 착용한 듯한 착용샷과
실제 사용 장면을 담은 사용샷을 한 번에"
          delay={0.3}
        />

        {/* Feature Section 2: 썸네일 → 상세페이지 */}
        <FeatureSection
          icon={Zap}
          iconColor="text-yellow-600"
          badgeText="빠른 일괄 처리"
          title="썸네일부터
상세페이지까지"
          description="한 번의 클릭으로 필요한 모든 이미지를
빠르게 생성하고 즉시 사용"
          delay={0.4}
        />

        <ProcessSection />
        <CTASection />
      </div>
    </div>
  )
}
