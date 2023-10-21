import { useFirebaseStore } from '@/states/store';
import { initializeApp } from 'firebase/app';
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET() {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  if (!db) {
    return Response.json({
      status: 400,
      message: 'Firestore is not initialized.',
    });
  }

  const categoryRef = collection(db, 'category');

  try {
    const docs = await getDocs(categoryRef);
    const data: DocumentData[] = [];
    docs.forEach((doc) => data.push(doc.data()));
    return Response.json({
      status: 200,
      message: 'success',
      data: data,
    });
  } catch (e) {
    Response.json({
      status: 500,
      message: 'No such documente',
      error: e,
    });
  }
}
