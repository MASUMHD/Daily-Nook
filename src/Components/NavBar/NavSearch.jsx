import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const NavSearch = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex items-center bg-white w-full  lg:w-96 px-4 py-2 rounded-lg relative">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full outline-none"
      />
      {searchText ? (
        <FaTimes
          size={16}
          className="absolute right-3 text-gray-500 cursor-pointer"
          onClick={() => setSearchText("")}
        />
      ) : (
        <IoSearch size={25} className="absolute right-4 text-gray-600" />
      )}
    </div>
  );
};

export default NavSearch;
