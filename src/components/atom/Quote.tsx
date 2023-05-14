import clsx from "clsx";

interface QuoteProps {
  children?: React.ReactNode;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <blockquote className={clsx([
      'text-primaryScale-400 font-medium-16 font-sans',
      'quote-block before:bg-primaryScale-100'
    ])}
    >
      {children}
    </blockquote>
  )
}

export default Quote;
