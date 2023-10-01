'use client';
import RichEditor from '@/components/template/RichEditor';
import GithubAuthLoginButton from '@/features/auth/GithubAuthLoginButton';
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

export default New;
