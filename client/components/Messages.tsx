import React, { FC, useContext, useEffect } from "react";
import { StoreContext } from "../store/StoreProvider";
import { ScreenName } from "../types";

interface IMessagesProps {}

const Messages: FC<IMessagesProps> = () => {
  const hmi = useContext(StoreContext);

  useEffect(() => {
    hmi?.handleScreenName(ScreenName.Messages);
  });

  return (
    <div className="flex gap-4 p-4 bg-gray-200 grow">
      <section className="flex flex-col w-full p-4 mr-16 bg-white shadow-lg rounded-2xl">
        <h1 className="pb-4 mb-2 text-3xl font-bold text-gray-800 font-barlow">
          Wiadomości
        </h1>
        <div className="flex gap-4 grow">
          <section className="h-full p-4 bg-white border-2 basis-1/2 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 font-barlow">
              Alarmy
            </h2>
          </section>
          <section className="h-full p-4 bg-white border-2 border-1 basis-1/2 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 font-barlow">
              Ostrzeżenia
            </h2>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Messages;
