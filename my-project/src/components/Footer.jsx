import React from 'react'
import { Mail } from 'lucide-react'
import Logo from '../assets/SARUS LOGO.png';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0e2b] text-white pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 px-6">
        {/* Product Categories */}
        <div>
          <h4 className="font-bold mb-3">Product Categories</h4>
          <ul className="space-y-1 text-sm">
            <li>TORNA</li>
            <li>SHOURYA</li>
            <li>ANANT</li>
            <li>AGRICULTURE DRONE</li>
          </ul>
        </div>

        {/* Fly Safe */}
        <div>
          <h4 className="font-bold mb-3">Fly Safe</h4>
          <ul className="space-y-1 text-sm">
            <li>Safety manual</li>
            <li>SARUS Flying Tips</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-bold mb-3">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li>Explore Blog</li>
            <li>Announcements</li>
            <li>Media Coverage</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="font-bold mb-3">Subscribe Now</h4>
          <p className="text-sm mb-3">
            Get the latest news from Sarus Aerospace Pvt Ltd
          </p>
          <div className="flex items-center border border-white rounded-full px-2 py-1 w-55">
            <input
              type="email"
              placeholder="sarusaerospace@gmail.com"
              className="bg-transparent outline-none text-sm w-full placeholder-gray-300"
            />
            <span className="ml-2">📩</span>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="font-bold mb-3">Service Plans</h4>
          <ul className="space-y-1 text-sm">
            <li>Drone Care</li>
            <li>Sarus Maintenance Program</li>
            <li>Sarus Training Program</li>
          </ul>
        </div>
      </div>

      {/* Middle Section with Logo */}
      <div className="flex flex-col items-center mt-10">
        {/* Replace this div with your logo image */}
        <div className="w-20 h-20 bg-white/15 mb-2 flex justify-center items-center rounded-full">
          <img src={Logo} alt="" />
        </div>
        <h2 className="font-bold text-lg tracking-wide">
          SARUS AEROSPACE PVT LTD
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="mt-8">
        {/* Top Row Above White Line */}
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 text-sm pb-2">
          {/* Left Links */}
          <div className="flex gap-6 font-semibold">
            <a href="#">Who We Are</a>
            <a href="/contact">Contact Us</a>
          </div>

          {/* Right Links */}
          <div className="flex gap-6 font-semibold">
            <a href="#">Careers</a>
            <a href="#">Case Studies</a>
          </div>
        </div>

        {/* White Line */}
        <hr className="border-t border-gray-500" />

        {/* Bottom Row Below White Line */}
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 py-4 text-sm">
          {/* Left Side Privacy Text */}
          <div className="text-left">
            <p>Sarus Aerospace Pvt Ltd Privacy Policy</p>
            <p>Business Information</p>
          </div>

          {/* Center Copyright */}
          <div className="text-center">
            <p>Copyright © 2025 Sarus Aerospace All Rights Reserved.</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end space-x-4 text-lg">
            <a href="https://www.facebook.com/sarus.aerospac">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/sarus_aerospace/" target='_blank'>
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/sarus-aerospace/posts/?feedView=all" target='_blank'>
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@sarusaerospace2742" target='_blank'>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer