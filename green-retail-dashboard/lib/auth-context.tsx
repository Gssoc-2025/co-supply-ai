"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type User = {
  username: string
  email?: string
}

type AuthContextType = {
  user: User | null
  login: (username: string, password: string) => void
  signup: (username: string, email: string, password: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (username: string, password: string) => {
    // In a real app, this would validate against a backend
    setUser({ username })
  }

  const signup = (username: string, email: string, password: string) => {
    // In a real app, this would create a new user in the backend
    setUser({ username, email })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
