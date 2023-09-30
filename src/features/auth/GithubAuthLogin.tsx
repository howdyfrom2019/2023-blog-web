import { FirebaseError, getApps, initializeApp } from 'firebase/app';
import {
  Auth,
  GithubAuthProvider,
  User,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyBRvaaGilStpCx5b2YVlmD2PNIoU9CIGqg',
  authDomain: 'my-blog-from-2023.firebaseapp.com',
  projectId: 'my-blog-from-2023',
  storageBucket: 'my-blog-from-2023.appspot.com',
  messagingSenderId: '402799059321',
  appId: '1:402799059321:web:eb1d5e24f5705f3b780fa8',
  measurementId: 'G-TNLP4E2PLX',
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

const auth = typeof window !== 'undefined' ? getAuth(app) : null;
const provider = new GithubAuthProvider();

interface FirebaseAuthProps {
  auth: Auth | null;
  analytics: Analytics | null;
  provider: GithubAuthProvider;
}

interface AuthProps {
  accessToken?: string;
  user?: User;
}

interface WithFirebaseProps {
  // result: FirebaseAuthProps;
  result: AuthProps;
}

const GithubAuthLogin = () => {
  const [oauthAuth, setOauthAuth] = useState<AuthProps>({
    accessToken: undefined,
    user: undefined,
  });
  const signIn = async () => {
    if (!auth) return;
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      setOauthAuth({ accessToken: credential?.accessToken, user: result.user });
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      return GithubAuthProvider.credentialFromError(firebaseError);
    }
  };
  console.log(oauthAuth);
  useEffect(() => {
    signIn();
  }, []);

  return <></>;
};

export default GithubAuthLogin;