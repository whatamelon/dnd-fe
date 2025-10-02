import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PricingFAQ() {
  const faqs = [
    {
      question: '플랜을 언제든지 변경할 수 있나요?',
      answer:
        '네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음 결제 주기부터 적용됩니다.',
    },
    {
      question: '무료 체험 기간이 있나요?',
      answer:
        '베이직 플랜은 무료로 이용할 수 있으며, 프로 플랜은 7일 무료 체험을 제공합니다. 신용카드 등록 없이 바로 시작할 수 있습니다.',
    },
    {
      question: '생성한 이미지의 저작권은 어떻게 되나요?',
      answer:
        '생성한 모든 이미지의 저작권은 사용자에게 있습니다. 상업적 용도로도 자유롭게 사용할 수 있습니다.',
    },
    {
      question: '환불 정책은 어떻게 되나요?',
      answer: '구독 후 30일 이내에는 100% 환불을 보장합니다. 언제든지 고객 지원팀에 문의해 주세요.',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">자주 묻는 질문</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <Card key={index} className="p-6">
            <CardHeader>
              <CardTitle className="text-lg">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
