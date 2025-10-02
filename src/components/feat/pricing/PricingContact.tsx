import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PricingContact() {
  return (
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
  )
}
