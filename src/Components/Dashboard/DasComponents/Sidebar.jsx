import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiGrid, FiClipboard, FiTruck, FiUser, FiUsers, FiFileText, FiX
} from 'react-icons/fi';
import { LiaClipboardListSolid } from 'react-icons/lia';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center px-4 py-2 space-x-3 ${
      isActive ? 'bg-green-500 text-white rounded-full' : 'text-black hover:bg-gray-100 rounded-md'
    }`;

  return (
    <div
      className={`bg-white shadow-lg w-64 h-full p-4 fixed top-0 left-0 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      {/* Close Icon for small devices */}
      <div className="flex justify-end lg:hidden">
        <button onClick={toggleSidebar} className="text-xl text-gray-700">
          <FiX />
        </button>
      </div>

      <div className="text-center mb-6 mt-2">
        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-lg font-bold text-purple-700 mt-2">Al Noman</h2>
        <p className="text-sm text-gray-500">Sales Manager</p>
      </div>

      <ul className="space-y-4">
        <li>
          <NavLink to="/dashboard" end className={linkClass}>
            <FiGrid size={21} /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/orders" className={linkClass}>
            <LiaClipboardListSolid size={21} /> <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/products" className={linkClass}>
            <FiTruck size={21} /> <span>Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/buyer" className={linkClass}>
            <FiUser size={21} /> <span>Buyer</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/customers" className={linkClass}>
            <FiUsers size={21} /> <span>Customers</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/invoices" className={linkClass}>
            <FiFileText  size={21} /> <span>Invoices</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
