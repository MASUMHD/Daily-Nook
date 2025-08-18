/* eslint-disable no-unused-vars */
import useProducts from "../Hooks/useProducts";
import Card from "../Share/Card";
import Loading from "../Share/Loading";
import { motion } from "framer-motion";

const Products = () => {
  const { products, isLoading, isError, error } = useProducts();

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // delay between children
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="p-4 md:p-4 md:px-6 lg:px-28">
      <div>
        <h1 className="text-2xl font-bold mb-5">Products</h1>

        {/* Loading & Error */}
        {isLoading && (
          <p className="text-center mt-5">
            <Loading />
          </p>
        )}
        {isError && (
          <p className="text-center text-red-500 mt-5">
            Error: {error.message}
          </p>
        )}

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <Card product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
