import FadeInUp from '@/components/animations/FadeInUp'
import ParallaxSection from '@/components/animations/ParallaxSection'

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: '옷 사진 업로드',
      description: '원하는 옷의 사진을 업로드하세요',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      title: '스타일 설정',
      description: '분위기, 채도, 장소를 선택하세요',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      number: 3,
      title: 'AI 생성 완료',
      description: '몇 분 후 완성된 착용샷을 확인하세요',
      gradient: 'from-blue-600 to-blue-700',
    },
  ]

  return (
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
          {steps.map((step, index) => (
            <FadeInUp key={step.number} delay={0.6 + index * 0.1}>
              <div className="text-center group">
                <div
                  className={`w-24 h-24 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </ParallaxSection>
    </div>
  )
}
