'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Grid = ({ children }: { children?: React.ReactNode }) => {
  const [gridW, setGridW] = useState(0);

  const onHandleGridW = () => {
    setGridW(window.innerWidth - 48);
  }

  useEffect(() => {
    if (!window) return;
    onHandleGridW();

    window.addEventListener('resize', onHandleGridW, false);

    return () => { window.removeEventListener('resize', onHandleGridW, false) }
  }, []);

  return (
    <div className={'relative flex flex-col flex-wrap w-full mt-px'}>
      <Image src={'/img/grid.png'} alt={'grid'} width={gridW} height={Math.floor(241 * 1234 / gridW)} />
      {children}
    </div>
  )
}

export default Grid;
