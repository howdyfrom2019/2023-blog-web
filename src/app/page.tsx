import Header from '@/components/organisms/Header';
import dynamic from "next/dynamic";
import Footer from "@/components/organisms/Footer";
const Greeting = dynamic(() => import('@/components/molecule/Greeting'), { ssr: false });
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <div className={'flex flex-col p-6 gap-8'}>
        <Header />
        <Greeting />
      </div>
      <Footer />
    </main>
  )
}
