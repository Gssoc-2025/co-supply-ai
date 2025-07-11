"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { AuthCheck } from "@/components/auth-check"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/dashboard")
  }, [router])

  return (
    <AuthCheck>
      <div className="flex h-screen items-center justify-center">
        <p>Redirecting to dashboard...</p>
      </div>
    </AuthCheck>
  )
}
