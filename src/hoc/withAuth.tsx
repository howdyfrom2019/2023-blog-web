import NoSSR from '@/components/atom/NoSSR';
import Modal from '@/components/molecule/Modal';
import GithubAuthLoginButton from '@/features/auth/GithubAuthLoginButton';
import { useAuthStore } from '@/states/store';
import cn from '@/utils/cn';

export default function withAuth<P extends {}>(
  Component: React.ComponentType<P>
) {
  return function AuthComponent(props: P) {
    const auth = useAuthStore((state) => state.auth);
    const hasLoggedIn = Boolean(auth?.accessToken);
    const isMasterUser =
      auth?.user.uid === process.env.NEXT_PUBLIC_FIREBASE_MASTER_UID;

    return (
      <>
        <NoSSR>
          <div
            className={cn([
              'absolute inset-0 z-2 bg-black-alpha',
              auth && hasLoggedIn && isMasterUser && 'hidden',
            ])}
          >
            {!auth || !hasLoggedIn ? (
              <Modal
                open={!auth || !hasLoggedIn}
                title={'로그인이 필요한 화면입니다.'}
              >
                <>
                  <span className={'font-regular-16'}>
                    편집 권한이 있는 유저만 글 작성이 가능합니다. 그래도 정말
                    로그인하시겠습니까?
                    <br />
                    The only users who have editor authority can post an
                    article. Are u sure to login?
                  </span>
                  <GithubAuthLoginButton />
                </>
              </Modal>
            ) : (
              !isMasterUser && (
                <span>You do not have authority to create post</span>
              )
            )}
          </div>
        </NoSSR>
        <Component {...(props as P)} />
      </>
    );
  };
}
