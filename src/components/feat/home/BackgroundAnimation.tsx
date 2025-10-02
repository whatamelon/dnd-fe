import { useState, useEffect } from 'react'

export default function BackgroundAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.1,
            top: mousePosition.y * 0.1,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-full blur-3xl"
          style={{
            right: mousePosition.x * 0.05,
            bottom: mousePosition.y * 0.05,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-300/15 to-yellow-300/15 rounded-full blur-3xl"
          style={{
            left: '50%',
            top: '30%',
            transform: 'translateX(-50%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-20px); }
        }
      `}</style>
    </>
  )
}
