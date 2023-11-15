import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '2Auth',
  description: 'Added layer of security that goes beyond passwords',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='root' lang="en">
      <body className={inter.className}>
        <div className="bg-[url(/background.png)] bg-no-repeat">{children}</div></body>
    </html>
  )
}
