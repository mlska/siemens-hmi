import React, {
  useEffect,
  createContext,
  useState,
  FC,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
import { IVariables, defaultValues } from "../types";

interface iContext {
  variables: IVariables;
  setVariable: (name: string, value: number) => void;
}

export const StoreContext = createContext<iContext | undefined>(undefined);

const URL = "http://localhost:3001";

const socket: Socket = io(URL);

interface Props {
  children: ReactNode;
}

const StoreProvider: FC<Props> = ({ children }) => {
  const [variables, setVariables] = useState<IVariables>(defaultValues);

  useEffect(() => {
    socket.on("data", (data) => {
      setVariables(data);
    });
  });

  const setVariable = (name: string, value: number) => {
    socket.emit("control", { name, value });
  };

  return (
    <StoreContext.Provider value={{ variables, setVariable }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
