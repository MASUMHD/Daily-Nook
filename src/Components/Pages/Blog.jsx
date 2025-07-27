import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Blog Content */}
      <div className="lg:col-span-2">
        <img
          src="https://i.postimg.cc/vHNfmsf3/55.png"
          alt="Blog Main"
          className="rounded-xl h-1/2 w-full  object-cover"
        />
        <h2 className="text-2xl md:text-3xl font-bold mt-6">
          How grocers are approaching delivery as the market evolves
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          November 3, 2023 • Klbtheme, store, themeforest
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Blimålväkt treskade i nibel den mobilmilsbruk deren jyn nöning osk
          heterotsik i rel ultran. Fålass tuneksöka och tenör servicebarn nyra
          om än muren för fönde sjily v vobba, en hög samt esam, plåheten.
          Polytrasem iren att ora och plal förmityhten, tuloj eftersom tibesam
          ologi renat, i tiss gömivis. Surpaksop preeblig för att psykolog egen
          sper.
        </p>
        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
          Read More
        </button>
      </div>

      {/* Sidebar */}
      <div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Blog Post List</h3>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-4">
              <img
                src="https://i.pravatar.cc/100"
                alt="Blog Post"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium leading-tight">
                  ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                  voluptatum vel iure temporibus laboriosam
                </p>
                <p className="text-gray-500 mt-1 text-sm">• November 3, 2023</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <img
                src="https://i.pravatar.cc/100"
                alt="Blog Post"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium leading-tight">
                  ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                  voluptatum vel iure temporibus laboriosam
                </p>
                <p className="text-gray-500 mt-1 text-sm">• November 3, 2023</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <img
                src="https://i.pravatar.cc/100"
                alt="Blog Post"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium leading-tight">
                  ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                  voluptatum vel iure temporibus laboriosam
                </p>
                <p className="text-gray-500 mt-1 text-sm">• November 3, 2023</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <img
                src="https://i.pravatar.cc/100"
                alt="Blog Post"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium leading-tight">
                  ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                  voluptatum vel iure temporibus laboriosam
                </p>
                <p className="text-gray-500 mt-1 text-sm">• November 3, 2023</p>
              </div>
            </li>
            
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
