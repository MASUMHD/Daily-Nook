import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Swal from "sweetalert2";

const Blog = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=10")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((err) => console.error(err));
  }, []);

  const showAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Information",
      text: "This page is working!",
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Blog Content */}
      <div className="lg:col-span-2 space-y-8">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="border-b pb-8">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="rounded-xl w-full object-cover h-64 md:h-80 lg:h-80"
            />
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              {recipe.name}
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              {recipe.cuisine} • {recipe.servings} servings • {"Prep "}
              {recipe.prepTimeMinutes}min
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {recipe.instructions.slice(0, 10).join(" ")}
            </p>
            <button
              onClick={showAlert}
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-[6px] px-4 rounded"
            >
              Read More
            </button>
          </article>
        ))}
      </div>

      {/* Sidebar (Fixed on large screens) */}
      <div className="lg:sticky lg:top-36 h-fit space-y-8">
        {/* Blog Post List */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Recipe List</h3>
          <ul className="space-y-4 text-sm text-gray-700">
            {recipes.slice(0, 4).map((r) => (
              <li key={r.id} className="flex items-start gap-4">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium leading-tight">{r.name}</p>
                  <p className="text-gray-500 mt-1 text-xs">{r.cuisine}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Widget */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Media Widget</h3>
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90"
            >
              <FaFacebookF /> facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded hover:opacity-90"
            >
              <FaTwitter /> twitter
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded hover:opacity-90"
            >
              <FaInstagram /> instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded hover:opacity-90"
            >
              <FaLinkedinIn /> linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
