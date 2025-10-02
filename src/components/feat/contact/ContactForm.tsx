import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail, MessageCircle } from 'lucide-react'

export default function ContactForm() {
  return (
    <Card className="p-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-blue-500" />
          문의하기
        </CardTitle>
        <CardDescription className="text-lg">
          아래 양식을 작성하여 메시지를 보내주세요. 24시간 이내에 답변드립니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            이메일 *
          </label>
          <Input id="email" type="email" placeholder="example@email.com" required />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            문의 유형
          </label>
          <select
            id="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">문의 유형을 선택하세요</option>
            <option value="technical">기술 지원</option>
            <option value="billing">요금제 문의</option>
            <option value="feature">기능 제안</option>
            <option value="bug">버그 신고</option>
            <option value="business">비즈니스 문의</option>
            <option value="other">기타</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            메시지 *
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="문의 내용을 자세히 입력해주세요. 문제가 발생한 상황이나 원하는 기능에 대해 구체적으로 설명해주시면 더 정확한 답변을 드릴 수 있습니다."
            required
          />
        </div>

        <Button
          size="lg"
          variant="default"
          className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600"
        >
          <Mail className="w-4 h-4 mr-2" />
          메시지 보내기
        </Button>
      </CardContent>
    </Card>
  )
}
