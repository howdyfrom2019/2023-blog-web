import Button from '@/components/atom/Button';
import Link from 'next/link';
import Logo from '@/components/atom/Logo';

const Footer = () => {
  return (
    <footer
      className={
        'flex flex-col items-center py-6 px-6 pt-10 bg-primary font-bold-32 text-white font-roboto'
      }
    >
      1년차 프론트엔드 엔지니어 김성주입니다.
      <div className={'flex gap-4 mt-7'}>
        <Button className={'font-bold-24'}>CV</Button>
        <Button className={'font-bold-24'}>PORTFOLIO</Button>
      </div>
      <div className={'flex gap-4 mt-12'}>
        <Link
          className={'font-bold-16 text-white hover-effect'}
          href={'https://github.com/howdyfrom2019'}
          target={'_blank'}
        >
          Github
        </Link>
        <Link
          className={'font-bold-16 text-white hover-effect'}
          href={'https://naver.com'}
          target={'_blank'}
        >
          LinkedIn
        </Link>
        <Link
          className={'font-bold-16 text-white hover-effect'}
          href={'https://dev-russel.tistory.com'}
          target={'_blank'}
        >
          Tistory
        </Link>
        <Link
          className={'font-bold-16 text-white hover-effect'}
          href={'https://twitter.com/'}
          target={'_blank'}
        >
          Twitter
        </Link>
      </div>
      <div className={'flex w-full justify-between'}>
        <Logo className={'text-white'} />
        <span className={'text-white font-medium-16'}>
          &copy; 2023 <i className={'hover-effect'}>@howdyfrom2019</i> All
          rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
