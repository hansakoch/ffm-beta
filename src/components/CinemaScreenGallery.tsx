import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Star, Award, Film, Clapperboard, Camera, Ticket } from 'lucide-react'

interface Movie {
  id: string
  title: string
  year: string
  role: string
  image: string
  description?: string
  imdb?: string
  coStar?: string
}

interface CinemaScreenGalleryProps {
  movies: Movie[]
  actorName: string
}

const CinemaScreenGallery: React.FC<CinemaScreenGalleryProps> = ({ movies, actorName }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [isTheaterMode, setIsTheaterMode] = useState(false)

  useEffect(() => {
    // Auto-rotate movies every 8 seconds
    const interval = setInterval(() => {
      handleNext()
    }, 8000)
    
    return () => clearInterval(interval)
  }, [currentIndex])

  const handlePrev = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex(prev => (prev === 0 ? movies.length - 1 : prev - 1))
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const handleNext = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex(prev => (prev === movies.length - 1 ? 0 : prev + 1))
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const currentMovie = movies[currentIndex]
  const nextMovie = movies[(currentIndex + 1) % movies.length]

  return (
    <div className="w-full max-w-6xl mx-auto transition-all duration-700">
      {/* Theater mode toggle */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setIsTheaterMode(!isTheaterMode)}
          className="flex items-center space-x-2 bg-red-600/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Ticket size={16} />
          <span>{isTheaterMode ? 'Exit Theater Mode' : 'Enter Theater Mode'}</span>
        </button>
      </div>
      
      {/* Cinema Screen */}
      <div className="relative bg-black p-8 rounded-3xl">
        {/* Theater ceiling lights */}
        <div className="absolute -top-4 left-0 right-0 flex justify-center space-x-16 z-10 overflow-hidden">
          {[...Array(7)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-transparent opacity-70 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
        
        {/* Background screens */}
        <div className="relative flex justify-center mb-8">
          {/* Left background screen */}
          <div className="absolute -top-10 -left-20 w-64 h-36 bg-black rounded-lg transform rotate-[-15deg] border-4 border-gray-800 shadow-xl opacity-70">
            <img 
              src={nextMovie.image} 
              alt="Background screen" 
              className="w-full h-full object-contain rounded-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          
        </div>
        
        {/* Cinema screen frame */}
        <div className="relative bg-gray-900 rounded-t-3xl p-8 border-t border-x border-gray-700 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-700 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          {/* Now showing banner */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-1 rounded-full font-bold text-sm shadow-lg z-20 whitespace-nowrap animate-pulse" style={{ animationDuration: '4s' }}>
            NOW SHOWING: {actorName}'S FEATURED FILMS
          </div>
          
          {/* Movie screen */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden border-8 border-gray-800 shadow-inner bg-black">
            {/* Screen glow effect */}
            <div className="absolute inset-0 bg-blue-900/20 z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
            
            {/* Movie image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={currentMovie.image} 
                alt={currentMovie.title} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Movie info overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center space-x-2 mb-2 flex-wrap">
                <Film className="text-red-400" size={20} />
                <span className="text-white font-bold text-lg">{currentMovie.title}</span>
                <span className="text-gray-400 text-sm">({currentMovie.year})</span>
                {currentMovie.imdb && (
                  <span className="ml-2 px-2 py-1 bg-yellow-500/30 text-yellow-300 rounded-md text-xs flex items-center">
                    <Star size={12} className="inline mr-1 fill-current" /> IMDb {currentMovie.imdb}
                  </span>
                )}
                <span className="px-2 py-1 bg-red-500/30 text-red-300 rounded-md text-xs">
                  <Clapperboard size={12} className="inline mr-1" /> FILM
                </span>
              </div>
              <div className="text-gray-300 mb-2 flex items-center">
                <Camera size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-200 font-medium">Role:</span>
                <span className="ml-2 text-orange-300 font-semibold">{currentMovie.role}</span>
              </div>
              {currentMovie.coStar && (
                <div className="text-gray-300 mb-2 flex items-center">
                  <Award size={16} className="mr-2 text-purple-400" />
                  <span className="text-gray-200 font-medium">Co-starring:</span>
                  <span className="ml-2 text-purple-300 font-semibold">{currentMovie.coStar}</span>
                </div>
              )}
              {currentMovie.description && showDetails && (
                <p className="text-gray-400 text-sm mb-4 bg-black/50 p-3 rounded-lg border border-gray-700/50">{currentMovie.description}</p>
              )}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors flex items-center"
              >
                {showDetails ? 'Hide Details' : 'Show Details'}
                <span className="ml-1 text-xs">{showDetails ? '▲' : '▼'}</span>
              </button>
            </div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-red-600/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-110 shadow-[0_0_30px_rgba(255,0,0,0.5)]">
                <Play size={32} className="text-white ml-1" />
              </button>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <button 
              onClick={handleNext}
              className="w-10 h-10 bg-black/50 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Movie indicators */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3 z-20">
            {movies.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all shadow-md ${
                  index === currentIndex 
                    ? 'bg-red-600 scale-125 shadow-[0_0_10px_rgba(255,0,0,0.7)]' 
                    : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Cinema stage */}
        <div className="h-12 bg-gradient-to-b from-gray-800 to-gray-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent">
            {/* Theater floor lights */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-24">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-1 bg-red-600/50 rounded-full shadow-[0_0_5px_rgba(255,0,0,0.7)] animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Actor accolades */}
      <div className="mt-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
            <Award className="text-white" size={20} />
          </div>
          <h3 className="text-xl font-bold text-white">{actorName}'s Accolades & Achievements</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 hover:bg-yellow-500/20 transition-colors">
            <div className="flex items-center space-x-2 mb-2">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-yellow-300 font-bold">Lead Actor</span>
            </div>
            <p className="text-gray-300 text-sm">Starred in multiple feature films as the lead protagonist</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 hover:bg-blue-500/20 transition-colors">
            <div className="flex items-center space-x-2 mb-2">
              <Star size={16} className="text-blue-400 fill-current" />
              <span className="text-blue-300 font-bold">Martial Arts Expert</span>
            </div>
            <p className="text-gray-300 text-sm">Certified expert in multiple martial arts disciplines</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 hover:bg-purple-500/20 transition-colors">
            <div className="flex items-center space-x-2 mb-2">
              <Star size={16} className="text-purple-400 fill-current" />
              <span className="text-purple-300 font-bold">Stunt Performer</span>
            </div>
            <p className="text-gray-300 text-sm">Performed own stunts in high-action sequences</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 hover:bg-green-500/20 transition-colors">
            <div className="flex items-center space-x-2 mb-2">
              <Star size={16} className="text-green-400 fill-current" />
              <span className="text-green-300 font-bold">Action Choreographer</span>
            </div>
            <p className="text-gray-300 text-sm">Designed fight sequences for major productions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CinemaScreenGallery