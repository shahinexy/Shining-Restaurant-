import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Dashboard/Cart";
import AllUser from "../Dashboard/AllUser";
import PrivetRout from './../PrivetRout/PrivetRout';
import AddItems from "../Dashboard/AddItems";
import AdminRoute from './AdminRoute';
import ManageItems from "../Dashboard/ManageItems";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/ourMenu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/ourShop/:category',
          element: <OurShop></OurShop>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivetRout><Dashboard></Dashboard></PrivetRout>,
      children: [
        // ======= normal user rout
        {
          path:'/dashboard/cart',
          element: <Cart></Cart>
        },

        // ========= Admin rout ======== 
        {
          path: '/dashboard/allUser',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path: '/dashboard/addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: '/dashboard/manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }

      ]
    }
  ]);