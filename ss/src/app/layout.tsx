import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ss',
  description: 'Shop the best products online',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <header className="bg-card shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/products" className="text-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/cart" className="text-foreground hover:text-primary">Cart</Link></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}

