import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DasUpdateAndDeleteProduct = ({ product, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({ ...product });
  const axiosPublic = useAxiosPublic();

  console.log("Product data:", product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await axiosPublic.put(`/products/${product._id}`, formData);
      Swal.fire("Updated!", "Product updated successfully", "success");
      onUpdated();
      onClose();
    } catch (err) {
      Swal.fire("Error!", "Failed to update product", { icon: "error", text: err.message });
    }
  };

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.delete(`/products/${product._id}`);
          Swal.fire("Deleted!", "Product deleted successfully", "success");
          onUpdated();
          onClose();
        } catch (err) {
          Swal.fire("Error!", "Failed to delete product", { icon: "error", text: err.message });
        }
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl w-11/12 max-w-md shadow-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Update Product
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name || formData.productName || ""}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="text"
            name="category"
            value={formData.category || "NOT FOUND"}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="number"
            name="price"
            value={formData.price || "NOT FOUND"}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="number"
            name="discount"
            value={formData.discount || "NOT FOUND"}
            onChange={handleChange}
            placeholder="Discount"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="number"
            name="rating"
            value={formData.rating || "NOT FOUND"}
            onChange={handleChange}
            placeholder="Rating"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        <div className="flex justify-between gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="flex-1 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DasUpdateAndDeleteProduct;
