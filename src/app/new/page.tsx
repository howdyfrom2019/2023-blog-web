'use client'
import { NextPage } from "next";
import BlogPostRichEditor from '@/components/organisms/BlogPostRichEditor';

const New:NextPage = () => {
  return (
    <div className={'flex items-center'}>
      <BlogPostRichEditor />
    </div>
  )
}

export default New;
