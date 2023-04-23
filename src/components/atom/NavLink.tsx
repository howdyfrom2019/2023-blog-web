'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  to: string;
  value: string;
  hasSubpage?: boolean;
}

const NavLink = ({ to, value, hasSubpage }: Props) => {
  const router = usePathname();

  return (
    <Link className={`relative font-regular-16 ${router === to && 'nav-selected'}`} href={to}>{value}</Link>
  )
}

export default NavLink;
