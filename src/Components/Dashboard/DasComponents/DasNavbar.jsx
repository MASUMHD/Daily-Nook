import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiMenu, FiPlus, FiShoppingCart } from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';

const DasNavbar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow md:px-6 lg:px-10 fixed top-0 left-0 lg:left-60 right-0">
      {/* Sidebar toggle on small devices */}
      <button onClick={toggleSidebar} className="lg:hidden text-2xl text-gray-800">
        <FiMenu />
      </button>

      <div className="flex items-center space-x-8 -ml-24 md:ml-0">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <img src="https://i.postimg.cc/9MkMgnr3/g10.png" alt="logo" className="w-9 h-8 " />
          <span>DailyNook</span>
        </Link>
      </div>

      {/* Center: Search bar */}
      <div className="hidden md:flex flex-1 mx-6  justify-center">
        <div className="flex items-center w-1/2 bg-[#72FBA4] px-4 py-2 rounded-md space-x-2">
          <HiOutlineSearch className="text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full placeholder:text-gray-600"
          />
        </div>
      </div>

       {/* Right: Icons + Button */}
       <div className="flex items-center space-x-4 mr-2 md:mr-0">
        <div className="relative">
          <FiBell size={20} />
          <span className="absolute -top-2 -right-2 text-xs bg-purple-600 text-white rounded-full px-1">2</span>
        </div>
        <div className="relative">
          <FiShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 text-xs bg-purple-600 text-white rounded-full px-1">3</span>
        </div>
        <Link
          to="/dashboard/add-products"
          className="hidden md:flex items-center bg-green-500 text-white px-2 md:px-3 py-2 rounded-md"
        >
          <FiPlus size={18} className="mr-2" /> <span className="">Add Product</span>
        </Link>
      </div>
    </div>
  );
};

export default DasNavbar;
