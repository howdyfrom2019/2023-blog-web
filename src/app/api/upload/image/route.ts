import { NextResponse, NextRequest } from 'next/server';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

export async function POST(req: NextRequest) {
  const storage = getStorage();
  const assetRef = ref(storage, 'assets-by-jake/assets');
  const data = await req.formData();
  const file: File | null = data.get('file') as File;

  if (!file) {
    return NextResponse.json({ status: 404, message: 'file is not detected.' });
  }

  const bytes = await file.arrayBuffer();
  const snapShot = await uploadBytes(assetRef, bytes);

  return NextResponse.json({
    status: 200,
    message: 'Successfully uploaded',
    data: snapShot,
  });
}
