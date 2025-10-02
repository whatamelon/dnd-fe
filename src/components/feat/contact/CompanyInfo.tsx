import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin } from 'lucide-react'

export default function CompanyInfo() {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-3">
          <MapPin className="w-5 h-5 text-yellow-600" />
          회사 정보
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="font-medium">회사명</div>
          <div className="text-sm text-gray-600">AI 착용샷 주식회사</div>
        </div>
        <div>
          <div className="font-medium">주소</div>
          <div className="text-sm text-gray-600">
            서울특별시 강남구 테헤란로 123
            <br />
            AI빌딩 10층
          </div>
        </div>
        <div>
          <div className="font-medium">사업자등록번호</div>
          <div className="text-sm text-gray-600">123-45-67890</div>
        </div>
      </CardContent>
    </Card>
  )
}
