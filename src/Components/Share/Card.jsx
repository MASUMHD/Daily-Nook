import { FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Card = ({ product }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const email = user?.email || "";

  const {
    name,
    price,
    discount,
    rating,
    description,
    firstImage = product["first-image"] || product.images?.[0],
    oldPrice = (price * 1.2).toFixed(2),
  } = product;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  const handleAddToCart = async () => {
    if (!email) {
      Swal.fire("Error", "Please log in to add items to cart", "error");
      return;
    }

    try {
      const res = await axiosPublic.post("/cart", {
        productId: product._id,
        email,
      });  
      if (res.data.insertedId) {
        Swal.fire("Success", "Added to cart!", "success");
      }
    } catch (err) {
      console.error("Add to cart failed:", err);
      Swal.fire("Error", "Already product added to cart", "error");
    }
    
  };
  

 



  return (
    <div className="relative bg-white rounded-xl border shadow-sm p-3 w-full max-w-[250px] mx-auto hover:scale-105 transition duration-500 flex flex-col">
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          {discount}
        </div>
      )}

      <div className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer">
        <FaHeart />
      </div>

      <Link to={`/products/${product._id}`}>
        <div className="h-32 flex justify-center items-center mb-3">
          <img
            src={firstImage}
            alt={name}
            className="max-h-full rounded-md object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </Link>

      <Link
        className="cursor-pointer hover:text-[#634C9F] hover:underline"
        to={`/products/${product._id}`}
      >
        <h3 className="text-sm font-semibold line-clamp-2">{name}</h3>
      </Link>

      <p className="text-xs text-gray-500 line-clamp-1 mt-1">{description}</p>

      <div className="flex items-center text-sm mt-1">
        <div className="flex">{renderStars()}</div>
        <span className="text-gray-500 ml-1 text-xs">({rating})</span>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-red-600 font-bold">{price} BD</span>
        <span className="line-through text-gray-400 text-sm">
          {oldPrice} BD
        </span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <button className="flex items-center gap-5 py-1  text-xs font-medium  rounded-full">
          <div
            className="flex items-center bg-green-100 text-green-600 rounded-lg p-1 hover:bg-green-600 hover:text-white transition duration-500"
            onClick={handleAddToCart}
          >
            <IoMdCart size={23} />
          </div>{" "}
          <span className="text-green-600">IN STOCK</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
