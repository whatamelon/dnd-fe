import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star, Zap, Crown, Building2 } from 'lucide-react'

export default function PricingCards() {
  const plans = [
    {
      name: '베이직',
      price: '무료',
      period: '월',
      description: '개인 사용자를 위한 기본 플랜',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      features: [
        '월 5회 착용샷 생성',
        '단일 옷 착용샷만 가능',
        '기본 분위기 설정',
        '표준 해상도 (1024x1024)',
        '7일간 히스토리 보관',
        '이메일 지원',
      ],
      buttonText: '무료로 시작하기',
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: '프로',
      price: '29,000',
      period: '월',
      description: '개인 크리에이터를 위한 인기 플랜',
      icon: <Star className="w-8 h-8 text-blue-500" />,
      features: [
        '월 100회 착용샷 생성',
        '다중/단일 옷 착용샷 모두 가능',
        '모든 분위기 및 장소 설정',
        '고해상도 (2048x2048)',
        '30일간 히스토리 보관',
        '우선 처리 속도',
        '우선 고객 지원',
        '개인 설정 저장',
      ],
      buttonText: '프로 플랜 시작하기',
      buttonVariant: 'default' as const,
      popular: true,
    },
    {
      name: '비즈니스',
      price: '99,000',
      period: '월',
      description: '기업 및 브랜드를 위한 플랜',
      icon: <Crown className="w-8 h-8 text-yellow-600" />,
      features: [
        '무제한 착용샷 생성',
        '다중/단일 옷 착용샷 모두 가능',
        '모든 분위기 및 장소 설정',
        '최고 해상도 (4096x4096)',
        '무제한 히스토리 보관',
        '최우선 처리 속도',
        '전담 고객 지원',
        '팀 협업 기능',
        'API 접근 권한',
        '커스텀 브랜딩',
        '고급 분석 도구',
      ],
      buttonText: '비즈니스 플랜 시작하기',
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Enterprise',
      price: '문의',
      period: '',
      description: '대기업을 위한 맞춤형 솔루션',
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      features: [
        '무제한 착용샷 생성',
        '다중/단일 옷 착용샷 모두 가능',
        '모든 분위기 및 장소 설정',
        '최고 해상도 (4096x4096)',
        '무제한 히스토리 보관',
        '최우선 처리 속도',
        '전담 고객 지원',
        '팀 협업 기능',
        'API 접근 권한',
        '커스텀 브랜딩',
        '고급 분석 도구',
        '온프레미스 배포 옵션',
        'SLA 보장',
        '전용 인프라',
        '커스텀 통합',
        '전문 컨설팅',
      ],
      buttonText: 'contact@dnd.com으로 문의',
      buttonVariant: 'outline' as const,
      popular: false,
    },
  ]

  return (
    <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
      {plans.map(plan => (
        <Card
          key={plan.name}
          className={`relative p-8 ${
            plan.popular
              ? 'border-2 border-blue-500 shadow-xl scale-105'
              : 'hover:shadow-lg transition-shadow'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                가장 인기
              </span>
            </div>
          )}

          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">{plan.icon}</div>
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <CardDescription className="text-lg">{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price === '무료'
                  ? plan.price
                  : plan.price === '문의'
                    ? plan.price
                    : `₩${plan.price}`}
              </span>
              {plan.price !== '무료' && plan.price !== '문의' && (
                <span className="text-gray-600">/{plan.period}</span>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              size="lg"
              variant={plan.buttonVariant}
              onClick={() => {
                if (plan.name === 'Enterprise') {
                  window.location.href = 'mailto:contact@dnd.com?subject=Enterprise 플랜 문의'
                }
              }}
            >
              {plan.buttonText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
