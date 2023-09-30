'use client';
import Logo from '@/components/atom/Logo';
import Navigation from '@/components/molecule/Navigation';
import clsx from 'clsx';
import SearchBar from '@/components/atom/SearchBar';
import useGlobalSearchBar from '@/hooks/useGlobalSearchBar';

const Header = () => {
  const openSearchBar = useGlobalSearchBar();
  return (
    <header className={'w-full flex flex-1 justify-between items-center'}>
      <div className={'flex gap-2 items-center'}>
        <Logo />
        <span
          className={
            'font-medium-12 border rounded-sm border-primary px-[10px] py-px ml-2'
          }
        >
          {openSearchBar ? 'ESC' : 'Shift'}
        </span>
        <span className={'font-medium-12 font-sans'}>
          {openSearchBar
            ? '키 누르면 검색창 꺼져용'
            : '키 두 번 누르면 검색창 나와용'}
        </span>
      </div>
      <SearchBar
        className={clsx([
          'opacity-0 -z-10 -translate-y-full',
          'absolute top-6 left-1/2',
          openSearchBar && 'animate-searchBarAppear',
        ])}
        placeholder={'포스트를 검색해보세요.'}
      />
      <Navigation />
    </header>
  );
};

export default Header;
