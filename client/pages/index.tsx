import type { NextPage } from "next";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import StoreProvider from "../store/StoreProvider";

import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import Footer from "../components/Footer";
import RightMenu from "../components/RightMenu";
import Settings from "../components/Settings";
import Statistics from "../components/Statistics";

const Home: NextPage = () => {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        <RightMenu />
        <Footer />
      </Router>
    </StoreProvider>
  );
};

export default Home;
