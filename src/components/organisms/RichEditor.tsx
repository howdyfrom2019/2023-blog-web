'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { TiptapEditorProps, getPrevText } from '@/utils/editor';
import { useDebouncedCallback } from 'use-debounce';
import cn from '@/utils/cn';
import { EditorBubbleMenu } from '@/components/molecule/editor';
import { ImageResizer } from '@/components/atom/editor/extensions/image-resizer';
import { defaultExtensions } from '@/components/atom/editor/extensions';

const RichEditor = () => {
  const [content, setContent] = useState('default content');
  const [saveStatus, setSaveStatus] = useState('Saved');
  const [hydrated, setHydrated] = useState(false);

  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON();
    setSaveStatus('Saving...');
    setContent(json);
    // Simulate a delay in saving.
    setTimeout(() => {
      setSaveStatus('Saved');
    }, 500);
  }, 750);

  const editor = useEditor({
    editorProps: TiptapEditorProps,
    extensions: defaultExtensions,
    onUpdate: (e) => {
      setSaveStatus('Unsaved');
      debouncedUpdates(e);
    },
    autofocus: 'end',
  });

  useEffect(() => {
    if (editor && content && !hydrated) {
      editor.commands.setContent(content);
      setHydrated(true);
    }
  }, [editor, content, hydrated]);

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className={cn([
        'relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-bg-white-1 p-8 px-4',
        'sm:mb-[calc(20vh)] sm:rounded-lg sm:border',
      ])}
    >
      <div
        className={
          'absolute right-5 top-5 mb-5 rounded-lg bg-stone-100 px-2 py-1 font-medium-12 text-primary-scale-100'
        }
      >
        {saveStatus}
      </div>
      {editor && <EditorBubbleMenu editor={editor} />}
      {editor?.isActive('image') && <ImageResizer editor={editor} />}
      <EditorContent
        editor={editor}
        className={'prose text-primary prose-p:my-1'}
      />
    </div>
  );
};

export default RichEditor;
