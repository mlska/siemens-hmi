import React, { FC } from "react";

interface ISettingsProps {}

const Settings: FC<ISettingsProps> = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-200 grow">
      <nav className="flex flex-col w-56 gap-4 p-4 bg-white shadow-lg rounded-2xl">
        <button
          className="p-4 text-white bg-blue-600 rounded-xl"
          onClick={() => console.log("clicked")}
        >
          System
        </button>
        <button
          className="p-4 text-white bg-blue-600 rounded-xl"
          onClick={() => console.log("clicked")}
        >
          Ekran
        </button>
      </nav>
      <section className="p-4 mr-16 bg-white shadow-lg basis-10/12 rounded-2xl schrink">
        <h1 className="text-3xl font-bold text-gray-800 font-barlow">
          Ustawienia system
        </h1>
      </section>
    </div>
  );
};

export default Settings;
