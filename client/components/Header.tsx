import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/Ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  MdAutorenew,
  MdOutlineBackHand,
  MdOutlineEngineering,
} from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { StoreContext } from "../store/StoreProvider";
import Moment from "react-moment";

import { isBitSet } from "../helpers/functions";
import { Role } from "../types";

import Modal from "./Modal";
import LeftMenu from "./LeftMenu";
import Login from "./Login";

const Header = () => {
  const hmi = useContext(StoreContext);

  const [isLeftMenuShown, setIsLeftMenuShown] = useState<boolean>(false);
  const [isLoginShown, setIsLoginShown] = useState<boolean>(false);

  const handleLeftMenuShow = () => {
    setIsLeftMenuShown((prevState) => !prevState);
  };

  const handleLoginShow = () => {
    setIsLoginShown((prevState) => !prevState);
  };

  const DateComponent = () => {
    const date = new Date();
    return (
      <div className="flex items-center px-4 border-l">
        <AiOutlineClockCircle className="mr-2 text-2xl" />
        <div className="flex flex-col leading-4">
          <Moment interval={0} format="DD.MM.YYYY">
            {date}
          </Moment>
          <Moment interval={0} format="HH:mm:ss">
            {date}
          </Moment>
        </div>
      </div>
    );
  };

  return (
    <header className="flex w-full h-12 py-2 font-light text-white bg-blue-600">
      <button onClick={handleLeftMenuShow} className="px-4 text-2xl border-r">
        <AiOutlineMenuUnfold />
      </button>
      <button
        onClick={handleLoginShow}
        className="flex items-center px-4 border-r"
      >
        {hmi?.user.level === Role.Service ? (
          <MdOutlineEngineering className="mr-2 text-2xl" />
        ) : (
          <AiOutlineUser className="mr-2 text-2xl" />
        )}
        <p>{`${hmi?.user.name} ${hmi?.user.surname}`}</p>
      </button>
      <section className="flex items-center justify-center flex-1 border-r">
        {hmi?.screenName}
      </section>
      <div className="flex items-center p-3 text-2xl border-r">
        {isBitSet(hmi?.variables.wStatusWord1, 0) ? (
          <MdAutorenew className="animate-spin" />
        ) : (
          <MdOutlineBackHand />
        )}
      </div>
      <button
        className={`flex p-3 items-center ${
          hmi?.warnings.length && !hmi?.alarms.length && "text-yellow-400"
        } ${hmi?.alarms.length && "animate-pulse text-red-900"}`}
      >
        <FiAlertTriangle className="mr-3 text-2xl" />
        Alarmy
      </button>
      <DateComponent />
      <button className="px-3 text-3xl border-l" onClick={hmi?.toggleNav}>
        <IoIosArrowBack
          className={`transition duration-300 ${
            hmi?.isNavExpanded && "rotate-180"
          }`}
        />
      </button>
      <Modal
        isShown={isLeftMenuShown}
        hide={handleLeftMenuShow}
        modalContent={<LeftMenu />}
      />
      <Modal
        isShown={isLoginShown}
        hide={handleLoginShow}
        modalContent={
          <Login onCancel={handleLoginShow} isLoginShown={isLoginShown} />
        }
      />
    </header>
  );
};

export default Header;
