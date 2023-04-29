'use client'
import Chip from '@/components/atom/Chip';
import Grid from '@/components/atom/Grid';
import { useMemo } from 'react';
import { getRandom, getTimeState } from '@/utils/common';
import { GA, GM, GN } from '@/utils/constants';
import NoSSR from '@/components/atom/NoSSR';

const Greeting = () => {
  const { state, msg } = useMemo(() => getTimeState(), []);
  const index = useMemo(() => getRandom(0, 5), []);

  return (
    <Grid>
      <div className={'flex flex-col absolute top-1/2 left-0 -translate-y-1/2 gap-3'}>
        <Chip>HELLO 🖐️</Chip>
        <span className={'font-bold-32'}>{state}!</span>
        <span className={'font-medium-16 font-roboto'}>{msg}</span>
        <NoSSR>
          <li className={'font-medium-12 font-roboto'}>
            {state === 'GM' && `${GM[index].key}: ${GM[index].content}`}
            {state === 'GA' && `${GA[index].key}: ${GA[index].content}`}
            {state === 'GN' && `${GN[index].key}: ${GN[index].content}`}
          </li>
        </NoSSR>
      </div>
    </Grid>
  )
}

export default Greeting;
