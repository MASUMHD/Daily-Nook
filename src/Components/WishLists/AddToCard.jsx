import useCartItems from "../Hooks/useCartItems";
import Loading from "../Share/Loading";

const AddToCard = () => {
  const { cartItems, isLoading, isError } = useCartItems();

  if (isLoading) return <div className="p-4 text-center mt-16"><Loading /></div>;
  if (isError) return <p className="p-4 text-red-500">Failed to load cart items.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item._id} className="p-4 border rounded shadow">
              <img
                src={item["first-image"] || item.images?.[0]}
                alt={item.name}
                className="h-32 mx-auto"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price} BD</p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToCard;
