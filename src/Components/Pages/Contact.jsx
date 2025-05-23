import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import ButtomSlider from '../Home/ButtomSlider';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">You can ask us questions</h1>
        <p className="text-gray-600">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>
        <hr />
      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10 border-t pt-10">
        {/* Left Side - Office Info */}
        <div>
          <h2 className="text-xl font-bold text-black mb-4">Our Offices</h2>
          <p className="text-gray-600 mb-6">
            On dekande mydturtad mora även om skurkstat. Semirade timaheten rena.
            Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet
            till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.
          </p>

          <div className="flex items-start gap-2 mb-2 text-gray-600">
            <MdLocationOn size={30} className="text-2xl text-black mt-1" />
            <div>
              <p className="text-sm text-gray-500">Khulna</p>
              <p className="font-semibold">Khulna Khalishpur Office</p>
              <p>103 BIDC Road, Khulna</p>
            </div>
          </div>

          <p className="mt-4 text-black font-semibold">+01840154417</p>
          <p className="text-blue-600 underline cursor-pointer">dailynook@gmail.com</p>

          {/* Social Media Icons */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-600 mb-4">Follow us:</p>
            <div className="flex gap-4">
              <FaFacebookF  size={25} className="text-xl hover:text-green-500 text-blue-600 cursor-pointer" />
              <FaTwitter  size={25} className="text-xl hover:text-green-500 text-blue-400 cursor-pointer" />
              <FaInstagram  size={25} className="text-xl hover:text-green-500 text-pink-500 cursor-pointer" />
              <FaLinkedinIn  size={25} className="text-xl hover:text-green-500 text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name *"
              className="w-full border px-4 py-2 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Your email *"
              className="w-full border px-4 py-2 rounded-md outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject *"
            className="w-full border px-4 py-2 rounded-md outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your message"
            className="w-full border px-4 py-2 rounded-md outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10">
        <ButtomSlider />
      </div>
    </div>
  );
};

export default Contact;
