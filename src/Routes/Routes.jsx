import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout />,
       children: [
            {
               path: '/',
               element: <Home />
            },
            {
               path: '/login',
               element: <Login />
            },
       ]
     },
   ]);

export default router;