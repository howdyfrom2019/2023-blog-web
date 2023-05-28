import ReactQuill from 'react-quill';
import NoSSR from '@/components/atom/NoSSR';
import { useState } from 'react';
import InputWithLegend from '@/components/molecule/InputWithLegend';

const BlogPostRichEditor = () => {
  const [value, setValue] = useState('');
  return (
    <div className={'flex flex-col gap-4'}>
      <InputWithLegend legend={'Title'} type={'INPUT'} />
      <InputWithLegend legend={'Category'} type={'SELECTOR'} />
      <NoSSR>
        <ReactQuill
          className={'h-full flex-1'}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </NoSSR>
    </div>
  )
}

export default BlogPostRichEditor;
