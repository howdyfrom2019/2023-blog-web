import Header from '@/components/organisms/Header';
import dynamic from 'next/dynamic';
import Footer from '@/components/organisms/Footer';
import Quote from '@/components/atom/Quote';
import Grid from '@/components/atom/Grid';
const Greeting = dynamic(() => import('@/components/molecule/Greeting'), {
  ssr: false,
  loading: () => (
    <p className={'absolute top-1/2 left-0 -translate-y-1/2'}>Loading....</p>
  ),
});

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen justify-between'>
      <div className={'flex flex-col p-6 gap-8'}>
        <Header />
        <Grid>
          <Greeting />
        </Grid>
        <Quote>
          bug와 bugFix, 결정과 근거에 대한 주관적인 의견을 다룹니다.
        </Quote>
      </div>
      <Footer />
    </main>
  );
}
