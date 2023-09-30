'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface Props {
  to: string;
  value?: React.ReactNode;
  hasSubpage?: boolean;
}

const NavLink = ({ to, value, hasSubpage }: Props) => {
  const router = usePathname();

  return (
    <Link
      className={clsx([
        'relative font-regular-16',
        router === to && 'nav-selected',
      ])}
      href={to}
    >
      {value}
    </Link>
  );
};

export default NavLink;
