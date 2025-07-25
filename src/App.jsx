import React, { useEffect, useState } from "react";
import MainRoutes from "./routes/MainRoutes";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import SideMenus from "./components/SideMenus";
import SideEmail from "./components/SideEmail";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollingText from "./components/ScrollingText";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UsersAction";

const App = () => {
  const [showloader, setShowLoader] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.users);
  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
  }, [user]);

  return (
    <div className="font-urban-regular relative min-h-screen ">
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
