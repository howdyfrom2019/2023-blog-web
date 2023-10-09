import NoSSR from '@/components/atom/NoSSR';
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
              'absolute left-0 top-0 z-2 flex h-full w-full items-center justify-center shadow-search-bar bg-black-alpha',
              auth && hasLoggedIn && isMasterUser && 'hidden',
            ])}
          >
            {!auth || !hasLoggedIn ? (
              <div
                className={
                  'absolute left-0 top-0 z-2 flex h-full w-full items-center justify-center shadow-search-bar'
                }
              >
                Login plz!
              </div>
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
