import React, { FC, useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import { ScreenName } from "../types";

interface IMessagesProps {}

const Messages: FC<IMessagesProps> = () => {
  const hmi = useContext(StoreContext);

  useEffect(() => {
    hmi?.handleScreenName(ScreenName.Messages);
  });

  const AlarmListComponent = hmi?.alarms.map((element) => {
    return (
      <li
        className={`bg-red-500 text-white px-2 py-2 w-full rounded-md transition-width duration-500`}
      >
        {`${element.id} - ${element.type} - ${element.text}`}
      </li>
    );
  });

  const WarningListComponent = hmi?.warnings.map((element) => {
    return (
      <li
        className={`bg-yellow-500 text-gray-800 px-2 py-2 w-full rounded-md transition-width duration-500`}
      >
        {`${element.id} - ${element.type} - ${element.text}`}
      </li>
    );
  });

  return (
    <div className="flex p-4 bg-gray-200 grow">
      <section className="flex flex-col w-full p-4 mr-4 bg-white shadow-lg rounded-2xl">
        <h1 className="pb-4 mb-2 text-3xl font-bold text-gray-800 font-barlow">
          Alarmy
        </h1>
        <ul>{AlarmListComponent}</ul>
      </section>
      <section className="flex flex-col w-full p-4 mr-16 bg-white shadow-lg rounded-2xl">
        <h1 className="pb-4 mb-2 text-3xl font-bold text-gray-800 font-barlow">
          Ostrzeżenia
        </h1>
        <ul>{WarningListComponent}</ul>
      </section>
    </div>
  );
};

export default Messages;
