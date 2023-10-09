import cn from '@/utils/cn';
import { TriangleIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface OptionType {
  key: string;
  displayName: string;
  value: string | number;
  data?: any;
}

interface DropdownProps {
  className?: string;
  legend?: string;
  multiple?: boolean;
  options: OptionType[];
  onChange?: (options: OptionType[] | OptionType) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  legend,
  multiple,
  options,
  onChange,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<OptionType[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const resetOpenMenu = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node | null)
    ) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    if (!document) return;
    document.addEventListener('click', resetOpenMenu);

    return () => {
      document.removeEventListener('click', resetOpenMenu);
    };
  }, []);

  return (
    <div
      className={cn(['relative flex flex-col gap-2.5', className])}
      ref={dropdownRef}
    >
      {legend && (
        <legend className={'font-medium-16 font-sans'}>{legend}</legend>
      )}
      <button
        className={cn([
          'px-4 py-2 flex items-center gap-4 justify-between min-w-[208px]',
          'font-medium tracking-tighter font-sans outline-none',
          'bg-bg-white-1 rounded-lg border-[1px] border-primary',
          'hover:shadow-search-bar',
          openMenu && 'shadow-search-bar',
        ])}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpenMenu((prev) => !prev);
        }}
      >
        <div></div>
        <TriangleIcon
          className={cn([
            'text-primary w-4 fill-primary rotate-180 transition-all',
            openMenu && 'rotate-0',
          ])}
        />
      </button>
      <div
        className={cn([
          'hidden flex-col absolute top-full translate-y-2 left-0 w-full max-h-[200px] px-4 py-5 gap-2.5',
          'bg-bg-white-1 rounded-lg border-[1px] border-primary z-4 overflow-y-scroll',
          openMenu && 'flex',
        ])}
      >
        <span
          className={
            'font-medium-12 tracking-tighter font-sans text-primary-scale-400'
          }
        >
          원하는 카테고리를 입력하세요.
        </span>
        <hr className={'w-full h-0.5 bg-primary'} />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          Dev
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
