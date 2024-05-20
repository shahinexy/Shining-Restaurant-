import { FaAddressBook, FaHome, FaResearchgate } from "react-icons/fa";
import { FaCartShopping, FaHandsBubbles, FaHorse, FaHouse, FaMoneyBill, FaStreetView } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-2/12 bg-orange-500 h-screen flex justify-center items-center">
        <ul className="text-lg font-semibold ">
          <li>
            <NavLink
              to={"/dashboard/userHome"}
              className="flex gap-2 items-center hover:bg-orange-400 px-10 py-2 uppercase"
            >
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/cart"}
              className="flex gap-2 items-center hover:bg-orange-400 px-10 py-2 uppercase"
            >
              <FaCartShopping /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/payment"}
              className="flex gap-2 items-center hover:bg-orange-400 px-10 py-2 uppercase"
            >
              <FaMoneyBill />
              payment history
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/reservation"}
              className="flex gap-2 items-center hover:bg-orange-400 px-10 py-2 uppercase"
            >
              <FaResearchgate />
              reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/addReview"}
              className="flex gap-2 items-center hover:bg-orange-400 px-10 py-2 uppercase"
            >
              <FaStreetView />
              add review
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/myBooking"}
              className="flex gap-2 items-center hover:bg-orange-400 px-10 py-2 uppercase"
            >
              <FaAddressBook />
              My booking
            </NavLink>
          </li>

          <hr className="my-10" />

          <li>
            <NavLink
              to={"/"}
              className="flex gap-2 items-center hover:bg-orange-400 px-10 py-2 uppercase"
            >
              <FaHouse />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/ourShop/salad"}
              className="flex gap-2 items-center hover:bg-orange-400 px-10 py-2 uppercase"
            >
              <FaHandsBubbles />
              memu
            </NavLink>
          </li>

        </ul>
      </div>
      <div className="w-10/12">
        <div className=" max-w-5xl mx-auto bg-slate-100"><Outlet></Outlet></div>
      </div>
    </div>
  );
};

export default Dashboard;
