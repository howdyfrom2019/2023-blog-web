'use client';
import Header from '@/components/organisms/Header';
import PostArticleForm from '@/components/template/PostArticleForm';
import withAuth from '@/hoc/withAuth';
import { NextPage } from 'next';

const New: NextPage = () => {
  return (
    <div className={'flex flex-col gap-8 p-6'}>
      <Header />
      <PostArticleForm />
    </div>
  );
};

export default withAuth(New);
