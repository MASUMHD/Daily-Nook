import { NavLink } from 'react-router-dom';
import {
  FiGrid,
  FiClipboard,
  FiTruck,
  FiUser,
  FiUsers,
  FiFileText,
  FiMessageSquare,
  FiCheckCircle,
  FiUserCheck,
  FiLock,
  FiSettings
} from 'react-icons/fi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { BsDot } from 'react-icons/bs';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center px-4 py-2 space-x-3 transition-all duration-200 ${
      isActive
        ? 'bg-green-500 text-white rounded-full'
        : 'text-black hover:bg-gray-100 rounded-md'
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
          ✕
        </button>
      </div>

      {/* User Info */}
      <div className="text-center mb-6 mt-2">
        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-lg font-bold text-purple-700 mt-2">Al Noman</h2>
        <p className="text-sm text-gray-500">Sales Manager</p>
      </div>

     <div className="h-[calc(100vh-40px)] overflow-y-auto pr-1 pb-48  md:pb-40">
       {/* Main Navigation */}
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
            <FiFileText size={21} /> <span>Invoices</span>
          </NavLink>
        </li>
      </ul>

      {/* Apps Section */}
      <div className='flex items-center space-x-1 mt-6 text-gray-600'>
        <BsDot size={20} />
        <p>Apps</p>
      </div>

      <ul className="space-y-4 mt-4">
        <li className="relative">
          <NavLink to="/dashboard/chats" className={linkClass}>
            <FiMessageSquare size={21} /> <span>Chats</span>
          </NavLink>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500 text-white text-xs px-2 rounded-full">2</span>
        </li>
        <li>
          <NavLink to="/dashboard/email" className={linkClass}>
            <FiClipboard size={21} /> <span>Email</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/todo" className={linkClass}>
            <FiCheckCircle size={21} /> <span>Todo App</span>
          </NavLink>
        </li>
      </ul>

      {/* Pages Section */}
      <div className='flex items-center space-x-1 mt-6 text-gray-600'>
        <BsDot size={20} />
        <p>Pages</p>
      </div>
      
      <ul className="space-y-4 mt-4">
        <li>
          <NavLink to="/dashboard/profile" className={linkClass}>
            <FiUserCheck size={21} /> <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users" className={linkClass}>
            <FiUsers size={21} /> <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/auth" className={linkClass}>
            <FiLock size={21} /> <span>Authentication</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/errors" className={linkClass}>
            <FiFileText size={21} /> <span>Error Pages</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/settings" className={linkClass}>
            <FiSettings size={21} /> <span>Settings</span>
          </NavLink>
        </li>
        <li className="relative">
          <NavLink to="/dashboard/pricing" className={linkClass}>
            <FiFileText size={21} /> <span>Pricing Table</span>
          </NavLink>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500 text-white text-xs px-2 rounded-full">New</span>
        </li>
      </ul>
     </div>
    </div>
  );
};

export default Sidebar;