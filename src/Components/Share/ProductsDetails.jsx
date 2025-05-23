import { useParams } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import Loading from "../Share/Loading";
import { useState } from "react";
import {
  FaStar,
  FaHeart,
  FaShareAlt,
  FaExchangeAlt,
  FaMinus,
  FaPlus,
  FaRegClock,
  FaCreditCard,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const ProductsDetails = () => {
  const { id } = useParams();
  const { products, isLoading } = useProducts();
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantityCount, setQuantityCount] = useState(1);

  if (isLoading) return <Loading />;

  const product = products.find((p) => p._id === id);
  if (!product) return <p className="text-center mt-5">Product not found.</p>;

  const {
    name,
    productName,
    description,
    price,
    discount,
    rating,
    images,
    category,
    collate,
    quantity,
    date,
    ["first-image"]: firstImage,
    ["second-image"]: secondImage,
    ["third-image"]: thirdImage,
  } = product;

  const allImages = images || [firstImage, secondImage, thirdImage];
  const mainImage = selectedImage || allImages?.[0];

  return (
    <div className="max-w-7xl mx-auto p-4 md:flex gap-8 mt-0 lg:mt-10">
      {/* Image Section */}
      <div className="md:w-1/2">
        <div className="relative">
          <img
            src={mainImage}
            alt={name || productName}
            className="w-full rounded-xl h-[400px] object-contain"
          />
        </div>
        <div className="flex gap-3 mt-4">
          {allImages?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumbnail"
              className={`w-20 h-20 object-cover rounded border-2 cursor-pointer ${
                selectedImage === img
                  ? "border-green-600"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{name || productName}</h1>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: Math.floor(rating || 0) }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-gray-500">({rating})</p>
        </div>
        <hr />
        <div>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-red-600">{price} BD</span>
          {discount && (
            <span className="bg-red-100 text-gray-600 px-2 py-1 rounded font-semibold">
              -{discount}
            </span>
          )}
        </div>

        <div className="w-full md:w-1/3 flex items-center text-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mt-4 cursor-pointer">
          <a
            href={`https://wa.me/?text=I'm interested in buying ${
              name || productName
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2"
          >
            <FaWhatsapp /> Order on WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-4 ">
            <button
              onClick={() => setQuantityCount(Math.max(1, quantityCount - 1))}
              className="p-2 border rounded"
            >
              <FaMinus />
            </button>
            <span className="px-4">{quantityCount}</span>
            <button
              onClick={() => setQuantityCount(quantityCount + 1)}
              className="p-2 border rounded"
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 text-white px-10 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto flex items-center gap-2">
              <MdOutlineShoppingBag size={20} />
              Add to Cart
            </button>
            <button className="bg-black text-white px-10 py-2 rounded hover:bg-gray-800 transition w-full sm:w-auto flex items-center gap-2">
              <MdOutlineShoppingBag size={20} /> Buy Now
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaCreditCard className="text-lg" />
          <p>Payment upon receipt, card, Google Pay, -5% for online</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaShieldAlt className="text-lg" />
          <p>Warranty: No returns unless defective.</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaRegClock className="text-lg" />
          <p>
            Offer ends in:{" "}
            <span className="text-red-500 font-semibold">81:06:50</span>
          </p>
        </div>

        <div className="flex items-center gap-4 mt-6 text-sm text-gray-700">
          <button className="flex items-center gap-2 hover:text-green-600">
            <FaHeart /> Add to wishlist
          </button>
          <button className="flex items-center gap-2 hover:text-green-600">
            <FaShareAlt /> Share
          </button>
          <button className="flex items-center gap-2 hover:text-green-600">
            <FaExchangeAlt /> Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
