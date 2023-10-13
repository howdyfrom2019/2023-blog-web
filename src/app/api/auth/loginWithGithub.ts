import { useFirebaseStore } from '@/states/store';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { auth, provider } = useFirebaseStore((state) => state.firebase);

  if (!auth || !provider) {
    res.status(400).json({
      message: `Firebase isn't initialized yet. Please check the provider.`,
    });
    return;
  }

  const result = await signInWithPopup(auth, provider);
  const credential = GithubAuthProvider.credentialFromResult(result);

  if (credential?.accessToken) {
    res.status(200).json({
      data: {
        accessToken: credential.accessToken,
        user: result.user,
      },
      message: 'Login Success',
    });
  } else {
    res.status(500).json({
      message: 'Something happens in server. Please retry after a moment.',
    });
  }
}
