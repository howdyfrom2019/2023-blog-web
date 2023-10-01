import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { type User, type Auth, type AuthProvider } from 'firebase/auth';

interface FirebaseStoreProps {
  auth: Auth | null;
  provider: AuthProvider | null;
}

interface OauthTokenProps {
  accessToken: string;
  user: User;
}

interface FiresbaseStoreState {
  firebase: FirebaseStoreProps;
  initialize: (firebase: FirebaseStoreProps) => void;
  auth?: OauthTokenProps;
  setAuth: (auth: OauthTokenProps) => void;
}

export const useFirebaseStore = create<FiresbaseStoreState>()((set) => ({
  firebase: { auth: null, provider: null },
  initialize: (firebase) =>
    set((state) => {
      const result = { ...state };
      if (firebase.auth) {
        result['firebase'].auth = firebase.auth;
      }
      if (firebase.provider) {
        result['firebase'].provider = firebase.provider;
      }

      return result;
    }),
  setAuth: (auth) =>
    set((state) => {
      const result = { ...state };
      if (auth) {
        result['auth'] = auth;
      }
      return result;
    }),
}));
