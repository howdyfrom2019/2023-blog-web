const Chip = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={'font-bold-16 font-sans pt-[3px] pb-[2px] px-4 rounded-full border-primary border-[1px] tracking-tighter w-fit'}>
      {children}
    </div>
  )
}

export default Chip;
