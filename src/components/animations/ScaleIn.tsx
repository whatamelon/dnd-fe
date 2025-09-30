import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
}: ScaleInProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

