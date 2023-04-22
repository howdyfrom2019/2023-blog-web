'use client'
import Jake from '@/assets/logo.svg';

const Logo = () => {
  return (
    <figure className={'flex gap-2 items-center'}>
      <Jake width={'24'} height={'24'} viewBox={'0 0 128 128'} />
      <figcaption className={'font-bold translate-y-px'}>Jake.log</figcaption>
    </figure>
  )
}

export default Logo;
