import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FAQSection() {
  const faqs = [
    {
      question: 'Q. 생성 시간이 얼마나 걸리나요?',
      answer: 'A. 일반적으로 4-8초 정도 소요됩니다.',
    },
    {
      question: 'Q. 어떤 이미지 형식을 지원하나요?',
      answer: 'A. JPG, PNG, WEBP 형식을 지원합니다.',
    },
    {
      question: 'Q. 상업적 사용이 가능한가요?',
      answer: 'A. 네, 생성된 이미지는 상업적 용도로 자유롭게 사용 가능합니다.',
    },
  ]

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-xl">자주 묻는 질문</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="text-sm">
            <div className="font-medium text-gray-900">{faq.question}</div>
            <div className="text-gray-600 mt-1">{faq.answer}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
