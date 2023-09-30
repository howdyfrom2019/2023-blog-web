import { ComponentProps } from 'react';
import clsx from 'clsx';

interface InputProps extends ComponentProps<'input'> {}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx([
        'font-medium-16',
        'px-4 py-2',
        'font-medium tracking-tighter font-sans outline-none',
        'bg-bg-white-1 w-[500px] rounded-lg border-[1px] border-primary',
        'hover:shadow-search-bar focus:shadow-search-bar',
        className && className,
      ])}
      {...props}
    />
  );
};

export default Input;
