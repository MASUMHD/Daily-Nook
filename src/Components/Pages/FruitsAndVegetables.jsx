import useProducts from "../Hooks/useProducts";
import Card from "../Share/Card";
import Loading from "../Share/Loading";

const FruitsAndVegetables = () => {
  const { products, isLoading, isError, error } = useProducts();

  const vegetablesProducts = products.filter(
    (product) => product.category?.toLowerCase() === "vegetables"
  );

  console.log(vegetablesProducts);

  {
    isLoading && (
      <p className="text-center mt-5">
        <Loading />
      </p>
    );
  }
  {
    isError && (
      <p className="text-center text-red-500 mt-5">Error: {error.message}</p>
    );
  }
  return (
    <div className="p-4 md:p-4 md:px-6 lg:px-28 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
      {vegetablesProducts.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </div>
  );
};

export default FruitsAndVegetables;
