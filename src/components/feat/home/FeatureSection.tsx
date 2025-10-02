import { Camera, Zap } from 'lucide-react'
import FadeInUp from '@/components/animations/FadeInUp'

interface FeatureSectionProps {
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  badgeText: string
  title: string
  description: string
  delay: number
}

export default function FeatureSection({
  icon: Icon,
  iconColor,
  badgeText,
  title,
  description,
  delay,
}: FeatureSectionProps) {
  return (
    <FadeInUp delay={delay}>
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
          <Icon className={`w-4 h-4 ${iconColor}`} />
          <span className="text-sm font-medium text-gray-700">{badgeText}</span>
        </div>

        <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </FadeInUp>
  )
}
