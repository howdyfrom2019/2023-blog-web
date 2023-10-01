import './globals.css';
import localFont from 'next/font/local';
import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
import FirebaseProvider from '@/features/auth/component/FirebaseProvider';
import cn from '@/utils/cn';

export const metadata = {
  title: 'Jake.log',
  description: '프론트엔드 전반적인 영역에서 고민합니다.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: 'Jake.log',
  },
};

const roboto = Noto_Sans_KR({
  preload: true,
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const multima = localFont({
  preload: true,
  src: [
    {
      path: '../../public/fonts/Multima-Bold.woff',
      weight: '700',
    },
    {
      path: '../../public/fonts/Multima-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Multima-Medium.woff',
      weight: '500',
    },
    {
      path: '../../public/fonts/Multima-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Multima-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/Multima-RegularItalic.woff',
      weight: '400',
      style: 'italic',
    },
  ],
  fallback: ['--font-roboto'],
  variable: '--font-multima',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='kr'>
      <head></head>
      <body
        className={cn([roboto.variable, multima.className, 'font-medium-16'])}
      >
        <FirebaseProvider />
        {children}
      </body>
    </html>
  );
}
