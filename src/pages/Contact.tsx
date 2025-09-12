import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, MessageCircle, Clock, Headphones } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">문의하기</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 착용샷 생성 서비스에 대한 문의사항이나 기술 지원이 필요하시면
              <br />
              언제든지 연락해주세요. 빠르고 친절하게 도와드리겠습니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 문의 폼 */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-purple-500" />
                  문의하기
                </CardTitle>
                <CardDescription className="text-lg">
                  아래 양식을 작성하여 메시지를 보내주세요. 24시간 이내에 답변드립니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <Input id="name" placeholder="홍길동" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <Input id="email" type="email" placeholder="example@email.com" required />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    제목 *
                  </label>
                  <Input id="subject" placeholder="문의 제목을 입력하세요" required />
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
                  className="w-full"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  메시지 보내기
                </Button>
              </CardContent>
            </Card>

            {/* 연락처 정보 */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-blue-500" />
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

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-500" />
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

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">자주 묻는 질문</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Q. 생성 시간이 얼마나 걸리나요?</div>
                    <div className="text-gray-600 mt-1">A. 일반적으로 2-5분 정도 소요됩니다.</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">
                      Q. 어떤 이미지 형식을 지원하나요?
                    </div>
                    <div className="text-gray-600 mt-1">A. JPG, PNG, WEBP 형식을 지원합니다.</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Q. 상업적 사용이 가능한가요?</div>
                    <div className="text-gray-600 mt-1">
                      A. 네, 생성된 이미지는 상업적 용도로 자유롭게 사용 가능합니다.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
