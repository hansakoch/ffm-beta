import React, { useState, useEffect, useRef } from 'react'

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallback?: string
  threshold?: number
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallback = '',
  threshold = 0.1,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [threshold])

  return (
    <img
      ref={imgRef}
      src={isInView ? src : fallback}
      alt={alt}
      loading="lazy"
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  )
}

export default LazyImage
