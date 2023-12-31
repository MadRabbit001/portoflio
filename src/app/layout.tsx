import './layout.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'liron portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <title>{metadata.title}</title>
      <meta name={'description'} content={metadata.description!}/>
    </Head>
      <body className={`${inter.className} dark-mode`}>{children}</body>
    </html>
  )
}
