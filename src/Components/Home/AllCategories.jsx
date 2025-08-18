/* eslint-disable no-unused-vars */
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
import { motion } from "framer-motion";

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

// Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger list items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AllCategories = () => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-3 bg-green-100 font-bold text-[#030712]">
        <RiGalleryView2 size={25} />
        <span>All Categories</span>
        <div className="ml-auto mr-2 mt-1">
          <IoIosArrowDown size={20} />
        </div>
      </div>

      {/* List */}
      <ul className="divide-y divide-gray-200">
        {categories.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer transition-colors"
            variants={itemVariants}
          >
            <span className="text-[#030712] text-2xl">{item.icon}</span>
            <span className="text-[#030712] font-medium">{item.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AllCategories;
