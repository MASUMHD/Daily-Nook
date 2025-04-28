import { FaAppStoreIos, FaEnvelope, FaFacebookF, FaGooglePlay, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-[#111827]">
        
        {/* Do You Need Help */}
        <div>
          <h2 className="font-bold text-lg mb-4">Do You Need Help ?</h2>
          <p className="text-sm mb-4 text-[#6B7280]">
            Autoseligen syr. Nek diarsak fribomba. När antipol kynoda nynat. Pressa fåmoska.
          </p>
          <div className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt className="text-[#6B7280]" />
            <span>Monday-Friday: 08am-9pm</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-4">
            01840-154417
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-gray-500" />
            <span>Need help with your order?</span>
          </div>
          <div className="font-bold text-gray-900 text-sm">
            a97970400@gmail.com
          </div>
        </div>

        {/* Make Money with Us */}
        <div>
          <h2 className="font-bold text-lg mb-4">Make Money with Us</h2>
          <ul className="space-y-2 text-sm">
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
          <ul className="space-y-2 text-sm">
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
          <ul className="space-y-2 text-sm">
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
            <div className="flex items-center gap-3">
              <FaGooglePlay className="text-3xl" />
              <div className="text-sm">
                <div>Download App Get</div>
                <div className="font-bold">-10% Discount</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaAppStoreIos className="text-3xl" />
              <div className="text-sm">
                <div>Download App Get</div>
                <div className="font-bold">-20% Discount</div>
              </div>
            </div>
          </div>

          <div className="text-sm mb-2">Follow us on social media:</div>
          <div className="flex items-center gap-4 text-gray-600 text-xl">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaXTwitter className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
