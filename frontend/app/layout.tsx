import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Notes App with AI Summary',
  description: 'Create notes and generate AI summaries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
