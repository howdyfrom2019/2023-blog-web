'use client';
import InputWithLegend from '@/components/molecule/InputWithLegend';
import Header from '@/components/organisms/Header';
import RichEditor from '@/components/template/RichEditor';
import withAuth from '@/hoc/withAuth';
import { NextPage } from 'next';

const New: NextPage = () => {
  return (
    <div className={'flex flex-col gap-8 p-6'}>
      <Header />
      <InputWithLegend legend={'글 제목(Title)'} type={'INPUT'} />
      <RichEditor />
    </div>
  );
};

export default withAuth(New);
