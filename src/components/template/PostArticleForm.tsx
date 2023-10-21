'use client';
import Dropdown from '@/components/molecule/Dropdown';
import InputWithLegend from '@/components/molecule/InputWithLegend';
import RichEditor from '@/components/organisms/RichEditor';
import { useFirebaseStore } from '@/states/store';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const PostArticleForm = () => {
  const { db } = useFirebaseStore((state) => state.firebase);
  const [options, setOptions] = useState<Category.List>([]);

  const initializeOptions = async () => {
    if (!db) {
      return Response.json({
        status: 400,
        message: 'Firestore is not initialized.',
      });
    }
    const categoryRef = collection(db, 'category');

    try {
      const querySnapshot = await getDocs(categoryRef);
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc) => data.push(doc.data()));
      setOptions(data as Category.List);

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
  };

  useEffect(() => {
    initializeOptions();
  }, []);

  return (
    <form className={'flex flex-col gap-6'}>
      <InputWithLegend legend={'Title(글 제목)'} type={'INPUT'} />
      <Dropdown
        className={'mr-auto'}
        legend={'Category(글 분류)'}
        options={options.map((option) => ({
          key: String(option.id),
          value: option.id,
          displayName: option.label,
        }))}
      />
      <RichEditor />
    </form>
  );
};

export default PostArticleForm;
