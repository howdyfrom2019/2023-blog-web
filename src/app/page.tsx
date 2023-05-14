import Header from '@/components/organisms/Header';
import dynamic from "next/dynamic";
import Footer from "@/components/organisms/Footer";
import Quote from "@/components/atom/Quote";
const Greeting = dynamic(() => import('@/components/molecule/Greeting'), { ssr: false });
  
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <div className={'flex flex-col p-6 gap-8'}>
        <Header />
        <Greeting />
        <Quote>bug와 bugFix, 결정과 근거에 대한 주관적인 의견을 다룹니다.</Quote>
      </div>
      <Footer />
    </main>
  )
}
