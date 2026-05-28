import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Docker Image Cost Tracker — Track Registry Storage Costs',
  description: 'Analyze Docker registry usage, calculate storage costs per image and team, and get cleanup recommendations to reduce your bill.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fc8772ba-478d-41b2-8464-7210828dfe5a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
