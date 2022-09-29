import React, { FC, useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import { ScreenName } from "../types/index";
interface ISettingsProps {}

const Settings: FC<ISettingsProps> = () => {
  const hmi = useContext(StoreContext);

  const contents = ["system", "ekran", "czujniki", "parametry"];

  const [content, setContent] = useState<string>("system");

  const NavigationComponent = contents.map((element) => {
    return (
      <button
        key={element}
        className={`p-4 text-white capitalize ${
          content === element ? "bg-blue-800" : "bg-blue-600"
        } rounded-xl`}
        onClick={() => setContent(element)}
      >
        {element}
      </button>
    );
  });

  useEffect(() => {
    hmi?.handleScreenName(ScreenName.Settings);
  });

  return (
    <div className="flex gap-4 p-4 bg-gray-200 grow">
      <nav className="flex flex-col w-56 gap-4 p-4 bg-white shadow-lg rounded-2xl">
        {NavigationComponent}
      </nav>
      <section className="p-4 mr-16 bg-white shadow-lg basis-10/12 rounded-2xl schrink">
        <h1 className="text-3xl font-bold text-gray-800 font-barlow">
          {`Ustawienia ${content}`}
        </h1>
      </section>
    </div>
  );
};

export default Settings;
