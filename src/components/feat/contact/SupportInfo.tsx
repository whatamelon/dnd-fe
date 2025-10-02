import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, Clock, Headphones } from 'lucide-react'

export default function SupportInfo() {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-3">
          <Headphones className="w-5 h-5 text-blue-600" />
          고객 지원
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-500" />
          <div>
            <div className="font-medium">이메일 지원</div>
            <div className="text-sm text-gray-600">support@ai-wearshot.com</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-500" />
          <div>
            <div className="font-medium">전화 지원</div>
            <div className="text-sm text-gray-600">+82 2-1234-5678</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-gray-500" />
          <div>
            <div className="font-medium">운영 시간</div>
            <div className="text-sm text-gray-600">평일 09:00 - 18:00 (KST)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
