import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";

const HomeScreen = () => {
  const plc = useContext(StoreContext);

  const [value, setValue] = useState(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <main className="flex gap-4 p-4 bg-gray-200 grow">
      <section className="p-4 bg-white shadow-lg basis-9/12 rounded-2xl schrink">
        <h1 className="text-3xl font-bold text-gray-800 font-barlow">
          Widok stanowiska
        </h1>
        {/* <article className="flex flex-col items-center justify-center h-full gap-4">
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
        </article> */}
      </section>
      <aside className="flex flex-col gap-4 mr-16 bg-transparent shadow-lg basis-3/12">
        <section className="p-4 bg-white h-1/2 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800 font barlow">
            System
          </h2>
        </section>
        <section className="p-4 bg-white shadow-lg h-1/2 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800 font barlow">
            Bezpieczeństwo
          </h2>
        </section>
      </aside>
    </main>
  );
};

export default HomeScreen;
