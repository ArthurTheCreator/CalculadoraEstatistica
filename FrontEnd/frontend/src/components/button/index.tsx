import { buttonProps } from "./types";

export const Button = (props: buttonProps) => {
  const { type, children, className, background, onClick } = props;

  return (
    <button
      type={type}
      className={`${background} p-1.5 text-white cursor-pointer shadow-xl w-full py-3 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
