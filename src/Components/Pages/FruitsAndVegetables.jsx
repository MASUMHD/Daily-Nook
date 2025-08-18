/* eslint-disable no-unused-vars */
import React from "react";
import useProducts from "../Hooks/useProducts";
import Card from "../Share/Card";
import Loading from "../Share/Loading";
import { motion } from "framer-motion";

const FruitsAndVegetables = () => {
  const { products, isLoading, isError, error } = useProducts();

  const vegetablesProducts = products.filter(
    (product) => product.category?.toLowerCase() === "vegetables"
  );

  if (isLoading)
    return (
      <p className="text-center mt-5">
        <Loading />
      </p>
    );

  if (isError)
    return (
      <p className="text-center text-red-500 mt-5">Error: {error.message}</p>
    );

  // Motion variants for cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="p-4 md:p-4 md:px-6 lg:px-28 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {vegetablesProducts.map((product, index) => {
        // Alternate left and right for staggered effect
        const direction = index % 2 === 0 ? "left" : "right";
        return (
          <motion.div
            key={product._id}
            custom={direction}
            variants={cardVariants}
            whileHover={{ scale: 1 }}
            className="cursor-pointer"
          >
            <Card product={product} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FruitsAndVegetables;
