import React, {
  useEffect,
  createContext,
  useState,
  FC,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
import { IVariables, defaultValues } from "../types";

export const StoreContext = createContext<IVariables>(defaultValues);

const URL = "http://localhost:3001";

const socket: Socket = io(URL);

interface Props {
  children: ReactNode;
}

const StoreProvider: FC<Props> = ({ children }) => {
  const [data, setData] = useState<IVariables>(defaultValues);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setData(data);
    });
  });

  const setVariable = () => {
    socket.emit("message", "value");
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
