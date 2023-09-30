import Image from 'next/image';
import GridImg from '@/assets/grid.png';

const Grid = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={'relative flex flex-col flex-wrap w-full mt-px'}>
      <Image className={'w-full'} src={GridImg} alt={'grid'} />
      {children}
    </div>
  );
};

export default Grid;
