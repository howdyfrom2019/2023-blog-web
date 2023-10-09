'use client';

import NoSSR from '@/components/atom/NoSSR';
import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    if (document) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document?.body.style.removeProperty('overflow');
    };
  }, []);
  return <NoSSR>{createPortal(<>{children}</>, document.body)};</NoSSR>;
};

export default Portal;
