import { ClerkProvider } from '@clerk/nextjs'  
import type { Metadata } from 'next'  
import { Inter } from 'next/font/google'  
import './globals.css'  
import Header from '@/components/Header'  
  
const inter = Inter({ subsets: ['latin'] })  
  
export const metadata: Metadata = {  
  title: '骆芷蝶智选 - 服装供应链 ToB 服务平台',  
  description: '买手店首选的一站式服装供应链服务平台',  
}  
  
export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <ClerkProvider>  
      <html lang="zh-CN">  
        <body className={inter.className}>  
          <Header />  
          <main style={{ paddingTop: '80px' }}>  
            {children}  
          </main>  
        </body>  
      </html>  
    </ClerkProvider>  
  )  
}  