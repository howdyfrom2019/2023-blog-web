import { Inter } from 'next/font/google'
import Header from '@/components/organisms/Header';
import Grid from '@/components/atom/Grid';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col p-6 gap-8">
      <Header />
      <Grid>
        <div className={'flex flex-col absolute top-1/2 left-0 -translate-y-1/2 gap-3'}>
          <span className={'font-bold-32'}>GM!</span>
          <span className={'font-medium-16 font-roboto'}>좋은 아침입니다. 아침에는 커피 한 잔으로 시작하는게 어떨까요?</span>
        </div>
      </Grid>
    </main>
  )
}
