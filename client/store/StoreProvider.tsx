import React, {
  useEffect,
  createContext,
  useState,
  FC,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
import { IVariables, IUser, IMessage, ScreenName, IRecipe } from "../types";
import { defaultVariables, defaultUser } from "../helpers/defaults";
import { wordToAlarms } from "../helpers/functions";
import { alarmWord1, warningWord1 } from "../helpers/messages";
import { getRecipes } from "../lib/request";

interface iContext {
  variables: IVariables;
  setVariable: (name: string, value: number) => void;
  user: IUser;
  handleLogin: (props: IUser) => void;
  isNavExpanded: boolean;
  toggleNav: () => void;
  alarms: Array<IMessage>;
  warnings: Array<IMessage>;
  screenName: string;
  handleScreenName: (screenName: ScreenName) => void;
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
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  const [alarms, setAlarms] = useState<Array<IMessage>>([]);
  const [warnings, setWarnings] = useState<Array<IMessage>>([]);
  const [screenName, setScreenName] = useState<string>("");
  const [recipes, setRecipes] = useState<Array<IRecipe>>([]);

  useEffect(() => {
    socket.on("data", (data) => {
      setVariables(data);
    });
    getRecipes("/api/recipes").then((data) => {
      if (data.status === "200") {
        console.log(data.recipes);
        setRecipes(data.recipes);
      }
    });
  }, []);

  useEffect(() => {
    setAlarms(wordToAlarms(variables.wStatusWord1, alarmWord1));
    setWarnings(wordToAlarms(variables.wControlWord1, warningWord1));
  }, [variables]);

  const setVariable = (name: string, value: number) => {
    socket.emit("control", { name, value });
  };

  const handleLogin = (props: IUser) => {
    setUser(props);
  };

  const toggleNav = () => {
    setIsNavExpanded((prevState) => !prevState);
  };

  const handleScreenName = (screenName: ScreenName) => {
    setScreenName(screenName);
  };

  return (
    <StoreContext.Provider
      value={{
        variables,
        setVariable,
        user,
        handleLogin,
        isNavExpanded,
        toggleNav,
        alarms,
        warnings,
        screenName,
        handleScreenName,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
