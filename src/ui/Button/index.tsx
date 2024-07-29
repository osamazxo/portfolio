import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}
const Button: FC<ButtonProps> = ({ children, className, ...other }) => {
  return (
    <button
      className={clsx(
        `bg-indigo-700 px-6 py-4 rounded-lg
         text-white text-xl hover:translate-y-2
         hover:bg-indigo-600 ease-linear duration-300`,
        className
      )}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
