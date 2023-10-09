import { FirebaseError } from 'firebase/app';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthStore, useFirebaseStore } from '@/states/store';
import Button from '@/components/atom/Button';

const GithubAuthLoginButton = () => {
  const { auth, provider } = useFirebaseStore((state) => state.firebase);
  const setAuth = useAuthStore((state) => state.setAuth);

  const signIn = async () => {
    if (!auth || !provider) return;
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      setAuth({
        accessToken: credential?.accessToken ?? '',
        user: result.user,
      });
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      return GithubAuthProvider.credentialFromError(firebaseError);
    }
  };

  return (
    <Button onClick={signIn} btnType={'clear'}>
      Login with Github
    </Button>
  );
};

export default GithubAuthLoginButton;
