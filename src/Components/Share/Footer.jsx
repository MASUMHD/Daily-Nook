import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail, MdOutlineMail } from "react-icons/md";

import Swal from "sweetalert2";

const Footer = () => {
  const onClick = () => {
    Swal.fire({
      title: "You have successfully subscribed!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div>
      <div className="flex justify-end w-full mb-5 md:mb-10 -ml-0 md:-ml-20 p-4">
        <div className="flex items-center border rounded-md overflow-hidden shadow-sm max-w-md w-full">
          <div className="flex items-center px-4 text-gray-400">
            <MdEmail size={20} />
          </div>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow py-3 px-2 focus:outline-none text-gray-700"
          />
          <button
            onClick={onClick}
            className="bg-green-500 text-white font-semibold px-6 py-3 hover:bg-green-600 transition-colors"
          >
            SEND
          </button>
        </div>
      </div>

      <footer className="bg-white py-10 border-t">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-[#111827]">
          {/* Do You Need Help */}
          <div>
            <h2 className="font-bold text-lg mb-4">Do You Need Help ?</h2>
            <p className="text-sm mb-4 text-[#6B7280]">
              Autoseligen syr. Nek diarsak fribomba. När antipol kynoda nynat.
              Pressa fåmoska.
            </p>

            <div className="flex items-center  gap-5 text-sm mt-8">
              <LuPhoneCall size={30} className="text-[#111827]" />
              <div>
                <span className="text-[#6B7280]">Monday-Friday: 08am-9pm</span>
                <div className="text-2xl font-bold text-gray-900 ">
                  01840-154417
                </div>
              </div>
            </div>

            <div className="flex items-center  gap-5 text-sm mt-6">
              <MdOutlineMail size={30} className="text-[#111827]" />
              <div>
                <span className="text-[#6B7280]">
                  Need help with your order?
                </span>
                <div className="text-base font-bold text-gray-900 ">
                  dailynook@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Make Money with Us */}
          <div>
            <h2 className="font-bold text-lg mb-4">Make Money with Us</h2>
            <ul className="space-y-2 text-sm text-[#4B5563]">
              <li>Sell on Grogin</li>
              <li>Sell Your Services on Grogin</li>
              <li>Sell on Grogin Business</li>
              <li>Sell Your Apps on Grogin</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Sell-Publish with Us</li>
              <li>Become an Blowwe Vendor</li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h2 className="font-bold text-lg mb-4">Let Us Help You</h2>
            <ul className="space-y-2 text-sm text-[#4B5563]">
              <li>Accessibility Statement</li>
              <li>Your Orders</li>
              <li>Returns & Replacements</li>
              <li>Shipping Rates & Policies</li>
              <li>Refund and Returns Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Cookie Settings</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Get to Know Us */}
          <div>
            <h2 className="font-bold text-lg mb-4">Get to Know Us</h2>
            <ul className="space-y-2 text-sm text-[#4B5563]">
              <li>Careers for Grogin</li>
              <li>About Grogin</li>
              <li>Investor Relations</li>
              <li>Grogin Devices</li>
              <li>Customer reviews</li>
              <li>Social Responsibility</li>
              <li>Store Locations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">Download our app</h2>
            <div className="space-y-3 mb-6">
              <div className="items-center gap-3">
                <div className="w-2/3">
                  <img
                    src="https://i.postimg.cc/Kj8wsrMn/1506.png"
                    className="w-full h-full object-cover "
                    alt=""
                  />
                </div>
                <div className="text-sm mt-1">
                  <div className="text-[#4B5563]">Download App Get</div>
                  <div className="font-bold">-10% Discount</div>
                </div>
              </div>
              <div className="items-center  gap-3">
                <div className="w-2/3">
                  <img
                    src="https://i.postimg.cc/6QhHJ4wz/1507.png"
                    className="w-full h-full object-cover "
                    alt=""
                  />
                </div>
                <div className="text-sm mt-1">
                  <div className="text-[#4B5563]">Download App Get</div>
                  <div className="font-bold">-20% Discount</div>
                </div>
              </div>
            </div>

            <div className="text-lg mb-2 text-[#4B5563]">
              Follow us on social media:
            </div>
            <div className="flex items-center  gap-6 text-gray-600 text-xl">
              <FaFacebookF
                size={25}
                className="text-blue-600 cursor-pointer hover:text-[#634C9F] "
              />
              <FaXTwitter
                size={25}
                className="text-black cursor-pointer hover:text-[#634C9F]"
              />
              <FaInstagram
                size={25}
                className="text-pink-500 cursor-pointer hover:text-[#634C9F]"
              />
              <FaLinkedinIn
                size={25}
                className="text-blue-700 cursor-pointer hover:text-[#634C9F]"
              />
            </div>
          </div>
        </div>
      </footer>

      <div>
        <p className="text-center text-base py-0 md:py-2 text-[#4B5563] p-5 md:p-0">
          Copyright {new Date().getFullYear()} &copy; Jinstore WooCommerce
          WordPress Theme. All right reserved. Powered by{" "}
          <span className="text-[#5735ad] font-semibold">
            BlackRise Themes.
          </span>
        </p>
         {/* Payment Icons */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6 mb-6 p-2 md:p-0">
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png"
          alt="Visa"
          className="w-14 h-auto object-contain"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FE3SJM8any5aXGXHTkMAwJil2ZWDCiUvLg&s"
          alt="Mastercard"
          className="w-12 h-auto object-contain"
        />
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Paypal-Logo-2022.png"
          alt="PayPal"
          className="w-20 h-auto object-contain"
        />
        <img
          src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Skrill-512.png"
          alt="Skrill"
          className="w-14 h-auto object-contain"
        />
        <img
          src="https://logolook.net/wp-content/uploads/2022/06/Klarna-Emblem.png"
          alt="Klarna"
          className="w-16 h-auto object-contain"
        />
      </div>
      </div>
    </div>
  );
};

export default Footer;
