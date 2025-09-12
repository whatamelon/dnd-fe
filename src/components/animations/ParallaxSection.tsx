import { ReactNode } from 'react'
import { useParallax } from '@/hooks/useScrollAnimation'

interface ParallaxSectionProps {
  children: ReactNode
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
      className={className}
      style={{
        transform: `translateY(${offset * speed}px)`,
      }}
    >
      {children}
    </div>
  )
}
