import { NavLink, useLocation } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import getAllCart from "../LocalStorage/LocalStorage";
import { CartContext, Context } from "../../Context/Context";
import logo from "../../assets/logo.jpg";

const Navbar = ({ cartCount }) => {
  // const data = getAllCart(); const [cart, setCart] = useState([]);
  // const [cart, setCart] = useState([]);
  const { carts = [], wishs } = useContext(CartContext);
  // console.log(carts);
  const cartCounts = carts.length;
  console.log("cartCounts", cartCounts);
  const wishCounts = wishs.length;
  // console.log("wishs", wishs);
  // useEffect(() => {
  //   // console.log("Navbar rendered"); // Log each render

  //   const fetchCart = async () => {
  //     try {
  //       const fetchedCart = await getAllCart();
  //       setCart(fetchedCart);
  //       // console.log("Fetched cart data:", fetchedCart); // Log fetched data
  //     } catch (error) {
  //       console.error("Failed to fetch cart data:", error);
  //     }
  //   };

  //   fetchCart();
  // }, []);

  // console.log("Current cart in Navbar:", cart); // Log current cart state

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`navbar px-1 md:px-6 lg:px-16 ${
        isHomePage ? "bg-[#9538E2]" : "bg-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-bold ${isHomePage ? "text-white" : "text-black"} ${
                  isActive ? "text-white border-b-2 border-orange-500" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-bold ${isHomePage ? "text-white" : "text-black"} ${
                  isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `font-bold ${isHomePage ? "text-white" : "text-black"} ${
                  isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
                }`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `font-bold ${isHomePage ? "text-white" : "text-black"} ${
                  isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
                }`
              }
            >
              Reviews
            </NavLink>
          </ul>
        </div>
        <NavLink
          to="/"
          className={`flex items-center gap-1 lg:text-xl md:text-lg text-base font-bold ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          <span>
            <img className="w-8 rounded-full" src={logo} alt="" />
          </span>
          Gadget Heaven
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:flex md:flex md:gap-3 gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold ${isHomePage ? "text-white" : "text-black"} ${
                isActive ? "text-white border-b-2 border-orange-500" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `font-bold ${isHomePage ? "text-white" : "text-black"} ${
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              `font-bold ${isHomePage ? "text-white" : "text-black"} ${
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `font-bold ${isHomePage ? "text-white" : "text-black"} ${
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }`
            }
          >
            Reviews
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <div
            className={`relative p-2 rounded-full text-xl ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            <IoMdCart />
            {cartCounts > 0 && (
              <span className="absolute -top-1 lg:-right-1 md:right-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-1">
                {cartCounts}
              </span>
            )}
          </div>
          <div
            className={`p-2 rounded-full text-xl ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            <FaRegHeart />
            {wishCounts == 0 || (
              <span className="absolute top-2 lg:right-16 right-0 md:right-6 bg-red-600 text-white text-xs font-bold rounded-full px-1">
                {wishCounts}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
