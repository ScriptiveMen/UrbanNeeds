import React, { useState } from "react";
import MainRoutes from "./routes/MainRoutes";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SideMenus from "./components/SideMenus";
import SideEmail from "./components/SideEmail";

const App = () => {
  const [showloader, setShowLoader] = useState(true);

  return (
    <div className="font-urban-regular relative min-h-screen ">
      <Navbar />
      <SideMenus />
      <MainRoutes />
      <SideEmail />
      {/* {showloader && (
        <div className="fixed inset-0 z-[9999]">
          <Loader setShowLoader={setShowLoader} />
        </div>
      )} */}
    </div>
  );
};

export default App;
