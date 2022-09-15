import React, { FC } from "react";

interface ISettingsProps {}

const Settings: FC<ISettingsProps> = () => {
  return (
    <div className="flex p-4 grow bg-gray-200 gap-4">
      <nav className="basis-2/12 flex flex-col gap-4 shadow-lg bg-white rounded-2xl p-4">
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
      <section className="basis-10/12 bg-white rounded-2xl p-4 shadow-lg schrink mr-16">
        <h1 className="text-3xl font-barlow font-bold text-gray-800">
          Ustawienia system
        </h1>
      </section>
    </div>
  );
};

export default Settings;
