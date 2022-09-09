import type { NextPage } from "next";
// import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
// import { IVariables, defaultValues } from "../types";
// const socket: Socket = io("http://localhost:3001");
import StoreProvider from "../store/StoreProvider";
import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
const Home: NextPage = () => {
  // const [data, setData] = useState<IVariables>(defaultValues);
  // const [value, setValue] = useState<Number>(0);
  // const sendMessage = () => {
  //   socket.emit("message", value);
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (plcData) => {
  //     setData(plcData);
  //     console.log(plcData);
  //   });
  // });

  return (
    // <div className="flex flex-col items-center justify-center w-full h-screen">
    //   <h1 className="text-3xl">Web HMI Siemens S7-1200</h1>
    //   <button onClick={sendMessage}>Send</button>
    //   <p>{JSON.stringify(data)}</p>
    //   <p>{data.wStatusWord1}</p>
    //   <input
    //     type="number"
    //     onChange={(e) => setValue(parseInt(e.target.value))}
    //     style={{ background: "cadetblue" }}
    //   />
    // </div>
    <StoreProvider>
      <Header />
      <HomeScreen />
    </StoreProvider>
  );
};

export default Home;
