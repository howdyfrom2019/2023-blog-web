import { ComponentProps } from 'react';
import clsx from 'clsx';

const SearchBar = ({ className, ...props }: ComponentProps<'input'>) => {
  return (
    <input
      className={clsx([
        'bg-bg-white-1 w-[500px] rounded-lg border-[1px] border-primary',
        'hover:shadow-search-bar focus:shadow-search-bar',
        'px-4 py-2',
        'font-medium tracking-tighter font-sans outline-none',
        className,
      ])}
      {...props}
    />
  );
};

export default SearchBar;
