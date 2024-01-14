import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'



export const metadata = {
  title: 'Forum app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       <Navbar/>
       <main className="container mx-auto h-[calc(100vh-7rem)] flex justify-center items-center ">
        {children}
       </main>
        </body>
    </html>
  )
}