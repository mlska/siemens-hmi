import React, { FunctionComponent, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

const LeftMenu: FunctionComponent = () => {
  const plc = useContext(StoreContext);

  return (
    <>
      <div className="absolute z-50 w-[215px] h-[calc(100vh-6rem)] outline-none top-12 bg-gray-700 animate-scale">
        <div className="flex flex-col gap-4 mx-4 my-4 overflow-x-hidden overflow-y-auto">
          <button
            className="p-4 text-white bg-blue-600 rounded"
            onClick={() => plc?.setVariable("wStatusWord1", 1)}
          >
            Reset Błędów
          </button>
          <button
            className="p-4 text-white bg-blue-600 rounded"
            onClick={() => plc?.setVariable("wStatusWord1", 2)}
          >
            Koniec produkcji
          </button>
          <button
            className="p-4 text-white bg-blue-600 rounded"
            onClick={() => plc?.setVariable("wStatusWord1", 3)}
          >
            Praca bez robotów
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
