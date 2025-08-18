import React from "react";
import {
  FaCoffee,
  FaGlassWhiskey,
  FaWineBottle,
  FaLeaf,
  FaBeer,
  FaCocktail,
  FaMugHot,
  FaIceCream,
  FaSmile,
  FaShippingFast,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";

const beverages = [
  {
    id: 1,
    name: "Hot Coffee",
    icon: <FaCoffee size={35} />,
    desc: "Freshly brewed hot coffee to boost your energy.",
    bg: "bg-gradient-to-r from-amber-200 to-amber-400",
  },
  {
    id: 2,
    name: "Fresh Juice",
    icon: <FaLeaf size={35} />,
    desc: "Healthy fruit & vegetable juice for a refreshing day.",
    bg: "bg-gradient-to-r from-green-200 to-green-400",
  },
  {
    id: 3,
    name: "Cocktails",
    icon: <FaGlassWhiskey size={35} />,
    desc: "Classic and modern cocktails crafted with style.",
    bg: "bg-gradient-to-r from-purple-200 to-purple-400",
  },
  {
    id: 4,
    name: "Wine Collection",
    icon: <FaWineBottle size={35} />,
    desc: "Premium wines from around the world.",
    bg: "bg-gradient-to-r from-pink-200 to-pink-400",
  },
  {
    id: 5,
    name: "Smoothies",
    icon: <FaIceCream size={35} />,
    desc: "Delicious creamy smoothies made from fresh fruits.",
    bg: "bg-gradient-to-r from-orange-200 to-orange-400",
  },
  {
    id: 6,
    name: "Herbal Tea",
    icon: <FaMugHot size={35} />,
    desc: "Relax with a soothing cup of herbal tea.",
    bg: "bg-gradient-to-r from-teal-200 to-teal-400",
  },
  {
    id: 7,
    name: "Craft Beer",
    icon: <FaBeer size={35} />,
    desc: "Enjoy chilled craft beers with friends.",
    bg: "bg-gradient-to-r from-yellow-200 to-yellow-400",
  },
  {
    id: 8,
    name: "Mocktails",
    icon: <FaCocktail size={35} />,
    desc: "Non-alcoholic cocktails full of flavor and fun.",
    bg: "bg-gradient-to-r from-blue-200 to-blue-400",
  },
];

const Beverages = () => {
  return (
    <div className="min-h-screen py-12 px-6 p-4 md:p-4 md:px-6 lg:px-28">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#2c3e50] drop-shadow-md">
          Beverages
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Discover our wide selection of beverages — from refreshing juices to
          classic cocktails and premium wines.
        </p>
      </div>

      {/* Grid Section */}
      <div className=" grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {beverages.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer ${item.bg}`}
          >
            <div className="flex justify-center mb-4 text-gray-800">
              {item.icon}
            </div>
            <h2 className="text-lg font-bold text-center text-gray-800">
              {item.name}
            </h2>
            <p className="text-sm text-center text-gray-700 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Extra Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#2c3e50]">Why Choose Us?</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We provide a wide variety of fresh, high-quality beverages crafted
          with care. Whether you love coffee, wine, or smoothies — we’ve got
          something for everyone!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 mt-10">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-green-100 text-center">
          <div className="flex justify-center">
            <FaLeaf className="text-green-500 text-5xl mb-4 drop-shadow-lg hover:scale-110 transition" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">100% Natural</h3>
          <p className="text-gray-600 leading-relaxed">
            All beverages are crafted from the finest and freshest ingredients,
            ensuring pure quality in every sip.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-orange-100 text-center">
          <div className="flex justify-center">
            <FaGlassWhiskey className="text-orange-500 text-5xl mb-4 drop-shadow-lg hover:scale-110 transition" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Unique Taste</h3>
          <p className="text-gray-600 leading-relaxed">
            A variety of signature blends & flavors you won’t find anywhere
            else, crafted to surprise your taste buds.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-yellow-100 text-center">
          <div className="flex justify-center">
            <FaSmile className="text-yellow-500 text-5xl mb-4 drop-shadow-lg hover:scale-110 transition" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Customer Happiness
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Every drink is made to refresh your body & soul, leaving you smiling
            with every sip.
          </p>
        </div>
      </div>

      {/* Our Specials */}
      <div className="mb-16 ">
        <h3 className="text-3xl font-bold text-center mb-3 text-green-700">
          Our Specials
        </h3>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our handpicked collection of refreshing beverages crafted to
          keep you energized, healthy, and happy all day long.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Fresh Juices */}
          <div className="bg-gradient-to-tr from-green-50 to-green-100 p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-green-200">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-green-200 text-green-700 text-2xl font-bold">
              🥤
            </div>
            <h4 className="font-bold text-xl mb-2 text-green-800">
              Fresh Juices
            </h4>
            <p className="text-gray-600 mb-4">
              Made with seasonal fruits, packed with vitamins and energy.
            </p>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Order Now
            </button>
          </div>

          {/* Smoothies */}
          <div className="bg-gradient-to-tr from-pink-50 to-pink-100 p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-pink-200">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-pink-200 text-pink-700 text-2xl font-bold">
              🍓
            </div>
            <h4 className="font-bold text-xl mb-2 text-pink-800">Smoothies</h4>
            <p className="text-gray-600 mb-4">
              Blended perfection of fruits, milk, and love in every sip.
            </p>
            <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
              Try Smoothie
            </button>
          </div>

          {/* Herbal Drinks */}
          <div className="bg-gradient-to-tr from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-yellow-200">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-yellow-200 text-yellow-700 text-2xl font-bold">
              🌿
            </div>
            <h4 className="font-bold text-xl mb-2 text-yellow-800">
              Herbal Drinks
            </h4>
            <p className="text-gray-600 mb-4">
              Healthy herbal mixes to energize and keep you refreshed.
            </p>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mb-16">
        <h3 className="text-3xl font-extrabold text-center mb-10 text-green-700">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <FaStar className="text-yellow-400 text-2xl mr-1" />
              <FaStar className="text-yellow-400 text-2xl mr-1" />
              <FaStar className="text-yellow-400 text-2xl mr-1" />
              <FaStar className="text-yellow-400 text-2xl mr-1" />
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <p className="text-gray-600 italic leading-relaxed relative">
              <span className="text-3xl text-green-600 absolute -left-3 -top-2">
                “
              </span>
              The smoothies are heavenly! Best place for refreshing drinks.
              <span className="text-3xl text-green-600 absolute -right-3 -bottom-2">
                ”
              </span>
            </p>
            <h5 className="mt-5 font-semibold text-gray-800">- Sarah J.</h5>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <FaStar className="text-yellow-400 text-2xl mr-1" />
              <FaStar className="text-yellow-400 text-2xl mr-1" />
              <FaStar className="text-yellow-400 text-2xl mr-1" />
              <FaStar className="text-yellow-400 text-2xl mr-1" />
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <p className="text-gray-600 italic leading-relaxed relative">
              <span className="text-3xl text-green-600 absolute -left-3 -top-2">
                “
              </span>
              Loved their herbal teas. Very refreshing and natural taste.
              <span className="text-3xl text-green-600 absolute -right-3 -bottom-2">
                ”
              </span>
            </p>
            <h5 className="mt-5 font-semibold text-gray-800">- John D.</h5>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-green-100 p-8 rounded-2xl shadow">
        <FaThumbsUp className="mx-auto text-green-600 text-4xl mb-4" />
        <h3 className="text-2xl font-bold mb-3">
          Order Now & Refresh Yourself
        </h3>
        <p className="text-gray-600 mb-4">
          Don’t wait! Explore our beverage menu and enjoy your favorite drinks
          delivered to your doorstep.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition">
          Explore Beverages
        </button>
      </div>
    </div>
  );
};

export default Beverages;
