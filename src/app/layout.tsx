import './globals.css'
import localFont from "@next/font/local";
import { Noto_Sans_KR } from "@next/font/google";

export const metadata = {
  title: 'Jake.log',
  description: '프론트엔드 전반적인 영역에서 고민합니다.',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    siteName: 'Jake.log',
  }
}

const roboto = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

const multima = localFont({
  src: [
    {
      path: '../../public/fonts/Multima-Bold.woff',
      weight: '700',
    },
    {
      path: '../../public/fonts/Multima-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../public/fonts/Multima-Medium.woff',
      weight: '500',
    },
    {
      path: '../../public/fonts/Multima-MediumItalic.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/Multima-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/Multima-RegularItalic.woff',
      weight: '400',
      style: 'italic'
    },
  ],
  fallback: ['var(--font-roboto)', 'sans-serif'],
  variable: '--font-multima'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body className={`${multima.className} ${roboto.variable}`}>
      {children}
      </body>
    </html>
  )
}
