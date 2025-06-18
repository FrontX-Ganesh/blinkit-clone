import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[75vh]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
