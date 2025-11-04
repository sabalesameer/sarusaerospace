import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Product1 from "../assets/Torna1.png";
import Product3 from "../assets/shourya1-removebg-preview.png";
import Product2 from "../assets/KISAN.png";
import { useNavigate } from 'react-router-dom';
import Anmouncement from "../assets/announcement.mp4";



const drones = [
  {
    id: 1,
    name: "SHOURYA",
    subtitle: "Multiple Payload Compatible",
    description:
      "Advanced solution for professional mapping, surveillance & inspection needs",
    image: Product3,
    features: [
      "Long flight time",
      "High-resolution imaging",
      "Weather resistant",
    ],
    nav:'/',
  },
  {
    id: 2,
    name: "TORNA",
    subtitle: "Versatile Payload System",
    description:
      "Premium solution for commercial and industrial applications",
    image: Product1,
    features: [
      "Modular design",
      "Precision navigation",
      "Real-time data transmission",
    ],
    nav:'/Torna',
  },
  {
    id: 3,
    name: "AGRICULTURE",
    subtitle: "Specialized for Farming",
    description:
      "Optimized for crop monitoring and precision agriculture",
    image: Product2,
    features: [
      "Multispectral sensors",
      "Automated flight patterns",
      "Crop health analysis",
    ],
    nav:'/Kisan',
  },
];

export default function DroneSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []); // run once

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % drones.length);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + drones.length) % drones.length);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  const currentDrone = drones[currentIndex];
  const navigate = useNavigate();
return (
  <section className="h-screen w-full bg-gradient-to-b from-[#d4e1f4] to-[#a0a5ab] flex flex-col items-center justify-center relative overflow-hidden">
    {/* Navigation Arrows */}
    <button
      onClick={handlePrev}
      className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 text-4xl md:text-6xl text-gray-600 hover:text-gray-900 transition"
      aria-label="Previous drone"
    >
      <FaChevronLeft />
    </button>

    <button
      onClick={handleNext}
      className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 text-4xl md:text-6xl text-gray-600 hover:text-gray-900 transition"
      aria-label="Next drone"
    >
      <FaChevronRight />
    </button>

    {/* Drone Info */}
    <div className="text-center px-4 md:px-0 transition-all duration-500 ease-in-out absolute top-20 z-10 max-w-xl">
      <h2 className="text-xs md:text-sm tracking-wider text-gray-600 font-semibold mb-2">
        {currentDrone.subtitle.toUpperCase()}
      </h2>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1d2452] mb-2">
        {currentDrone.name}
      </h1>
      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-6 px-2 md:px-0">
        {currentDrone.description.toUpperCase()}
      </h3>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => navigate(currentDrone.nav || '/')}
          className="px-5 py-2 border border-black rounded-full text-black text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition"
        >
          LEARN MORE
        </button>
      </div>
    </div>

    {/* Drone Image */}
    <div className="flex justify-center items-center mt-40 md:mt-52 px-4">
      <img
        src={currentDrone.image}
        alt={currentDrone.name}
        className="h-[50vh] md:h-[75vh] w-auto object-contain hover:scale-105 hover:drop-shadow-[-30px_30px_15px_#000000] transition-all duration-300"
      />
    </div>

    {/* Bottom Left Menu */}
    <div className="absolute bottom-6 left-4 sm:left-8 flex flex-col gap-1 text-xs sm:text-sm">
      {drones.map((drone, index) => (
        <span
          key={drone.id}
          onClick={() => goToSlide(index)}
          className={`cursor-pointer ${
            index === currentIndex
              ? "font-bold text-black"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {drone.name}
        </span>
      ))}
    </div>

    {/* announcement section */}
      {/* Announcement Section (Bottom Left Transparent Box) */}
<div className=" bottom-6 right-6  backdrop-blur-md border border-white/40 shadow-lg rounded-xl p-2 md:p-6 flex items-center hover:scale-105 transition-transform duration-300 fixed animate-bounce" style={{
    background: "linear-gradient(135deg, #FF9933, #FFFFFF, #138808)",
  }}>
  <div className="w-68 h-96 overflow-hidden ">
      <video
        src={Anmouncement}
        autoPlay
        loop
        muted
        className="w-full h-full "
      ></video>
  </div>
</div>

  </section>


);

}
