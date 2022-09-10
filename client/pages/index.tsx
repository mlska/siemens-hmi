import type { NextPage } from "next";

import StoreProvider from "../store/StoreProvider";

import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";

const Home: NextPage = () => {
  return (
    <StoreProvider>
      <Header />
      <HomeScreen />
    </StoreProvider>
  );
};

export default Home;
