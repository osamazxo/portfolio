import React, { FC } from "react";
import styles from "./MenuBars.module.css";
import clsx from "clsx";
interface MenuBarsProps extends React.SVGProps<SVGSVGElement> {
  active?: boolean;
}
const MenuBars: FC<MenuBarsProps> = ({ active, className, ...others }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      className={clsx(
        styles["menu-bars"],
        active && styles["active"],
        className
      )}
      {...others}
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M3 8L27 8"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M3 15L27 15"
      ></path>

      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M3 22L27 22"
      ></path>
    </svg>
  );
};

export default MenuBars;
