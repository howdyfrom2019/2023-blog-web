declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ENVIRONMENT: 'development' | 'production';
    NEXT_PUBLIC_FIREBASE_MASTER_UID: string;
  }
}
