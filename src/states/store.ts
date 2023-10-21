import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { type User, type Auth, type AuthProvider } from 'firebase/auth';
import { type Firestore } from 'firebase/firestore';

interface FirebaseStoreProps {
  auth: Auth | null;
  provider: AuthProvider | null;
  db: Firestore | null;
}

interface OauthTokenProps {
  accessToken: string;
  user: User;
}

interface FiresbaseStoreState {
  firebase: FirebaseStoreProps;
  initialize: (firebase: FirebaseStoreProps) => void;
}

interface AuthStoreState {
  auth?: OauthTokenProps;
  setAuth: (auth: OauthTokenProps) => void;
}

export const OAUTH_KEY = '@oauth-jake-blog';

export const useFirebaseStore = create<FiresbaseStoreState>()((set) => ({
  firebase: { auth: null, provider: null, db: null },
  initialize: (firebase) =>
    set((state) => {
      const result = { ...state };
      if (firebase.auth) {
        result['firebase'].auth = firebase.auth;
      }

      if (firebase.provider) {
        result['firebase'].provider = firebase.provider;
      }

      if (firebase.db) {
        result['firebase'].db = firebase.db;
      }

      return result;
    }),
}));

export const useAuthStore = create<AuthStoreState>()(
  devtools(
    persist<AuthStoreState>(
      (set) => ({
        setAuth: (auth) => {
          const { accessToken, user } = auth;
          set({
            auth: {
              accessToken,
              user,
            },
          });
        },
      }),
      {
        name: OAUTH_KEY,
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
