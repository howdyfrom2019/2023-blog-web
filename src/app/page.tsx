import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/organisms/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col p-6">
      <Header />
    </main>
  )
}
