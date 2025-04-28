import { BsHouse } from "react-icons/bs";
import { CiApple } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import {
  LiaBreadSliceSolid,
  LiaCookieBiteSolid,
  LiaEggSolid,
  LiaLeafSolid,
} from "react-icons/lia";
import {
  PiBabyLight,
  PiCoffeeLight,
  PiHeartbeatLight,
  PiSnowflakeLight,
} from "react-icons/pi";
import { RiGalleryView2 } from "react-icons/ri";
import { TbMeat } from "react-icons/tb";

const categories = [
  { name: "Fruits & Vegetables", icon: <CiApple /> },
  { name: "Meats & Seafood", icon: <TbMeat /> },
  { name: "Breakfast & Dairy", icon: <LiaEggSolid /> },
  { name: "Breads & Bakery", icon: <LiaBreadSliceSolid /> },
  { name: "Beverages", icon: <PiCoffeeLight /> },
  { name: "Frozen Foods", icon: <PiSnowflakeLight /> },
  { name: "Biscuits & Snacks", icon: <LiaCookieBiteSolid /> },
  { name: "Grocery & Staples", icon: <LiaLeafSolid /> },
  { name: "Household Needs", icon: <BsHouse /> },
  { name: "Healthcare", icon: <PiHeartbeatLight /> },
  { name: "Baby & Pregnancy", icon: <PiBabyLight /> },
];

const AllCategories = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-3 bg-green-100 font-bold text-[#030712]">
      <RiGalleryView2 size={25} />
        <span>
        All Categories
        </span>
        <div className="ml-auto mr-2 mt-1">
        <IoIosArrowDown size={20}  />
        </div>
      </div>

      {/* List */}
      <ul className="divide-y divide-gray-200">
        {categories.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <span className="text-[#030712] text-2xl">{item.icon}</span>
            <span className="text-[#030712] font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCategories;
