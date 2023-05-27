'use client'
import { NextPage } from "next";
import ReactQuill from "react-quill";
import NoSSR from "@/components/atom/NoSSR";
import { useState } from "react";

const New:NextPage = () => {
  const [value, setValue] = useState('');
  return (
    <div className={'font-roboto'}>
      <NoSSR>
        <ReactQuill theme="snow" value={value} onChange={setValue} />;
      </NoSSR>
    </div>
  )
}

export default New;
