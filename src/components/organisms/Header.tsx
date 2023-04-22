import Logo from '@/components/atom/Logo';
import Navigation from '@/components/molecule/Navigation';

const Header = () => {
  return (
    <header className={'w-full flex flex-1 justify-between items-center'}>
      <div className={'flex gap-2 items-center'}>
        <Logo />
        <span className={'font-medium-12 border rounded-sm border-primary px-[10px] py-1 ml-2'}>Shift</span>
        <span className={'font-medium-12'}>키 두 번 누르면 검색창 나와용</span>
      </div>
      <Navigation />
    </header>
  )
}

export default Header;
