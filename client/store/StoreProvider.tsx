import React, {
  useEffect,
  createContext,
  useState,
  FC,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
import { IVariables, IUser } from "../types";
import { defaultVariables, defaultUser } from "../helpers";

interface iContext {
  variables: IVariables;
  setVariable: (name: string, value: number) => void;
  user: IUser;
  handleLogin: (props: IUser) => void;
}

export const StoreContext = createContext<iContext | undefined>(undefined);

const URL = "http://localhost:3001";

const socket: Socket = io(URL);

interface Props {
  children: ReactNode;
}

const StoreProvider: FC<Props> = ({ children }) => {
  const [variables, setVariables] = useState<IVariables>(defaultVariables);
  const [user, setUser] = useState<IUser>(defaultUser);

  useEffect(() => {
    socket.on("data", (data) => {
      setVariables(data);
    });
  });

  const setVariable = (name: string, value: number) => {
    socket.emit("control", { name, value });
  };

  const handleLogin = (props: IUser) => {
    setUser(props);
  };

  return (
    <StoreContext.Provider
      value={{ variables, setVariable, user, handleLogin }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
