import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import {  MdOutlineAddPhotoAlternate } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();

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
  const [imagePreviews, setImagePreviews] = useState([null, null, null]);
  const axiosPublic = useAxiosPublic();

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
    }
    setNewCategory("");
    setShowCategoryModal(false);
  };

 const onSubmit = async (data) => {
  try {
    const imageFields = [data.image1[0], data.image2[0], data.image3[0]];
    const imageUrls = [];

    for (let imageFile of imageFields) {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await axios.post(img_hosting_api, formData);

      if (response.data && response.data.data && response.data.data.url) {
        imageUrls.push(response.data.data.url);
      } else {
        throw new Error("Image upload failed");
      }
    }

    const productData = {
      productName: data.productName,
      category: data.category,
      quality: data.quality,
      date: data.date,
      price: data.price,
      quantity: data.quantity,
      discount: data.discount,
      rating: data.rating,
      description: data.description,
      images: imageUrls, // array of uploaded image URLs
    };

    const result = await axiosPublic.post("/products", productData);

    if (result.status === 200 || result.status === 201) {
      Swal.fire("Success", "Product added successfully!", "success");
      reset();
      setImagePreviews([null, null, null]); // Reset image previews
    }
  } catch (error) {
    console.error("Error adding product:", error);
    Swal.fire("Error", "Failed to add the product. Please try again.", "error");
  }
};


  return (
    <div className="max-w-5xl mx-auto mt-16 ">
      <h1 className="text-4xl md:text-4xl font-bold mb-3 text-center">
        Add Products
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {[1, 2, 3].map((i, index) => (
            <div key={i}>
              <label className="block font-semibold mb-1">Image {i}</label>
              <div className="w-full border-2 border-dashed border-gray-300 rounded-lg h-32 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100 transition relative overflow-hidden ">
                <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer p-2">
                  {imagePreviews[index] ? (
                    <img
                      src={imagePreviews[index]}
                      alt={`Preview ${i}`}
                      className="w-1/2 h-full object-cover rounded "
                    />
                  ) : (
                    <>
                      <MdOutlineAddPhotoAlternate className="h-8 w-8 mb-2 text-gray-400" />
                      <span className="text-sm text-center">
                        Upload Your Product Photo
                      </span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    {...register(`image${i}`, {
                      required: true,
                      onChange: (e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            const newPreviews = [...imagePreviews];
                            newPreviews[index] = reader.result;
                            setImagePreviews(newPreviews);
                          };
                          reader.readAsDataURL(file);
                        }
                      },
                    })}
                    className="hidden"
                  />
                </label>
              </div>
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
