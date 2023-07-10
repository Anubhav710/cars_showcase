import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer, Navbar } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover best car in the world",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
