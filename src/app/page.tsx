import Header from '@/components/organisms/Header';
import dynamic from "next/dynamic";
import Footer from "@/components/organisms/Footer";
import LinkArticleSummary from "@/components/molecule/LinkArticleSummary";
import Quote from "@/components/atom/Quote";
import Image from "next/image";
const Greeting = dynamic(() => import('@/components/molecule/Greeting'), { ssr: false });
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <div className={'flex flex-col p-6 gap-8'}>
        <Header />
        <Greeting />
        <Quote>bug와 bugFix, 결정과 근거에 대한 주관적인 의견을 다룹니다.</Quote>
        <div className={'relative flex flex-col w-[280px]'}>
          <img
            className={'filter sepia-[8%] hue-rotate-[190deg] saturate-[200%]'}
            src={'https://i.imgur.com/R5wBNhu.jpeg'}
            alt={'test'}
            width={280}
          />
          <span className={'absolute w-full h-full bg-primaryAlpha-40 top-0 left-0'} />
          <LinkArticleSummary
            title={'순수 JS로 SPA처럼 사용하기 - 1.함수형 프로그래밍'}
            to={'/dev/1'}
            description={'발단 요즘 과제테스트를 몇 번 보다보니 함수형 프로그래밍을 통해 추상화하여 구현..'}
            categories={['DEV', 'VanillaJS']}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
