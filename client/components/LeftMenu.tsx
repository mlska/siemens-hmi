import React, { FunctionComponent, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

const LeftMenu: FunctionComponent = () => {
  const plc = useContext(StoreContext);

  return (
    <>
      <div className="absolute z-50 w-56 h-[calc(100vh-7rem-15px)] max-h-[952px] outline-none top-[64px] left-4 bg-gray-700 animate-translate rounded-2xl">
        <div className="flex flex-col gap-4 mx-4 my-4 overflow-x-hidden overflow-y-auto">
          <button
            className="p-4 text-white bg-blue-600 rounded"
            onClick={() => plc?.setVariable("wStatusWord1", 0)}
          >
            Reset Błędów
          </button>
          <button
            className="p-4 text-white bg-blue-600 rounded"
            onClick={() => plc?.setVariable("wStatusWord1", 1)}
          >
            Koniec produkcji
          </button>
          <button
            className="p-4 text-white bg-blue-600 rounded"
            onClick={() => plc?.setVariable("wControlWord1", 1)}
          >
            Praca bez robotów
          </button>
          <button
            className="p-4 text-white bg-blue-600 rounded"
            onClick={() => plc?.setVariable("wControlWord1", 0)}
          >
            Reset Control
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
