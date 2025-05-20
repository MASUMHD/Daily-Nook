import { useForm } from "react-hook-form";
import { useState } from "react";
import {  IoMdAddCircleOutline } from "react-icons/io";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();

  // States for category and modal
  const [categories, setCategories] = useState([
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bakery",
    "Meat",
    "Beverages",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
    }
    setNewCategory("");
    setShowCategoryModal(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mt-14 bg-white shadow-md rounded">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Add Products
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            {...register("productName", { required: true })}
            className="w-full border rounded px-3 py-2 bg-red-50"
            placeholder="Bananas, Bunch"
          />
        </div>

        {/* Category and Quality */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block font-semibold">Category</label>
              <button
                type="button"
                className=" text-sm flex items-center pr-1"
                onClick={() => setShowCategoryModal(true)}
              >
                <span className="text-xl hover:text-[#634C9F] hover:p-1 hover:bg-gray-200 rounded-full duration-200 ease-in">
                  <IoMdAddCircleOutline size={20} />
                </span>
              </button>
            </div>
            <select
              {...register("category", { required: true })}
              className="w-full border rounded px-3 py-2 bg-red-50"
            >
              <option value="">Select a category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Quality</label>
            <input
              {...register("quality", { required: true })}
              className="w-full border rounded px-3 py-2 bg-red-50"
              placeholder="Organic"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="block font-semibold mb-1">Date</label>
            <input
              {...register("date", { required: true })}
              className="w-full border rounded px-3 py-2 bg-red-50"
              placeholder="16/7/2025"
              type="date"
            />
          </div>
        </div>

        {/* Price, Quantity, Discount, Rating */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              {...register("price", { required: true })}
              className="w-full border rounded px-3 py-2 bg-red-50 text-red-600 font-bold"
              placeholder="80BD"
              type="text"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Available Quantity
            </label>
            <input
              {...register("quantity", { required: true })}
              className="w-full border rounded px-3 py-2 bg-red-50 text-red-600 font-bold"
              placeholder="50000"
              type="number"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Discount</label>
            <input
              {...register("discount", { required: true })}
              className="w-full border rounded px-3 py-2 bg-red-50"
              placeholder="15%"
              type="text"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Rating</label>
            <input
              {...register("rating", { required: true })}
              className="w-full border rounded px-3 py-2 bg-red-50"
              placeholder="4.5"
              type="number"
              step="0.1"
              min="0"
              max="5"
            />
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-semibold mb-1">Short Description</label>
          <textarea
            {...register("description")}
            className="w-full border rounded px-3 py-2 bg-red-50"
            placeholder="Enter short description..."
          />
        </div>

        {/* Image Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <label className="block font-semibold mb-1">Image {i}</label>
              <input
                type="file"
                accept="image/*"
                {...register(`image${i}`, { required: true })}
                className="w-full border rounded px-3 py-2 bg-red-50"
              />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-[#634C9F] text-white w-full py-2 rounded hover:bg-green-500 transition"
          >
            Submit Product
          </button>
        </div>
      </form>

      {/* CATEGORY MODAL */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-80 space-y-4">
            <h2 className="text-xl font-semibold">Add New Category</h2>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter new category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowCategoryModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProducts;
