import LinkArticleSummary, {
  SummaryProps,
} from '@/components/molecule/LinkArticleSummary';

interface Props extends SummaryProps {}

const LinkArticleThumbnail = ({ ...props }: Props) => {
  return (
    <div className={'relative flex flex-col w-[280px]'}>
      <img
        className={'filter saturate-0'}
        src={'https://i.imgur.com/R5wBNhu.jpeg'}
        alt={'test'}
        width={280}
      />
      <span
        className={'absolute w-full h-full bg-primaryAlpha-40 top-0 left-0'}
      />
      <LinkArticleSummary {...props} />
    </div>
  );
};

export default LinkArticleThumbnail;
