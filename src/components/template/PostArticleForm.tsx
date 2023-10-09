import Dropdown from '@/components/molecule/Dropdown';
import InputWithLegend from '@/components/molecule/InputWithLegend';
import RichEditor from '@/components/organisms/RichEditor';

const PostArticleForm = () => {
  return (
    <form className={'flex flex-col gap-6'}>
      <InputWithLegend legend={'Title(글 제목)'} type={'INPUT'} />
      <Dropdown
        className={'mr-auto'}
        legend={'Category(글 분류)'}
        options={[]}
      />
      <RichEditor />
    </form>
  );
};

export default PostArticleForm;
