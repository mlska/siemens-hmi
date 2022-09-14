import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";

const HomeScreen = () => {
  const plc = useContext(StoreContext);

  const [value, setValue] = useState(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <main className="flex p-4 grow bg-gray-200 gap-4">
      <section className="basis-9/12 bg-white rounded-2xl p-4 shadow-lg schrink">
        <h1 className="text-3xl font-barlow font-bold text-gray-800">
          Widok stanowiska
        </h1>
        <article className="flex flex-col items-center justify-center h-full gap-4">
          <button
            onClick={() => plc?.setVariable("wStatusWord1", value)}
            className="w-64 p-2 ml-4 bg-slate-600"
          >
            Send to PLC
          </button>
          <input
            className="text-xl text-center bg-blue-600 w-96"
            type="number"
            onChange={handleOnChange}
            value={value}
          />
          <div>Aktualna wartość wStatusWord1:</div>
          <h1 className="text-3xl">{plc?.variables.wStatusWord1}</h1>
        </article>
      </section>
      <aside className="flex flex-col gap-4 basis-3/12 shadow-lg bg-transparent mr-16">
        <section className="h-1/2 p-4 bg-white rounded-2xl">
          <h2 className="text-2xl font barlow font-bold text-gray-800">
            System
          </h2>
        </section>
        <section className="h-1/2 p-4 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font barlow font-bold text-gray-800">
            Bezpieczeństwo
          </h2>
        </section>
      </aside>
    </main>
  );
};

export default HomeScreen;
