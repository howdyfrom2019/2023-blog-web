'use client';
import Dropdown from '@/components/molecule/Dropdown';
import InputWithLegend from '@/components/molecule/InputWithLegend';
import RichEditor from '@/components/organisms/RichEditor';
import { useAuthStore, useFirebaseStore } from '@/states/store';
import { collection, getDocs, DocumentData, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/atom/Button';
import { toast } from 'sonner';

const schema = yup.object().shape({
  title: yup.string().required(),
  category: yup.array().max(5).required(),
  content: yup.string().required(),
});

const PostArticleForm = () => {
  const {
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      category: [],
      content: '',
    },
    resolver: yupResolver(schema),
  });
  const { db } = useFirebaseStore((state) => state.firebase);
  const auth = useAuthStore((state) => state.auth);
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

  const createNewPost = async (payload: Post.CreatePayload) => {
    if (!db || !auth) {
      toast.error('firestore is not initialized');
      return;
    }

    const postRef = collection(db, 'post');

    try {
      const newPost = await addDoc(postRef, {
        title: payload.title,
        category: payload.category,
        content: payload.content,
      });
      toast.success(`Successfully submitted with ${newPost.id}`);
    } catch (error) {
      console.log(error);
      toast.error('Firebase error happened');
    }
  };

  useEffect(() => {
    initializeOptions();
  }, []);

  return (
    <form
      className={'flex flex-col gap-6'}
      onSubmit={handleSubmit(createNewPost)}
    >
      <InputWithLegend
        legend={'Title(글 제목)'}
        type={'INPUT'}
        onChange={(e) => {
          setValue('title', e.target.value);
        }}
      />
      <Dropdown
        className={'mr-auto'}
        legend={'Category(글 분류)'}
        options={options.map((option) => ({
          key: String(option.id),
          value: option.id,
          displayName: option.label,
        }))}
        onChange={(option) => {
          setValue('category', option);
        }}
      />
      <RichEditor
        onChange={(content) => {
          setValue('content', String(content));
        }}
      />
      <Button type={'submit'}>글 발행하기</Button>
    </form>
  );
};

export default PostArticleForm;
