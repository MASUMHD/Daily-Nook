import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Swal from "sweetalert2";

const NavSearch = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim()) {
      Swal.fire({
        title: "🔍 Searching...",
        text: `Looking for "${searchText}"`,
        icon: "info",
        showConfirmButton: false,
        timer: 2000,
        background: "#f9fafb",
        color: "#374151",
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Please enter something to search.",
        icon: "warning",
        confirmButtonColor: "#6366f1",
      });
    }
  };

  return (
    <div className="flex items-center bg-white w-full lg:w-96 px-4 py-2 rounded-lg relative shadow-sm border border-gray-200">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full outline-none text-gray-700"
      />

      {searchText ? (
        <FaTimes
          size={16}
          className="absolute right-12 text-gray-500 cursor-pointer hover:text-red-500 transition"
          onClick={() => setSearchText("")}
        />
      ) : null}

      <IoSearch
        size={25}
        className="absolute right-4 text-gray-600 cursor-pointer hover:text-indigo-600 transition"
        onClick={handleSearch}
      />
    </div>
  );
};

export default NavSearch;
