import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import Loading from "./Loading";
import Card from "./Card";

const DesReview = ({ product }) => {
  const { products, isLoading, isError, error } = useProducts();
  const [activeTab, setActiveTab] = useState("description");
  const { description } = product;

  return (
    <div className="mb-20">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 text-lg font-medium ${
            activeTab === "description"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`ml-4 px-4 py-2 text-lg font-medium ${
            activeTab === "reviews"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          Reviews (2)
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 text-base text-gray-600 leading-relaxed">
        {activeTab === "description" && (
          <p>
            {description
              ? description
              : "No description available for this product."}
          </p>
        )}
        {activeTab === "reviews" && <p>No reviews yet.</p>}
      </div>

      {/* Products */}
      <div className="mt-16">
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
          {products.slice(0, 6).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesReview;
