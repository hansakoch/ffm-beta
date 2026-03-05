import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  requireAuth = true,
  redirectTo = '/login'
}) => {
  // TEMPORARY: Authentication disabled for preview purposes
  // TODO: Re-enable before production deployment
  return <>{children}</>

  /* ORIGINAL CODE - COMMENTED OUT FOR PREVIEW
  const { isAuthenticated, loading } = useAuth()

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  // If authentication is required but user is not authenticated, redirect to login
  if (requireAuth && !isAuthenticated) {
    return <Navigate to={redirectTo} />
  }

  // If user is authenticated but the route is for non-authenticated users only (like login page)
  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  // Otherwise, render the children
  return <>{children}</>
  */
}

export default AuthGuard