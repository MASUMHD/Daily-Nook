import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaRegHeart, FaRegUser, FaBars, FaTimes, FaBlog } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";
import NavSearch from "../NavBar/NavSearch";
import NavMenus from "../NavBar/NavMenus";
import { MdHome, MdOutlineContactMail } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { GiFinishLine, GiFruitBowl } from "react-icons/gi";
import { IoMdTrendingUp } from "react-icons/io";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="sticky top-0 z-50">
      <div className="bg-[#72FBA4] shadow lg:shadow-2xl">
        <header className="flex justify-between items-center p-4 md:px-6 lg:px-28">
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
          <div className="hidden lg:flex">
            <NavSearch />
          </div>

          {/* Right Side menu (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Account */}
            <Link to="/account" className="flex items-center space-x-2">
              <FaRegUser size={24} />
              <p className="text-sm">
                Sign In <br />
                <span className="font-bold">Account</span>
              </p>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <FaRegHeart size={24} />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <TiShoppingCart size={24} />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
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
          <div className="md:hidden bg-[#72FBA4] px-5 pt-6 pb-6 space-y-5 ">
            {/* Nav Menus */}
            <Link to="/" className="flex items-center space-x-2 hover:text-[#634C9F]">
            <MdHome size={20} />
              <span className="text-sm font-semibold">Home</span>
            </Link>

            <Link to="/products" className="flex items-center space-x-2 hover:text-[#634C9F] ">
            <BsShop size={20} />
              <span className="text-sm font-semibold">Shop</span>
            </Link>

            <Link to="/fruits-vegetables" className="flex items-center space-x-2 hover:text-[#634C9F]">
            <GiFruitBowl size={20} />
              <span className="text-sm font-semibold">Fruits & Vegetables</span>
            </Link>

            <Link to="/blog" className="flex items-center space-x-2 hover:text-[#634C9F]">
            <FaBlog size={20} />
              <span className="text-sm font-semibold">Blog</span>
            </Link>

            <Link to="/contact" className="flex items-center space-x-2 hover:text-[#634C9F]">
            <MdOutlineContactMail size={20} />
              <span className="text-sm font-semibold">Contact</span>
            </Link>

            <Link to="/trending-products" className="flex items-center space-x-2 hover:text-[#634C9F]">
            <IoMdTrendingUp size={20} />
              <span className="text-sm font-semibold">Trending Products</span>
            </Link>

            <Link to="/almost-finished" className="flex items-center space-x-2 hover:text-[#634C9F]">
            <GiFinishLine size={20} />
              <span className="text-sm font-semibold">Almost Finished</span>
            </Link>

            

            {/* Search (Mobile) */}
            <div>
              <NavSearch />
            </div>

            {/* Account */}
            <Link to="/account" className="flex items-center space-x-2 hover:text-[#634C9F]">
              <FaRegUser size={20} />
              <span className="text-sm font-semibold">Account</span>
            </Link>

            {/* Favorites */}
            <Link to="/wishlist" className="flex items-center space-x-2 hover:text-[#634C9F]">
              <FaRegHeart size={20} />
              <span className="text-sm font-semibold">Wishlist (0)</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex items-center space-x-2 hover:text-[#634C9F]">
              <TiShoppingCart size={20} />
              <span className="text-sm font-semibold">Cart (0)</span>
            </Link>
          </div>
        )}
      </div>

      {/* nav menus */}
      <div className="hidden lg:block">
        <NavMenus />
      </div>
    </main>
  );
};

export default NavBar;
