"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import Nav from './indexComponents/Nav'

const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient();

export const metadata = {
  title: 'Pokemon Catalogue',
  description: 'Like a Pokedex or something',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <QueryClientProvider client={queryClient}>
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
      </QueryClientProvider>
    </html>
  )
}
