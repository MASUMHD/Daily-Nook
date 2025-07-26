import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import useCartItems from "../Hooks/useCartItems";
import Loading from "../Share/Loading";
import DeleteButton from "./DeleteButton";

const AddToCard = () => {
  const { cartItems, isLoading, isError, refetch } = useCartItems();
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  // calculate total price
  const getTotalPrice = () => {
    let subtotal = 0;

    cartItems.forEach((item) => {
      const quantity = quantities[item._id] || 1;
      subtotal += (item.price || 0) * quantity;
    });

    const tax = subtotal * 0.067;
    const shipping = 0;
    const totalDue = subtotal + tax + shipping;

    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      shipping: shipping.toFixed(2),
      totalDue: totalDue.toFixed(2),
    };
  };

  const { subtotal, tax, shipping, totalDue } = getTotalPrice();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );

  if (isError)
    return (
      <p className="p-4 text-red-500 text-center">Failed to load cart items.</p>
    );

  return (
    <div className="p-4 md:px-6 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        {cartItems.length === 0 ? (
          <div className="flex items-center justify-center h-screen">
            <p className="text-gray-600 text-center text-xl">
              No items in cart.
              <br />
              Add some items to your cart.
            </p>
          </div>
        ) : (
          <div className="space-y-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 relative">
                <div className="relative">
                  <img
                    src={item["first-image"] || item.images?.[0]}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  {/* Delete Button */}
                  <DeleteButton refetch={refetch} item={item} />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold">
                    {item.name || item.productName}
                  </h3>
                  <p className="text-gray-600">{item.price}BD</p>

                  <div className="flex items-center gap-2 mt-2">
                    {/* minus button */}
                    <button
                      onClick={() => updateQuantity(item._id, -1)}
                      className="p-2 bg-gray-200 rounded"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span>{quantities[item._id] || 1}</span>

                    {/* plus button */}
                    <button
                      onClick={() => updateQuantity(item._id, 1)}
                      className="p-2 bg-gray-200 rounded"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="border-t mt-5 pt-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Gift Card/Discount code"
              className="border p-2 rounded w-full mr-2"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Apply
            </button>
          </div>

          {/* total cash and tax and shipping fee section */}
          <div className="mt-4 text-lg font-semibold text-gray-900 ">
            <p className="mb-2 p-3 border-4 rounded-t-xl border-b">
              Subtotal: <span className="float-right">{subtotal}</span>
            </p>
            <p className="mb-2 p-3 border-4 border-b">
              Sales tax (6.7%): <span className="float-right">{tax}</span>
            </p>
            <p className="mb-2 p-3 border-4 border-b">
              Shipping Fee: <span className="float-right">{shipping}BD</span>
            </p>
            <p className="mb-2 p-4 rounded-b-xl font-bold border-4 border-b">
              Total due:{" "}
              <span className="float-right text-blue-600">{totalDue}BD</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow-md space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="First Name" className="border p-2 rounded" />
          <input placeholder="Last Name" className="border p-2 rounded" />
          <input
            placeholder="Email"
            className="border p-2 rounded col-span-2"
          />
          <div className="flex col-span-2 gap-2">
            <input value="+88" readOnly className="border p-2 w-20 rounded" />
            <input
              placeholder="Phone Number"
              className="border p-2 flex-1 rounded"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold border-b pb-2">
          Shipping Details
        </h2>
        <input
          placeholder="Flat/House no."
          className="border p-2 rounded w-full"
        />
        <input placeholder="Address" className="border p-2 rounded w-full" />
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="City" className="border p-2 rounded" />
          <input placeholder="State" className="border p-2 rounded" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="Postal Code" className="border p-2 rounded" />
          <input placeholder="Famous Landmark" className="border p-2 rounded" />
        </div>
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked />
          <span className="text-sm">
            My Shipping and Billing address are the same
          </span>
        </label>

        <button className="w-full bg-green-500 text-white py-2 rounded mt-4">
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddToCard;
