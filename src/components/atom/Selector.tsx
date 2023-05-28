'use client'
import clsx from 'clsx';
import { useState } from 'react';

interface SelectorItem {
  isSelected: boolean;
  name: string;
  userData?: any;
}

interface SelectorProps {
  items: SelectorItem[];
}
const Selector = ({ items } : SelectorProps) => {
  const [openSelector, setOpenSelector] = useState(false);
  return (
    <div
      className={clsx([
      'relative px-4 py-2',
      'font-medium tracking-tighter font-sans outline-none',
    ])}
    >
      <div
        className={clsx([
          openSelector ? 'flex' : 'hidden',
          'pt-4 pb-5 px-4',
          'flex-col gap-2.5'
        ])}
      >
        <input
          className={'font-regular-12 text-border border border-b-px border-primary'}
          placeholder={'원하는 카테고리를 입력하세요.'}
        />
        {items.map((item) => (
          <span
            className={'font-medium-16 font-roboto'}
            key={item.name}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Selector;
