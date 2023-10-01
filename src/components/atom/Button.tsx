'use client';
import cn from '@/utils/cn';
import { ComponentProps } from 'react';

type btnType = 'fill' | 'clear';
interface BtnType extends ComponentProps<'button'> {
  btnType?: btnType;
  children?: React.ReactNode;
}

const BASIC_UTILITY = 'px-4 py-2 pb-[9px] rounded-lg bg-primary';
const FILL_UTILITY =
  'border-bg-white-1 border-[1.5px] text-white font-medium-24';
const CLEAR_UTILITY =
  'border-primary border-[1.5px] text-primary bg-bg-white-1 font-medium-24';
const HOVER_EFFECT_UTILITY =
  'transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-btn-primary';
const Button = ({
  btnType = 'fill',
  className,
  children,
  ...props
}: BtnType) => {
  return (
    <button
      className={cn([
        BASIC_UTILITY,
        btnType === 'fill' && FILL_UTILITY,
        btnType === 'clear' && CLEAR_UTILITY,
        HOVER_EFFECT_UTILITY,
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
