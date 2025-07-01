import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div  style={{ minHeight: 'calc(100vh - 137px)' }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
