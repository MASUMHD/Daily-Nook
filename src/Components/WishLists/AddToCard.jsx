import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import useCartItems from "../Hooks/useCartItems";
import Loading from "../Share/Loading";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AddToCard = () => {
  const { cartItems, isLoading, isError, refetch } = useCartItems();
  const [quantities, setQuantities] = useState({});
  const axiosPublic = useAxiosPublic();

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosPublic.delete(`/cart/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
          refetch();
        } 
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the item.", "error");
        console.error(error);
      }
    }
  };

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
                  <TiDeleteOutline
                    onClick={() => handleDelete(item._id)}
                    className="absolute -top-2 -left-2 text-green-600 bg-white rounded-full hover:bg-red-600 hover:text-white duration-300 cursor-pointer"
                    size={25}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}BD</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item._id, -1)}
                      className="p-2 bg-gray-200 rounded"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span>{quantities[item._id] || 1}</span>
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
          <div className="mt-4 text-sm">
            <p>
              Subtotal: <span className="float-right">17000BD</span>
            </p>
            <p>
              Sales tax (6.7%): <span className="float-right">120BD</span>
            </p>
            <p>
              Shipping Fee: <span className="float-right">0BD</span>
            </p>
            <p className="font-semibold">
              Total due:{" "}
              <span className="float-right text-blue-600">17120BD</span>
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
