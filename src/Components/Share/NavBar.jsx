import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegUser, FaBars, FaTimes, FaBlog } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";
import {
  MdHome,
  MdOutlineContactMail,
  MdOutlineDashboard,
} from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { GiFinishLine, GiFruitBowl } from "react-icons/gi";
import { IoMdTrendingUp } from "react-icons/io";
import NavSearch from "../NavBar/NavSearch";
import NavMenus from "../NavBar/NavMenus";
import useAuth from "../Hooks/useAuth";
import useCartItems from "../Hooks/useCartItems";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  const { cartItems } = useCartItems();

  const profileRef = useRef();
  const mobileMenuRef = useRef();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="sticky top-0 z-50">
      <div className="bg-[#72FBA4] shadow lg:shadow-2xl">
        <header className="flex justify-between items-center p-4 md:px-6 lg:px-28">
          {/* Logo & Location */}
          <div className="flex items-center space-x-2">
            <img
              src="https://i.postimg.cc/9MkMgnr3/g10.png"
              alt="logo"
              className="w-12 h-10 md:w-12 md:h-10 object-cover"
            />
            <Link to="/">
              <h1 className="text-xl md:text-3xl font-bold">DailyNook</h1>
            </Link>

            <div className="hidden md:flex items-center space-x-1 ml-4">
              <SlLocationPin size={25} />
              <span className="text-sm">
                Deliver to <br /> <span className="font-semibold">all</span>
              </span>
            </div>
          </div>

          {/* Search (Desktop) */}
          <div className="hidden lg:flex">
            <NavSearch />
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {/* Account/Profile */}
            {user?.email ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="w-8 h-8 rounded-full overflow-hidden border-2 border-white hover:border-[#634C9F]"
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-600 hover:text-gray-800">
                      <FaRegUser size={18} />
                    </div>
                  )}
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link
                      to="/dashboard/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 hover:text-[#634C9F]"
              >
                <FaRegUser size={24} />
                <p className="text-sm">
                  Sign In <br />
                  <span className="font-bold">Account</span>
                </p>
              </Link>
            )}

            {/* Dashboard */}
            <Link
              to="/dashboard"
              className="relative group flex items-center justify-center"
            >
              <MdOutlineDashboard
                size={24}
                className="group-hover:text-[#634C9F]"
              />
              <span className="absolute bottom-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-bold">
                Dashboard
              </span>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative hover:text-[#634C9F]">
              <FaRegHeart size={24} />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Cart */}
            <Link to="/add-to-card" className="relative ">
              <TiShoppingCart className="hover:text-[#634C9F]" size={24} />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-[#72FBA4] px-5 pt-6 pb-6 space-y-5"
          >
            {[
              { to: "/", icon: <MdHome size={20} />, label: "Home" },
              { to: "/products", icon: <BsShop size={20} />, label: "Shop" },
              {
                to: "/fruits-vegetables",
                icon: <GiFruitBowl size={20} />,
                label: "Fruits & Vegetables",
              },
              { to: "/blog", icon: <FaBlog size={20} />, label: "Blog" },
              {
                to: "/contact",
                icon: <MdOutlineContactMail size={20} />,
                label: "Contact",
              },
              {
                to: "/trending-products",
                icon: <IoMdTrendingUp size={20} />,
                label: "Trending Products",
              },
              {
                to: "/almost-finished",
                icon: <GiFinishLine size={20} />,
                label: "Almost Finished",
              },
              {
                to: "/login",
                icon: <FaRegUser size={20} />,
                label: "Account",
              },
              {
                to: "/dashboard",
                icon: <MdOutlineDashboard size={20} />,
                label: "Dashboard",
              },
              {
                to: "/wishlist",
                icon: <FaRegHeart size={20} />,
                label: "Wishlist (0)",
              },
              {
                to: "/cart",
                icon: <TiShoppingCart size={20} />,
                label: "Cart (0)",
              },
            ].map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center space-x-2 hover:text-[#634C9F]"
              >
                {icon}
                <span className="text-sm font-semibold">{label}</span>
              </Link>
            ))}

            {/* Mobile Search */}
            <div>
              <NavSearch />
            </div>
          </div>
        )}
      </div>

      {/* NavMenus (desktop only) */}
      <div className="hidden lg:block">
        <NavMenus />
      </div>
    </main>
  );
};

export default NavBar;
