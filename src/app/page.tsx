import Header from '@/components/organisms/Header';
import Greeting from '@/components/molecule/Greeting';

export default function Home() {
  return (
    <main className="flex flex-col p-6 gap-8">
      <Header />
      <Greeting />
    </main>
  )
}
