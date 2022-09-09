import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";

const HomeScreen = () => {
  const plc = useContext(StoreContext);

  const [value, setValue] = useState(0);

  const handleOnChange = (e) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 my-16">
      <button
        onClick={() => plc?.setVariable("wStatusWord1", parseInt(value))}
        className="w-64 p-2 ml-4 bg-slate-600"
      >
        Send to PLC
      </button>
      <div>Aktualna wartość wStatusWord1: {plc?.variables.wStatusWord1}</div>
      <input type="number" onChange={handleOnChange} value={value} />
    </main>
  );
};

export default HomeScreen;
