import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/Ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdAutorenew, MdOutlineBackHand } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { StoreContext } from "../store/StoreProvider";
import Moment from "react-moment";

import Modal from "./Modal";
import LeftMenu from "./LeftMenu";
import Login from "./Login";

const Header = () => {
  const plc = useContext(StoreContext);

  const [isLeftMenuShown, setIsLeftMenuShown] = useState<boolean>(false);
  const [isLoginShown, setIsLoginShown] = useState<boolean>(false);

  const handleLeftMenuShow = () => {
    setIsLeftMenuShown((prevState) => !prevState);
  };

  const handleLoginShow = () => {
    setIsLoginShown((prevState) => !prevState);
  };

  const isBitSet = (variable: any, index: number) => {
    const binary = variable.toString(2).split("").reverse().join("");
    return Number(binary[index]);
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
    <header className="flex w-full h-12 font-light text-white bg-blue-600 border-gray-400">
      <button onClick={handleLeftMenuShow} className="px-4 text-2xl border-r">
        <AiOutlineMenuUnfold />
      </button>
      <button
        onClick={handleLoginShow}
        className="flex items-center px-4 border-r"
      >
        <AiOutlineUser className="mr-2 text-2xl" />
        <p>{`${plc?.user.name} ${plc?.user.surname}`}</p>
      </button>
      <section className="flex items-center justify-center flex-1 border-r">
        Ekran Główny
      </section>
      <div className="p-3 text-2xl border-r">
        {isBitSet(plc?.variables.wStatusWord1, 0) ? (
          <MdAutorenew className="animate-spin" />
        ) : (
          <MdOutlineBackHand />
        )}
      </div>
      <button
        className={`flex p-3 ${
          isBitSet(plc?.variables.wStatusWord1, 0) &&
          "animate-pulse text-red-900"
        }`}
      >
        <FiAlertTriangle className="mr-3 text-2xl animate-bounce" />
        Alarmy
      </button>
      <DateComponent />
      <button className="px-3 text-3xl border-l">
        <IoIosArrowBack />
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
