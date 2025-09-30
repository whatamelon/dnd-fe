import { useParallax } from '@/hooks/useScrollAnimation'

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
}: ParallaxSectionProps) {
  const offset = useParallax()

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `translateY(${offset * speed}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
