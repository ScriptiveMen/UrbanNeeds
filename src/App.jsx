import React, { useState } from "react";
import MainRoutes from "./routes/MainRoutes";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SideMenus from "./components/SideMenus";
import SideEmail from "./components/SideEmail";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import CustomCursor from "./components/CustomCursor";
import ScrollingText from "./components/ScrollingText";

const App = () => {
  const [showloader, setShowLoader] = useState(true);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="font-urban-regular relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <SideMenus />
      <MainRoutes />
      <SideEmail />
      <ScrollingText />
      <Footer />
      {showloader && (
        <div className="fixed inset-0 z-[9999]">
          <Loader setShowLoader={setShowLoader} />
        </div>
      )}
    </div>
  );
};

export default App;
