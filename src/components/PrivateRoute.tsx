import { useAuth } from '@/contexts/AuthContext'
import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { token } = useAuth()
  return token ? children : <Navigate to="/sign-in" />
}