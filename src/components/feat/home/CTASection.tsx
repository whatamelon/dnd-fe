import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeInUp from '@/components/animations/FadeInUp'

export default function CTASection() {
  return (
    <div className="py-20">
      <FadeInUp delay={1.3}>
        <div className="text-center bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">지금 바로 시작해보세요</h2>
          <p className="text-xl mb-8 opacity-90">무료로 체험하고 AI의 놀라운 결과를 확인하세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white px-8 py-4 text-md font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                지금 시작하기
              </Button>
            </Link>
            <Link to="/samples">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10 px-8 py-4 text-md font-semibold"
              >
                미리 보기
              </Button>
            </Link>
          </div>
        </div>
      </FadeInUp>
    </div>
  )
}
