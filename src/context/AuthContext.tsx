import React, { createContext, useContext, useState } from 'react'

type User = {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
    avatar_url?: string
    [key: string]: any
  }
}

type AuthContextType = {
  user: User | null
  loading: boolean
  error: Error | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  signup: (email: string, password: string, userData?: any) => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  signup: async () => {}
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)

      // Mock authentication - in production, replace with real auth
      await new Promise(resolve => setTimeout(resolve, 500))

      const mockUser: User = {
        id: Math.random().toString(36).substring(7),
        email,
        user_metadata: {
          full_name: email.split('@')[0]
        }
      }

      setUser(mockUser)
      setIsAuthenticated(true)
      localStorage.setItem('auth_user', JSON.stringify(mockUser))
    } catch (err) {
      setError(err as Error)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    setError(null)
    localStorage.removeItem('auth_user')
  }

  const signup = async (email: string, password: string, userData?: any) => {
    try {
      setLoading(true)
      setError(null)

      // Mock signup - in production, replace with real auth
      await new Promise(resolve => setTimeout(resolve, 500))

      const mockUser: User = {
        id: Math.random().toString(36).substring(7),
        email,
        user_metadata: {
          ...userData,
          full_name: userData?.full_name || email.split('@')[0]
        }
      }

      setUser(mockUser)
      setIsAuthenticated(true)
      localStorage.setItem('auth_user', JSON.stringify(mockUser))
    } catch (err) {
      setError(err as Error)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Check for stored user on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('auth_user')
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        setIsAuthenticated(true)
      } catch (err) {
        console.error('Error parsing stored user:', err)
        localStorage.removeItem('auth_user')
      }
    }
  }, [])

  const value = {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    signup
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
