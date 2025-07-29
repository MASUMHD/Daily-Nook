import useProducts from "../../Hooks/useProducts";
import Loading from "../../Share/Loading";
import DasProductsTable from "./DasProductsTable";

const Products = () => {
  const { products, isLoading, isError, error } = useProducts();

  // Loading and error
  if (isLoading) {
    return (
      <p className=" h-screen flex items-center justify-center">
        <Loading />
      </p>
    );
  }
  if (isError) {
    return (
      <p className="text-center text-red-500 mt-5">Error: {error.message}</p>
    );
  }

  return (
    <div className="mt-14">
      {products.map((product) => (
        <div key={product._id} className="p-4 border rounded mb-4">
          <p>
            <strong>{product.name || product.productName}</strong> - $
            {product.price}
          </p>
        </div>
      ))}


      <DasProductsTable products={products} />
    </div>
  );
};

export default Products;
