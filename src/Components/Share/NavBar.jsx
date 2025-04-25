import { useState } from "react";
import { FaRegHeart, FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <main className="sticky top-0 z-50 bg-[#72FBA4]">
      <header className="flex justify-between items-center p-3 md:px-6 lg:px-28">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.postimg.cc/9MkMgnr3/g10.png"
            alt="logo"
            className="w-12 h-10 md:w-12 md:h-10 object-cover"
          />
          <h1 className="text-xl md:text-3xl font-bold">DailyNook</h1>

          <div className="hidden md:flex items-center space-x-1 ml-4">
            <SlLocationPin size={25} />
            <span className="text-sm">
              Deliver to <br /> <span className="font-semibold">all</span>
            </span>
          </div>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center bg-white w-72 md:w-96 px-3 py-2 rounded-lg relative">
          <input
            type="text"
            placeholder="Search for products, categories or brands..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full outline-none"
          />
          {searchText && (
            <FaTimes
              size={18}
              className="absolute right-8 text-gray-500 cursor-pointer"
              onClick={() => setSearchText("")}
            />
          )}
          <IoSearch size={25} />
        </div>

        <div>
          hello kdnvbsnsvnisvslnk
          hhsdsufhhfjshfjshf
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaRegUser size={24} />
            <p className="text-sm">
              Sign In <br />
              <span className="font-bold">Account</span>
            </p>
          </div>

          <div className="relative">
            <FaRegHeart size={24} />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          <div className="relative">
            <TiShoppingCart size={24} />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
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
        <div className="md:hidden bg-[#72FBA4] px-4 pb-4 space-y-4">
          {/* Search (Mobile) */}
          <div className="flex items-center bg-white px-3 py-2 rounded-lg relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full outline-none pr-6"
            />
            {searchText ? (
              <FaTimes
                size={16}
                className="absolute right-3 text-gray-500 cursor-pointer"
                onClick={() => setSearchText("")}
              />
            ) : (
              <IoSearch size={18} className="absolute right-3 text-gray-600" />
            )}
          </div>

          {/* Account */}
          <div className="flex items-center space-x-2">
            <FaRegUser size={20} />
            <span className="text-sm font-semibold">Account</span>
          </div>

          {/* Favorites */}
          <div className="flex items-center space-x-2">
            <FaRegHeart size={20} />
            <span className="text-sm font-semibold">Wishlist (0)</span>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-2">
            <TiShoppingCart size={20} />
            <span className="text-sm font-semibold">Cart (0)</span>
          </div>
        </div>
      )}
    </main>
  );
};

export default NavBar;
