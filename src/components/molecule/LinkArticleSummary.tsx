'use client';
import ArrowLink from '@/assets/arrow-link.svg';
import Chip from '@/components/atom/Chip';

export interface SummaryProps {
  title: string;
  to: string;
  description?: string;
  categories?: string[];
}

const LinkArticleSummary = ({
  title,
  to,
  description,
  categories,
}: SummaryProps) => {
  return (
    <section className={'flex flex-col gap-3'}>
      <div className={'flex flex-nowrap gap-2 cursor-pointer'}>
        <span className={'font-bold-16 flex-1'}>{title}</span>
        <ArrowLink />
      </div>
      <span className={'font-regular-16'}>{description}</span>
      <div className={'flex flex-nowrap gap-3'}>
        {categories &&
          categories.map((category) => <Chip key={category}>{category}</Chip>)}
      </div>
    </section>
  );
};

export default LinkArticleSummary;
