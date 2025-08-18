/* eslint-disable no-unused-vars */
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
  FaThumbsUp,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const leftCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const rightCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen py-10 px-6 md:px-6 lg:px-28">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
        className="text-center mb-10"
      >
        <h1 className=" text-xl md:text-2xl lg:text-5xl font-extrabold text-[#2c3e50] drop-shadow-md">
          Beverages
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Discover our wide selection of beverages — from refreshing juices to
          classic cocktails and premium wines.
        </p>
      </motion.div>

      {/* Grid Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {beverages.map((item, index) => (
          <motion.div
            key={item.id}
            className={`p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer ${item.bg}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={index % 2 === 0 ? cardVariantsLeft : cardVariantsRight}
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
          </motion.div>
        ))}
      </div>

      {/* Extra Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-[#2c3e50]">Why Choose Us?</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We provide a wide variety of fresh, high-quality beverages crafted
          with care. Whether you love coffee, wine, or smoothies — we’ve got
          something for everyone!
        </p>
      </motion.div>

      {/* Special Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <motion.div
          className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-green-100 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariantsLeft}
        >
          <div className="flex justify-center">
            <FaLeaf className="text-green-500 text-5xl mb-4 drop-shadow-lg hover:scale-110 transition" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">100% Natural</h3>
          <p className="text-gray-600 leading-relaxed">
            All beverages are crafted from the finest and freshest ingredients,
            ensuring pure quality in every sip.
          </p>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-orange-100 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariantsRight}
        >
          <div className="flex justify-center">
            <FaGlassWhiskey className="text-orange-500 text-5xl mb-4 drop-shadow-lg hover:scale-110 transition" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Unique Taste</h3>
          <p className="text-gray-600 leading-relaxed">
            A variety of signature blends & flavors you won’t find anywhere
            else.
          </p>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-yellow-100 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariantsLeft}
        >
          <div className="flex justify-center">
            <FaSmile className="text-yellow-500 text-5xl mb-4 drop-shadow-lg hover:scale-110 transition" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Customer Happiness
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Every drink is made to refresh your body & soul, leaving you
            smiling.
          </p>
        </motion.div>
      </div>

      {/* Our Specials Section - Enhanced */}
      <div className="mb-16 mt-16">
        <h3 className="text-3xl font-bold text-center mb-3 text-green-700">
          Our Specials
        </h3>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our handpicked collection of refreshing beverages crafted to
          keep you energized, healthy, and happy all day long.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fresh Juices",
              emoji: "🥤",
              color: "green",
              desc: "Made with seasonal fruits, packed with vitamins and energy.",
              button: "Order Now",
            },
            {
              title: "Smoothies",
              emoji: "🍓",
              color: "pink",
              desc: "Blended perfection of fruits, milk, and love in every sip.",
              button: "Try Smoothie",
            },
            {
              title: "Herbal Drinks",
              emoji: "🌿",
              color: "yellow",
              desc: "Healthy herbal mixes to energize and keep you refreshed.",
              button: "Discover More",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-tr from-${item.color}-50 to-${item.color}-100 p-6 rounded-2xl shadow-lg border border-${item.color}-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              variants={index % 2 === 0 ? leftCardVariants : rightCardVariants}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-${item.color}-200 text-${item.color}-700 text-2xl font-bold`}
              >
                {item.emoji}
              </div>
              <h4 className={`font-bold text-xl mb-2 text-${item.color}-800`}>
                {item.title}
              </h4>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button
                className={`px-4 py-2 bg-${item.color}-600 text-white rounded-lg hover:bg-${item.color}-700 transition`}
              >
                {item.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
        className="mb-16 mt-16"
      >
        <h3 className="text-3xl font-extrabold text-center mb-10 text-green-700">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariantsLeft}
          >
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl mr-1" />
              ))}
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
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariantsRight}
          >
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl mr-1" />
              ))}
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
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
        className="text-center bg-green-100 p-8 rounded-2xl shadow"
      >
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
      </motion.div>
    </div>
  );
};

export default Beverages;
