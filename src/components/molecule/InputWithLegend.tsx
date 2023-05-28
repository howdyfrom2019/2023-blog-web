'use client'
import { ComponentProps } from 'react';
import Input from '@/components/atom/Input';

interface Props extends ComponentProps<'input'>{
  legend: string;
  type: 'INPUT' | 'TEXTAREA' | 'SELECTOR';
}

const InputWithLegend = ({ legend, type, ...rest }: Props) => {
  return (
    <div className={'flex flex-col gap-2.5'}>
      <legend className={'font-medium-16 font-sans'}>{legend}</legend>
      <Input rest />
    </div>
  )
}

export default InputWithLegend;
