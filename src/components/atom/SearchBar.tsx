import { ComponentProps } from 'react';

const SearchBar = ({ className, ...props }: ComponentProps<'input'>) => {
  return (
    <input className={`w-[500px] rounded-lg border-[1px] border-primary hover:shadow-search-bar focus:shadow-search-bar ${className}`} {...props} />
  )
}

export default SearchBar;
