interface IconButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

const IconButton = ({ active, children, ...props }: IconButtonProps) => (
  <button
    className={`h-10 w-10 rounded-md px-1 hover:bg-white/10 hover:text-white [&>*]:mx-auto [&>*]:block [&>*]:h-7 [&>*]:w-7 ${
      active ? 'bg-white/10 text-white' : ''
    }`}
    {...props}>
    {children}
  </button>
);

export default IconButton;
