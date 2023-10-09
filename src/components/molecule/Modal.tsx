import Button from '@/components/atom/Button';
import Portal from '@/components/atom/Portal';
import cn from '@/utils/cn';
import { XIcon } from 'lucide-react';

interface ModalProps {
  open: boolean;
  title: string;
  isBgTransparent?: boolean;
  isBgBlur?: boolean;
  onConfirm?: () => void;
  confirmText?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}
const Modal: React.FC<ModalProps> = ({
  open,
  title,
  isBgBlur,
  isBgTransparent,
  confirmText,
  onConfirm,
  onClose,
  children,
  className,
}) => {
  return (
    <Portal>
      <div
        role={'alert'}
        className={cn([
          'absolute left-0 top-0 flex items-center justify-center w-screen h-screen z-50 bg-black-alpha',
          isBgTransparent && 'bg-none',
          isBgBlur && 'blur-md',
          !open && 'hidden',
          className,
        ])}
      >
        <article
          className={cn([
            'rounded-xl bg-bg-white-1 shadow-search-bar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg',
            'flex flex-col gap-6 blur-0 px-8 py-10',
          ])}
        >
          <section className={'flex items-center gap-8 justify-between'}>
            <span className={'font-bold-24'}>{title}</span>
            <button
              className={'rounded-full p-2.5 hover:bg-slate-100'}
              onClick={(e) => {
                e.preventDefault();
                onClose?.();
              }}
            >
              <XIcon className={'w-7 text-primary'} />
            </button>
          </section>
          <hr className={'rounded-full w-full h-[1.5px] bg-primary'} />
          {children}
          {confirmText && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                onConfirm?.();
              }}
            >
              {confirmText}
            </Button>
          )}
        </article>
      </div>
    </Portal>
  );
};

export default Modal;
