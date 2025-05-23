import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../Share/Card";
import useProducts from "../Hooks/useProducts";
import Loading from "../Share/Loading";
import { Link } from "react-router-dom";

const Drinks = () => {
  const { products, isLoading, isError, error } = useProducts();

  const fruitProducts = products.filter(
    (product) => product.category?.toLowerCase() === "dairy"
  );
  return (
    <main className="mt-2 md:mt-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <h1 className="text-lg md:text-xl font-semibold md:font-bold">
            Drinks All Items
          </h1>
          <p className="hidden md:block text-sm text-[#9CA3AF]">
            New products with updated stocks and discounts.
          </p>
        </div>
        <div>
          <Link to="/products">
            <button className="flex items-center gap-1 font-medium md:font-semibold  md:border border-gray-400 rounded-full px-3 py-[3px] hover:bg-[#634C9F] hover:text-white">
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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
        {fruitProducts.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Drinks;
