import { getApps, initializeApp } from "firebase/app";
import { Auth, GithubAuthProvider, getAuth } from "firebase/auth";
import { Analytics, getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBRvaaGilStpCx5b2YVlmD2PNIoU9CIGqg",
  authDomain: "my-blog-from-2023.firebaseapp.com",
  projectId: "my-blog-from-2023",
  storageBucket: "my-blog-from-2023.appspot.com",
  messagingSenderId: "402799059321",
  appId: "1:402799059321:web:eb1d5e24f5705f3b780fa8",
  measurementId: "G-TNLP4E2PLX",
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

const auth = typeof window !== "undefined" ? getAuth(app) : null;
const provider = new GithubAuthProvider();

interface FirebaseAuthProps {
  auth: Auth | null;
  analytics: Analytics | null;
  provider: GithubAuthProvider;
}

interface WithFirebaseProps {
  result: FirebaseAuthProps;
}

const withGithubAuth = <Props extends WithFirebaseProps>(
  Component: React.ComponentType<Props>
) => {
  return function ComponentWithFirebaseAuthProps(
    props: Omit<Props, keyof WithFirebaseProps>
  ) {
    const result: FirebaseAuthProps = { auth, analytics, provider };
    return <Component {...result} {...(props as Props)} />;
  };
};

export default withGithubAuth;
