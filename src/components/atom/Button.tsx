'use client'
import { ComponentProps } from 'react';

type btnType = 'primary' | 'clear'
interface BtnType extends ComponentProps<'button'> {
  btnType: btnType;
  children?: React.ReactNode;
}
const CLEAR_UTILITY = 'pt-[9px] pb-[10px] rounded-md border-px border-white px-4 hover:bg-white hover:text-primary';
const Button = ({ btnType, className, children, ...props } : BtnType) => {
  return (
    <button className={`${btnType === 'clear' && CLEAR_UTILITY} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button;