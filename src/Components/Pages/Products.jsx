import useProducts from "../Hooks/useProducts";
import Card from "../Share/Card";
import Loading from "../Share/Loading";

const Products = () => {
  const { products, isLoading, isError, error } = useProducts();
  return (
    <div className="p-4 md:p-4 md:px-6 lg:px-28">
      <div className="">
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
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
