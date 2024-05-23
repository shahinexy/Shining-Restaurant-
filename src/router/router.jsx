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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'/dashboard/cart',
          element: <Cart></Cart>
        },

        // ========= Admin ======== 
        {
          path: '/dashboard/allUser',
          element: <AllUser></AllUser>
        }

      ]
    }
  ]);