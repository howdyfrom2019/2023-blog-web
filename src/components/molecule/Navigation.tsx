'use client'
import NavLink from '@/components/atom/NavLink';

const Navigation = () => {
  return (
    <nav className={'flex gap-6'}>
      <NavLink to={'/'} value={'Home'} />
      <NavLink to={'/dev'} value={'Dev'} />
      <NavLink to={'/life'} value={'Life'} />
      <NavLink to={'/contact'} value={'Contact'} />
    </nav>
  )
}

export default Navigation;
