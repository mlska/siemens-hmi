import type { NextPage } from "next";
import Link from "next/link";
import StoreProvider from "../store/StoreProvider";

import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import Footer from "../components/Footer";
import RightMenu from "../components/RightMenu";

const Home: NextPage = () => {
  return (
    <StoreProvider>
      <Header />
      <Link href="/">
        <HomeScreen />
      </Link>
      <RightMenu />
      <Footer />
    </StoreProvider>
  );
};

export default Home;
