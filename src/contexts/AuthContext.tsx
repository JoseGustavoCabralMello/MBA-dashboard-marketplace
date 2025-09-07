import { createContext, useContext, useState, type ReactNode } from 'react'
import { signIn as apiSignIn } from '@/api/sign-in'
import type { SignInBody } from '@/api/sign-in'

interface AuthContextType {
  token: string | null
  signIn: (data: SignInBody) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'))

  async function signIn(data: SignInBody) {
    const { token } = await apiSignIn(data)
    setToken(token)
    localStorage.setItem('token', token)
  }

  function signOut() {
    setToken(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}