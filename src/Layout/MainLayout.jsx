import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer";
import Navbar from "../pages/Home/Shared/Navbar";


const MainLayout = () => {
     return (
          <div>
                <Navbar />
               <Outlet />
               <Footer />
          </div>
     );
};

export default MainLayout;