import React, { useState, useEffect } from 'react'

interface TipAnimationProps {
  type: 'money' | 'champagne' | 'wine' | 'whiskey' | 'protein' | 'steak' | 'dumbbell' | 'trophy' | 'diamond' | 'rose' | 'ffm-tokens' | 'ffm-gold' | 'hearts' | 'fire' | 'sparkles' | 'golden-rain' | 'diamond-shower' | 'fireworks' | 'champagne-bottle' | 'shooting-stars' | 'confetti-cannon' | 'magic-sparkles' | 'rainbow-wave' | 'snow-storm' | 'meteor-shower'
  amount?: number
  isVisible: boolean
  onAnimationComplete: () => void
}

const TipAnimation: React.FC<TipAnimationProps> = ({ 
  type, 
  amount, 
  isVisible, 
  onAnimationComplete 
}) => {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    rotation: number
    xVelocity: number
    yVelocity: number
    opacity: number
  }>>([])

  useEffect(() => {
    if (isVisible) {
      // Create particles based on animation type
      const newParticles = []
      const particleCount = type === 'wine' ? 35 : 
                          type === 'champagne' ? 60 : 
                          type === 'protein' ? 40 : 
                          type === 'steak' ? 25 : 
                          type === 'dumbbell' ? 20 : 
                          type === 'ffm-tokens' ? 50 :
                          type === 'ffm-gold' ? 30 :
                          type === 'hearts' ? 80 :
                          type === 'fire' ? 100 :
                          type === 'sparkles' ? 120 :
                          type === 'golden-rain' ? 200 :
                          type === 'diamond-shower' ? 150 :
                          type === 'shooting-stars' ? 25 :
                          type === 'confetti-cannon' ? 300 :
                          type === 'magic-sparkles' ? 150 :
                          type === 'rainbow-wave' ? 200 :
                          type === 'snow-storm' ? 250 :
                          type === 'meteor-shower' ? 15 : 45
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: type === 'golden-rain' || type === 'diamond-shower' || type === 'sparkles' ? 
             Math.random() * 100 : // Full width for shower effects
             type === 'shooting-stars' ? Math.random() * 20 : // Start from left side
             type === 'confetti-cannon' || type === 'magic-sparkles' || type === 'rainbow-wave' || type === 'snow-storm' ? 
             Math.random() * 100 : // Full width
             type === 'meteor-shower' ? Math.random() * 30 : // Start from upper left
             50 + Math.random() * 20 - 10, // Center with variation
          y: type === 'wine' || type === 'champagne' ? 85 : 
             type === 'golden-rain' || type === 'diamond-shower' || type === 'sparkles' ? -10 : // Start from top
             type === 'shooting-stars' || type === 'meteor-shower' ? -20 : // Start above screen
             type === 'confetti-cannon' ? 50 : // Start from center
             type === 'snow-storm' ? -15 : // Start from top
             110, // Start from bottom
          size: type === 'wine' ? 18 + Math.random() * 20 : 
                type === 'protein' ? 28 + Math.random() * 18 : 
                type === 'steak' ? 35 + Math.random() * 25 : 
                type === 'dumbbell' ? 40 + Math.random() * 20 : 
                type === 'fireworks' ? 8 + Math.random() * 16 :
                type === 'champagne-bottle' ? 6 + Math.random() * 12 :
                type === 'ffm-tokens' ? 20 + Math.random() * 15 :
                type === 'ffm-gold' ? 25 + Math.random() * 20 :
                type === 'hearts' ? 12 + Math.random() * 8 :
                type === 'fire' ? 8 + Math.random() * 12 :
                type === 'sparkles' ? 4 + Math.random() * 8 :
                type === 'golden-rain' ? 6 + Math.random() * 10 :
                type === 'diamond-shower' ? 8 + Math.random() * 12 :
                10 + Math.random() * 15,
          rotation: Math.random() * 360,
          xVelocity: type === 'golden-rain' || type === 'diamond-shower' ? 
                    (Math.random() - 0.5) * 4 : // Gentle side movement for rain
                    type === 'sparkles' ? (Math.random() - 0.5) * 8 :
                    type === 'hearts' ? (Math.random() - 0.5) * 6 :
                    type === 'fire' ? (Math.random() - 0.5) * 10 :
                    type === 'shooting-stars' ? 15 + Math.random() * 10 : // Fast horizontal movement
                    type === 'confetti-cannon' ? (Math.random() - 0.5) * 12 : // Random directions
                    type === 'magic-sparkles' ? (Math.random() - 0.5) * 6 : // Gentle floating
                    type === 'rainbow-wave' ? Math.sin(i * 0.5) * 8 : // Wave pattern
                    type === 'snow-storm' ? (Math.random() - 0.5) * 3 : // Gentle drift
                    type === 'meteor-shower' ? 12 + Math.random() * 8 : // Fast diagonal
                    (Math.random() - 0.5) * (type === 'wine' || type === 'champagne' ? 15 : 8),
          yVelocity: type === 'wine' || type === 'champagne' ? -15 - Math.random() * 10 : 
                    type === 'golden-rain' || type === 'diamond-shower' ? 8 + Math.random() * 6 : // Fall from top
                    type === 'fireworks' ? -18 - Math.random() * 15 :
                    type === 'champagne-bottle' ? -20 - Math.random() * 12 :
                    type === 'sparkles' ? -8 - Math.random() * 12 :
                    type === 'hearts' ? -6 - Math.random() * 8 :
                    type === 'fire' ? -12 - Math.random() * 8 :
                    type === 'shooting-stars' ? -3 - Math.random() * 4 : // Slight downward arc
                    type === 'confetti-cannon' ? -8 - Math.random() * 12 : // Upward explosion
                    type === 'magic-sparkles' ? -4 - Math.random() * 6 : // Gentle floating up
                    type === 'rainbow-wave' ? -6 - Math.random() * 4 : // Gentle upward
                    type === 'snow-storm' ? 4 + Math.random() * 6 : // Falling down
                    type === 'meteor-shower' ? 8 + Math.random() * 6 : // Fast downward
                    -12 - Math.random() * 8,
          opacity: type === 'sparkles' ? 0.6 + Math.random() * 0.4 :
                  type === 'hearts' ? 0.7 + Math.random() * 0.3 :
                  type === 'fireworks' ? 0.8 + Math.random() * 0.2 :
                  type === 'champagne-bottle' ? 0.9 + Math.random() * 0.1 :
                  0.8 + Math.random() * 0.2
        })
      }
      
      setParticles(newParticles)
      
      // Set timeout to clean up animation
      const timeout = setTimeout(() => {
        onAnimationComplete()
      }, type === 'golden-rain' || type === 'diamond-shower' || type === 'sparkles' ? 4000 : 
         type === 'fireworks' ? 5000 :
         type === 'champagne-bottle' ? 4500 : 3500)
      
      return () => clearTimeout(timeout)
    }
  }, [isVisible, type, onAnimationComplete])

  useEffect(() => {
    if (particles.length > 0) {
      const interval = setInterval(() => {
        setParticles(prevParticles => 
          prevParticles.map(particle => {
            // Apply gravity for money and confetti
            const gravity = type === 'wine' || type === 'champagne' ? 0.18 : 
                           type === 'dumbbell' ? 0.9 : 
                           type === 'fireworks' ? 0.4 :
                           type === 'champagne-bottle' ? 0.25 :
                           type === 'golden-rain' || type === 'diamond-shower' ? 0.3 :
                           type === 'sparkles' ? 0.1 :
                           type === 'hearts' ? 0.2 :
                           type === 'fire' ? 0.15 :
                           0.5
            
            // Update position based on velocity
            const x = particle.x + particle.xVelocity
            const y = particle.y + particle.yVelocity
            
            // Update velocity (add gravity)
            const yVelocity = particle.yVelocity + gravity
            
            // Add some randomness to x velocity for liquids
            const xVelocity = type === 'wine' || type === 'champagne' || type === 'sparkles'
              ? particle.xVelocity + (Math.random() - 0.5) * 0.8
              : type === 'fireworks'
              ? particle.xVelocity + (Math.random() - 0.5) * 1.5
              : type === 'champagne-bottle'
              ? particle.xVelocity + (Math.random() - 0.5) * 1.0
              : type === 'fire'
              ? particle.xVelocity + (Math.random() - 0.5) * 1.2
              : particle.xVelocity
            
            // Update rotation
            const rotation = particle.rotation + (Math.random() - 0.5) * (
              type === 'dumbbell' ? 3 : 
              type === 'fireworks' ? 15 :
              type === 'champagne-bottle' ? 8 :
              type === 'ffm-tokens' || type === 'ffm-gold' ? 8 :
              type === 'sparkles' ? 12 :
              type === 'hearts' ? 6 :
              5)
            
            // Reduce opacity over time
            const opacity = Math.max(0, particle.opacity - (
              type === 'sparkles' ? 0.006 :
              type === 'fireworks' ? 0.004 :
              type === 'champagne-bottle' ? 0.005 :
              type === 'golden-rain' || type === 'diamond-shower' ? 0.005 :
              0.008))
            
            return {
              ...particle,
              x,
              y,
              yVelocity,
              xVelocity,
              rotation,
              opacity
            }
          }).filter(particle => particle.opacity > 0 && particle.y > -50 && particle.y < 120)
        )
      }, 30)
      
      return () => clearInterval(interval)
    }
  }, [particles, type])

  if (!isVisible) return null

  const renderParticle = (particle: any) => {
    switch (type) {
      case 'fireworks':
        const fireworkColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F']
        const color = fireworkColors[particle.id % fireworkColors.length]
        return (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${color} 0%, ${color}80 70%, transparent 100%)`,
              boxShadow: `
                0 0 ${particle.size * 2}px ${color}80,
                0 0 ${particle.size * 4}px ${color}40,
                0 0 ${particle.size * 6}px ${color}20
              `,
              zIndex: 100,
              transform: `scale(${1 + Math.sin(Date.now() * 0.01 + particle.id) * 0.3})`,
              filter: `brightness(${1.5 + Math.sin(Date.now() * 0.02 + particle.id) * 0.5})`
            }}
          />
        )
      
      case 'champagne-bottle':
        return (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size * 2}px`,
              background: `linear-gradient(180deg, 
                rgba(255,215,0,${particle.opacity}) 0%, 
                rgba(255,193,7,${particle.opacity * 0.9}) 30%,
                rgba(255,235,59,${particle.opacity * 0.7}) 60%,
                rgba(255,255,255,${particle.opacity * 0.5}) 80%,
                transparent 100%)`,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              boxShadow: `
                0 0 ${particle.size}px rgba(255, 215, 0, ${particle.opacity * 0.8}),
                inset 0 2px ${particle.size/2}px rgba(255,255,255,${particle.opacity * 0.6})
              `,
              zIndex: 100,
              transform: `rotate(${particle.rotation}deg) scale(${1 + Math.sin(Date.now() * 0.015 + particle.id) * 0.2})`,
              filter: `brightness(${1.3 + Math.sin(Date.now() * 0.01 + particle.id) * 0.3})`
            }}
          />
        )
      
      case 'hearts':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg) scale(${1 + Math.sin(Date.now() * 0.01 + particle.id) * 0.2})`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100,
              filter: `hue-rotate(${Math.sin(Date.now() * 0.005 + particle.id) * 30}deg)`,
              textShadow: '0 0 10px rgba(255, 20, 147, 0.8)'
            }}
          >
            ❤️
          </div>
        )
      
      case 'fire':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg) scale(${1 + Math.sin(Date.now() * 0.02 + particle.id) * 0.2})`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100,
              filter: `brightness(${1.1 + Math.sin(Date.now() * 0.01 + particle.id) * 0.2})`,
              textShadow: '0 0 10px rgba(255, 69, 0, 0.7)'
            }}
          >
            🔥
          </div>
        )
      
      case 'sparkles':
        return (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${particle.opacity}) 0%, rgba(255,215,0,${particle.opacity * 0.8}) 50%, transparent 100%)`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity}), 0 0 ${particle.size}px rgba(255, 215, 0, ${particle.opacity})`,
              zIndex: 100,
              transform: `scale(${1 + Math.sin(Date.now() * 0.02 + particle.id) * 0.5})`,
              animation: `twinkle 0.5s ease-in-out infinite alternate`
            }}
          />
        )
      
      case 'golden-rain':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size * 3}px`,
              background: `linear-gradient(180deg, rgba(255,215,0,${particle.opacity}) 0%, rgba(255,165,0,${particle.opacity * 0.8}) 50%, transparent 100%)`,
              borderRadius: '50%',
              boxShadow: `0 0 ${particle.size}px rgba(255, 215, 0, ${particle.opacity * 0.6})`,
              zIndex: 100,
              transform: `rotate(${particle.rotation}deg)`
            }}
          />
        )
      
      case 'diamond-shower':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(45deg, rgba(185,242,255,${particle.opacity}) 0%, rgba(255,255,255,${particle.opacity}) 50%, rgba(185,242,255,${particle.opacity}) 100%)`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              boxShadow: `0 0 ${particle.size * 2}px rgba(185, 242, 255, ${particle.opacity}), 0 0 ${particle.size}px rgba(255, 255, 255, ${particle.opacity})`,
              zIndex: 100,
              transform: `rotate(${particle.rotation}deg) scale(${1 + Math.sin(Date.now() * 0.03 + particle.id) * 0.3})`,
              filter: `brightness(${1.5 + Math.sin(Date.now() * 0.02 + particle.id) * 0.5})`
            }}
          />
        )
      
      case 'shooting-stars':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 4}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(90deg, 
                rgba(255,255,255,${particle.opacity}) 0%, 
                rgba(255,215,0,${particle.opacity * 0.8}) 30%,
                rgba(135,206,250,${particle.opacity * 0.6}) 60%,
                transparent 100%)`,
              borderRadius: '50% 0% 50% 0%',
              boxShadow: `
                0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity}),
                0 0 ${particle.size * 4}px rgba(255, 215, 0, ${particle.opacity * 0.6}),
                0 0 ${particle.size * 6}px rgba(135, 206, 250, ${particle.opacity * 0.4})
              `,
              zIndex: 100,
              transform: `rotate(15deg) scale(${1 + Math.sin(Date.now() * 0.01 + particle.id) * 0.2})`,
              filter: `brightness(${1.8 + Math.sin(Date.now() * 0.02 + particle.id) * 0.4})`
            }}
          />
        )
      
      case 'confetti-cannon':
        const confettiColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#FF9FF3', '#54A0FF']
        const confettiColor = confettiColors[particle.id % confettiColors.length]
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size * 1.5}px`,
              background: `linear-gradient(45deg, ${confettiColor} 0%, ${confettiColor}CC 50%, ${confettiColor}88 100%)`,
              borderRadius: Math.random() > 0.5 ? '50%' : '20%',
              boxShadow: `0 0 ${particle.size}px ${confettiColor}80`,
              zIndex: 100,
              transform: `rotate(${particle.rotation}deg) scale(${1 + Math.sin(Date.now() * 0.02 + particle.id) * 0.3})`,
              filter: `brightness(${1.2 + Math.sin(Date.now() * 0.015 + particle.id) * 0.3})`
            }}
          />
        )
      
      case 'magic-sparkles':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, 
                rgba(255,255,255,${particle.opacity}) 0%, 
                rgba(255,192,203,${particle.opacity * 0.8}) 30%,
                rgba(221,160,221,${particle.opacity * 0.6}) 60%,
                transparent 100%)`,
              borderRadius: '50%',
              boxShadow: `
                0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity}),
                0 0 ${particle.size * 4}px rgba(255, 192, 203, ${particle.opacity * 0.6}),
                0 0 ${particle.size * 6}px rgba(221, 160, 221, ${particle.opacity * 0.4})
              `,
              zIndex: 100,
              transform: `scale(${1 + Math.sin(Date.now() * 0.03 + particle.id) * 0.5})`,
              animation: `twinkle 0.8s ease-in-out infinite alternate`,
              animationDelay: `${particle.id * 0.1}s`
            }}
          />
        )
      
      case 'rainbow-wave':
        const rainbowHue = (particle.id * 30 + Date.now() * 0.1) % 360
        return (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, 
                hsl(${rainbowHue}, 80%, 60%) 0%, 
                hsl(${rainbowHue + 60}, 70%, 50%) 50%, 
                transparent 100%)`,
              boxShadow: `
                0 0 ${particle.size * 2}px hsl(${rainbowHue}, 80%, 60%),
                0 0 ${particle.size * 4}px hsl(${rainbowHue + 30}, 70%, 50%)
              `,
              zIndex: 100,
              transform: `scale(${1 + Math.sin(Date.now() * 0.02 + particle.id) * 0.4})`,
              filter: `brightness(${1.3 + Math.sin(Date.now() * 0.015 + particle.id) * 0.3})`
            }}
          />
        )
      
      case 'snow-storm':
        return (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, 
                rgba(255,255,255,${particle.opacity}) 0%, 
                rgba(240,248,255,${particle.opacity * 0.8}) 50%, 
                rgba(176,224,230,${particle.opacity * 0.4}) 100%)`,
              boxShadow: `
                0 0 ${particle.size}px rgba(255, 255, 255, ${particle.opacity * 0.8}),
                inset 0 1px ${particle.size/2}px rgba(255,255,255,${particle.opacity * 0.6})
              `,
              zIndex: 100,
              transform: `scale(${0.8 + Math.sin(Date.now() * 0.01 + particle.id) * 0.3})`,
              filter: `brightness(${1.1 + Math.sin(Date.now() * 0.008 + particle.id) * 0.2})`
            }}
          />
        )
      
      case 'ffm-tokens':
        return (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(45deg, #C0C0C0, #E5E5E5, #C0C0C0)`,
              boxShadow: `0 0 ${particle.size/2}px rgba(192, 192, 192, ${particle.opacity}), inset 0 2px 4px rgba(255,255,255,0.3)`,
              zIndex: 100,
              border: '2px solid #A0A0A0',
              transform: `rotate(${particle.rotation}deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: `${particle.size * 0.3}px`,
              fontWeight: 'bold',
              color: '#666',
              textShadow: '0 1px 2px rgba(255,255,255,0.5)'
            }}
          >
            FFM
          </div>
        )
      
      case 'ffm-gold':
        return (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(45deg, #FFD700, #FFA500, #FFD700)`,
              boxShadow: `0 0 ${particle.size}px rgba(255, 215, 0, ${particle.opacity}), inset 0 2px 6px rgba(255,255,255,0.4)`,
              zIndex: 100,
              border: '3px solid #DAA520',
              transform: `rotate(${particle.rotation}deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: `${particle.size * 0.25}px`,
              fontWeight: 'bold',
              color: '#8B4513',
              textShadow: '0 1px 3px rgba(255,255,255,0.6)'
            }}
          >
            FFM
          </div>
        )

      case 'wine':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            🍷
          </div>
        )
      
      case 'protein':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            🥤
          </div>
        )
      
      case 'champagne':
        return (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: `rgba(255, 215, 0, ${particle.opacity})`,
              boxShadow: `0 0 ${particle.size/2}px rgba(255, 215, 0, ${particle.opacity})`,
              zIndex: 100
            }}
          />
        )
      
      case 'steak':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            🥩
          </div>
        )
      
      case 'dumbbell':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            🏋️
          </div>
        )
      
      case 'whiskey':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            🥃
          </div>
        )
      
      case 'trophy':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            🏆
          </div>
        )
      
      case 'diamond':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            💎
          </div>
        )
      
      case 'rose':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            🌹
          </div>
        )
      
      case 'money':
        return (
          <div 
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.opacity,
              fontSize: `${particle.size}px`,
              zIndex: 100
            }}
          >
            💵
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Amount display */}
      {amount && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white bg-gradient-to-r from-orange-500 to-purple-600 px-6 py-3 rounded-xl shadow-2xl z-50 animate-bounce"
          style={{animation: 'bounce 1s ease infinite, fadeOut 2s ease forwards'}}
        >
          £{amount}
        </div>
      )}
      
      {/* Particles */}
      {particles.map(particle => renderParticle(particle))}
      
      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default TipAnimation