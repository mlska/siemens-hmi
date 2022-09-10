import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";

const HomeScreen = () => {
  const plc = useContext(StoreContext);

  const [value, setValue] = useState(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 my-16">
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
    </main>
  );
};

export default HomeScreen;
