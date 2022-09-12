import type { NextPage } from "next";
import Link from "next/link";
import StoreProvider from "../store/StoreProvider";

import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <StoreProvider>
      <Header />
      <Link href="/">
        <HomeScreen />
      </Link>
      <Footer />
    </StoreProvider>
  );
};

export default Home;
