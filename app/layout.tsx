import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "POE2 Leveling Guide",
  description: "Path of Exile 2 leveling guide and tips",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>{children}</body>
    </html>
  )
}
