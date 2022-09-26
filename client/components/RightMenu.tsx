import React, { FunctionComponent, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { AiOutlineHome } from "react-icons/Ai";
import { FiAlertTriangle } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { IoMdStats } from "react-icons/io";
import type { IconType } from "react-icons";

import { Link, useLocation } from "react-router-dom";

interface RightMenuProps {}

const RightMenu: FunctionComponent<RightMenuProps> = () => {
  const location = useLocation();

  const hmi = useContext(StoreContext);

  interface INavElement {
    icon: IconType;
    caption: string;
    path: string;
  }

  const navigations: Array<INavElement> = [
    { icon: AiOutlineHome, caption: "Ekran Główny", path: "/" },
    { icon: FiSettings, caption: "Ustawienia", path: "/settings" },
    { icon: IoMdStats, caption: "Statystyki", path: "/statistics" },
    { icon: FiAlertTriangle, caption: "Wiadomości", path: "/messages" },
  ];

  const NavComponent = navigations.map((element: INavElement) => {
    return (
      <li
        key={element.caption}
        className={` ${element.path === location.pathname && "bg-blue-800"}`}
      >
        <Link
          onClick={() => {
            hmi?.isNavExpanded && hmi?.toggleNav();
          }}
          className="flex items-center px-4 py-2"
          to={element.path}
        >
          {<element.icon />}
          <p className="ml-3 text-base font-light">{element.caption}</p>
        </Link>
      </li>
    );
  });

  return (
    <aside
      className={`${
        hmi?.isNavExpanded ? "translate-x-0" : "translate-x-[148px]"
      } text-white fixed -right-4 top-[64px] w-[222px] h-[calc(100vh-7rem-14px)] max-h-[952px] bg-blue-600 duration-500 ease-in-out text-3xl z-10 rounded-2xl`}
    >
      <ul className="flex flex-col mt-4 cursor-pointer">{NavComponent}</ul>
    </aside>
  );
};

export default RightMenu;
