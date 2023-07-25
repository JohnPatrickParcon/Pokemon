"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Nav from './layoutComponents/Nav'

const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient();

export const metadata = {
  title: 'Pokemon Catalogue',
  description: 'Like a Pokedex or something',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className="bg-red-700">
            <Nav/>
            {children}
          </div>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </body>
    </html>
  )
}
