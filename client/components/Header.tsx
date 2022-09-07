import React, { useContext, FC } from "react";
import { StoreContext } from "../store/StoreProvider";
import { IVariables } from "../types";

const Header = (props: any) => {
  const data = useContext(StoreContext);
  return (
    <header className="w-full bg-emerald-600">
      <div>{data.iAccessLevel}</div>
    </header>
  );
};

export default Header;
