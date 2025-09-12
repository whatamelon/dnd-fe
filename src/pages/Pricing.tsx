import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star, Zap, Crown, Building2 } from 'lucide-react'

export default function Pricing() {
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
      icon: <Star className="w-8 h-8 text-purple-500" />,
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
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
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
      icon: <Building2 className="w-8 h-8 text-indigo-500" />,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">요금제 선택</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            개인 사용자부터 기업까지, 다양한 요구사항에 맞는 플랜을 제공합니다.
            <br />
            언제든지 플랜을 변경하거나 취소할 수 있습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map(plan => (
            <Card
              key={plan.name}
              className={`relative p-8 ${
                plan.popular
                  ? 'border-2 border-purple-500 shadow-xl scale-105'
                  : 'hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
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

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">자주 묻는 질문</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">플랜을 언제든지 변경할 수 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음
                  결제 주기부터 적용됩니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">무료 체험 기간이 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  베이직 플랜은 무료로 이용할 수 있으며, 프로 플랜은 7일 무료 체험을 제공합니다.
                  신용카드 등록 없이 바로 시작할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">생성한 이미지의 저작권은 어떻게 되나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  생성한 모든 이미지의 저작권은 사용자에게 있습니다. 상업적 용도로도 자유롭게 사용할
                  수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">환불 정책은 어떻게 되나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  구독 후 30일 이내에는 100% 환불을 보장합니다. 언제든지 고객 지원팀에 문의해
                  주세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8">
            <CardHeader>
              <CardTitle className="text-2xl">더 궁금한 점이 있으신가요?</CardTitle>
              <CardDescription className="text-lg">
                요금제에 대한 자세한 문의사항이 있으시면 언제든지 연락해 주세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="outline">
                  고객 지원 문의
                </Button>
                <Button size="lg">라이브 채팅</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
