import React, { FunctionComponent, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "../store/StoreProvider";
import { AiOutlineHome } from "react-icons/Ai";
import { FiSettings } from "react-icons/Fi";
import { IoMdStats } from "react-icons/io";
import type { IconType } from "react-icons";

interface RightMenuProps {}

const RightMenu: FunctionComponent<RightMenuProps> = () => {
  const { pathname } = useRouter();

  const db = useContext(StoreContext);

  interface INavElement {
    icon: IconType;
    caption: string;
    path: string;
  }

  const navigations: Array<INavElement> = [
    { icon: AiOutlineHome, caption: "Ekran Główny", path: "/" },
    { icon: FiSettings, caption: "Ustawienia", path: "" },
    { icon: IoMdStats, caption: "Statystyki", path: "" },
  ];

  const NavComponent = navigations.map((element: INavElement) => {
    console.log(element.path);
    return (
      <li
        className={`flex items-center px-3 py-2 ${
          element.path === pathname && "bg-blue-800"
        }`}
      >
        {<element.icon />}
        <p className="text-base ml-3 font-light">{element.caption}</p>
      </li>
    );
  });

  return (
    <aside
      className={`${
        db?.isNavExpanded ? "translate-x-0" : "translate-x-[148px]"
      } text-white absolute right-0 top-[49px] w-[202px] h-[calc(100vh-6rem-2px)] bg-blue-600 transition-width duration-500 ease-in-out text-3xl z-10`}
    >
      <ul className="cursor-pointer flex flex-col">{NavComponent}</ul>
    </aside>
  );
};

export default RightMenu;
