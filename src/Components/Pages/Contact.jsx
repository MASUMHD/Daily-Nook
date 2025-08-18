/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import ButtomSlider from "../Home/ButtomSlider";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Thank you!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonColor: "#16a34a",
      confirmButtonText: "OK",
    });
    console.log(data);
    reset();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-12 -mt-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          className="text-center mb-12 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We’re here to answer your questions and provide support. Reach out
            to us anytime!
          </p>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-green-500 rounded-full"></div>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Office Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105">
              <FaMapMarkerAlt className="text-green-600 text-3xl mb-2" />
              <h3 className="font-bold text-lg mb-1">Our Office</h3>
              <p className="text-gray-600">103 BIDC Road, Khalishpur, Khulna</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center gap-4 hover:scale-105">
              <FaPhoneAlt className="text-green-600 text-2xl" />
              <p className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                +0 1840 154417
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center gap-4 hover:scale-105">
              <FaEnvelope className="text-green-600 text-2xl" />
              <p className="text-blue-600 underline cursor-pointer font-semibold">
                dailynook@gmail.com
              </p>
            </div>

            {/* Social */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg font-medium text-gray-700 mb-3">
                Follow Us
              </p>
              <div className="flex gap-5">
                <FaFacebookF className="text-blue-600 text-2xl cursor-pointer hover:scale-125 transition" />
                <FaTwitter className="text-sky-500 text-2xl cursor-pointer hover:scale-125 transition" />
                <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:scale-125 transition" />
                <FaLinkedinIn className="text-blue-700 text-2xl cursor-pointer hover:scale-125 transition" />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-6 hover:shadow-2xl transition bg-gradient-to-b from-[#f0fdf4] to-[#f9fafb] hover:scale-105"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-3 rounded-md shadow-sm peer"
                {...register("name", { required: true })}
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-3 rounded-md shadow-sm peer"
                {...register("email", { required: true })}
              />
            </div>
            <input
              type="text"
              placeholder="Subject *"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-3 rounded-md shadow-sm"
              {...register("subject", { required: true })}
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 px-4 py-3 rounded-md shadow-sm"
              {...register("message", { required: true })}
            />
            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-md font-semibold hover:from-green-600 hover:to-green-700 transition shadow-lg hover:scale-105">
              Send Message
            </button>
          </motion.form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-16 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.123456!2d90.123456!3d22.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzAwLjAiTiA5MMKwMDInMzAuMCJF!5e0!3m2!1sen!2sbd!4v1692456789012!5m2!1sen!2sbd"
            width="100%"
            height="300"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Bottom Slider */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ButtomSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
