import type React from "react"
import "./globals.css"
import { ClientLayout } from "./ClientLayout"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}

export const metadata = {
      generator: 'v0.dev'
    };
