/* eslint-disable no-unused-vars */
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../Share/Card";
import useProducts from "../Hooks/useProducts";
import Loading from "../Share/Loading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewArrivals = () => {
  const { products, isLoading, isError, error } = useProducts();

  // Filter products by category
  const vegetablesProducts = products.filter(
    (product) => product.category?.toLowerCase() === "vegetables"
  );

  // Motion Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="mt-2 md:mt-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <h1 className="text-lg md:text-xl font-semibold md:font-bold">
            New Arrivals
          </h1>
          <p className="hidden md:block text-sm text-[#9CA3AF]">
            Dont miss this opportunity at a special discount just for this week.
          </p>
        </div>
        <div>
          {/* View All Button */}
          <Link to="/products">
            <button className="flex items-center gap-1 font-medium md:font-semibold md:border border-gray-400 rounded-full px-3 py-[3px] hover:bg-[#634C9F] hover:text-white">
              <span>View All</span> <IoIosArrowRoundForward size={25} />
            </button>
          </Link>
        </div>
      </div>

      {/* Loading & Error */}
      {isLoading && (
        <p className="text-center mt-5">
          <Loading />
        </p>
      )}
      {isError && (
        <p className="text-center text-red-500 mt-5">Error: {error.message}</p>
      )}

      {/* Products Grid with Animation */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        variants={containerVariants}
      >
        {/* Products */}
        {vegetablesProducts.map((product) => (
          <motion.div key={product._id} variants={cardVariants}>
            <Card product={product} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default NewArrivals;
