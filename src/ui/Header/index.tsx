"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuBars from "./MenuBars";
import styles from "./Header.module.css";
import clsx from "clsx";
const navLinks = [
  ["/", "Home"],
  ["/#about", "About"],
  ["/#projects", "Projects"],
  ["/#contact", "Contact"],
];
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header
      className={clsx(
        "flex items-center justify-between fixed w-screen top-0 left-0 p-4 bg-white",
        styles["header"]
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/images/avatar.jpg"
          alt="avatar"
          height={48}
          width={48}
          className="rounded-full"
        />
        <h1 className="font-bold font size text-xl">Osama Safwat</h1>
      </div>
      <MenuBars
        active={menuOpened}
        className="sm:hidden"
        onClick={() => setMenuOpened((old) => !old)}
      />
      <ul
        className={`${
          menuOpened ? "flex right-4 top-[75px] flex-col absolute" : "hidden"
        } gap-4 sm:flex sm:flex-row sm:items-center sm:static`}
      >
        {navLinks.map((ele) => (
          <li key={ele[1]} className="font-semibold hover:text-indigo-600">
            <Link href={ele[0]}>{ele[1]}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
