import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/Ai";
import { MdAutorenew, MdOutlineBackHand } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { StoreContext } from "../store/StoreProvider";
import Moment from "react-moment";

const Header = () => {
  const plc = useContext(StoreContext);

  const isBitSet = (variable: any, index: number) => {
    const binary = variable.toString(2).split("").reverse().join(""); // Convert to Binary
    return Number(binary[index]);
  };

  const DateComponent = () => {
    const date = new Date();
    return (
      <div className="flex items-center mx-4">
        <AiOutlineClockCircle className="mr-2 text-2xl" />
        <div className="flex flex-col leading-4">
          <Moment format="DD/MM/YYYY">{date}</Moment>
          <Moment format="hh:mm:ss">{date}</Moment>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(DateComponent, 1000);
    return clearInterval(interval);
  }, []);

  return (
    <header className="flex w-full h-12 font-light text-white bg-blue-600 border-gray-400">
      <button className="px-4 text-xl border-r">
        <FaBars />
      </button>
      <div className="flex items-center justify-center px-4 border-r">
        <AiOutlineUser className="mr-2 text-2xl" />
        <p>Jan Kowalski</p>
      </div>
      <section className="flex items-center justify-center flex-1 border-r">
        Ekran Główny
      </section>
      <div className="p-3 text-2xl border-r">
        {isBitSet(plc?.variables.wStatusWord1, 0) ? (
          <MdAutorenew />
        ) : (
          <MdOutlineBackHand />
        )}
      </div>
      <button className="flex p-3 border-r">
        <FiAlertTriangle className="mr-3 text-2xl" />
        Alarmy
      </button>
      <DateComponent />
    </header>
  );
};

export default Header;
