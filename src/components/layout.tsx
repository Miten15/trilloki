import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FBFE]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

