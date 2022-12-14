import type { NextPage } from "next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoreProvider from "../store/StoreProvider";

import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import Footer from "../components/Footer";
import RightMenu from "../components/RightMenu";
import Settings from "../components/Settings";
import Statistics from "../components/Statistics";
import Messages from "../components/Messages";
import Recipes from "../components/Recipes";

const Home: NextPage = () => {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
        <RightMenu />
        <Footer />
      </Router>
    </StoreProvider>
  );
};

export default Home;
