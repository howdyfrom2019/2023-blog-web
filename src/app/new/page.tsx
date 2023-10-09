'use client';
import RichEditor from '@/components/template/RichEditor';
import GithubAuthLoginButton from '@/features/auth/GithubAuthLoginButton';
import withAuth from '@/hoc/withAuth';
import { useFirebaseStore } from '@/states/store';
import { NextPage } from 'next';

const New: NextPage = () => {
  return (
    <div className={'flex items-center flex-col'}>
      <GithubAuthLoginButton />
      <RichEditor />
    </div>
  );
};

export default withAuth(New);
