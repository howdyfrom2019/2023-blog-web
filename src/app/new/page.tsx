'use client';
import GithubAuthLoginButton from '@/features/auth/GithubAuthLoginButton';
import { useFirebaseStore } from '@/states/store';
import { NextPage } from 'next';

const New: NextPage = () => {
  return (
    <div className={'flex items-center'}>
      <GithubAuthLoginButton />
      {/* <BlogPostRichEditor /> */}
    </div>
  );
};

export default New;
