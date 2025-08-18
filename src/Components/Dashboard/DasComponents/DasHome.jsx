import { useState } from "react";
import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiSmile,
  FiX,
} from "react-icons/fi";

const DasHome = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="mt-14 p-6 bg-gray-100 min-h-screen relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-8 shadow-lg mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome to Daily Nook
        </h1>
        <p className="mt-2 text-lg opacity-90">
          Your one-stop shop for all kinds of products 🚀
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4 hover:scale-105 transform transition duration-300">
          <FiUsers className="text-3xl text-blue-500" />
          <div>
            <h2 className="text-gray-500 font-medium">Total Users</h2>
            <p className="text-2xl font-bold text-gray-800 mt-1">1,234</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4 hover:scale-105 transform transition duration-300">
          <FiShoppingCart className="text-3xl text-green-500" />
          <div>
            <h2 className="text-gray-500 font-medium">Total Orders</h2>
            <p className="text-2xl font-bold text-gray-800 mt-1">567</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4 hover:scale-105 transform transition duration-300">
          <FiDollarSign className="text-3xl text-yellow-500" />
          <div>
            <h2 className="text-gray-500 font-medium">Revenue</h2>
            <p className="text-2xl font-bold text-green-500 mt-1">$12,345</p>
          </div>
        </div>
      </div>

      

      {/* Welcome Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-green-500 rounded-2xl shadow-2xl p-8 w-11/12 max-w-md relative">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-200"
            >
              <FiX />
            </button>

            {/* Decorative icon */}
            <FiSmile size={28} className="absolute top-2 left-2 opacity-20" />

            <h2 className="text-2xl font-bold text-white mb-2">Hello Admin!</h2>
            <p className="text-white mb-4">
              Welcome back! This is your dashboard home where you can manage
              users, orders, products, and view statistics. Keep track of your
              application's performance and updates.
            </p>

            <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              View Stats
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DasHome;
