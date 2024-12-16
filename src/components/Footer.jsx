import React from "react";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import logo from "../assets/ascension_logo-removebg-preview.png";


const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto p-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Send us an email.</h2>
            <p className="text-gray-400 mt-2">
            Recommend ways we can improve; we're happy to hear from you.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <form className="flex items-center text-black">
              <input
                type="text"
                placeholder="Your Message"
                className="w-full md:w-auto p-2 rounded-l-md focus:ring focus:ring-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black hover:bg-black text-white px-4 py-2 rounded-r-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo */}
          <div>
            <img src={logo} alt="Ascension Oil and Gas" className="w-32" />
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#testimonial" className="hover:underline">Testimonial</a></li>
              <li><a href="#" className="hover:underline">Job Openings</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" title="Instagram"><img src={instagram} alt="Instagram" className="w-6 h-6" /></a></li>
              <li><a href="#" title="LinkedIn"><img src={linkedin} alt="LinkedIn" className="w-6 h-6" /></a></li>
              <li><a href="#" title="Twitter"><img src={twitter} alt="Twitter" className="w-6 h-6" /></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-gray-700 mt-6 pt-4">
          <small className="text-gray-500">
            © Ascension Oil and Gas {new Date().getFullYear()}, All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
