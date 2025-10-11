import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Video1 from "../assets/Video1.mp4";
import Video2 from "../assets/Video2.mp4";
import Video3 from "../assets/Video3.mp4";

function VideoSlider() {
  const videos = [Video1, Video2, Video3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="h-screen w-full flex justify-center items-center relative bg-gray-300 overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-10 top-1/2 transform -translate-y-1/2 z-10 transition duration-300 hover:scale-110 active:scale-95 cursor-pointer
          ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "text-white"}`}
        aria-label="Previous"
      >
        <FaChevronLeft size={42} />
      </button>

      {/* Video Container */}
      <div className="relative w-[70vw] h-screen p-5">
        <div
          className="flex gap-5 transition-transform duration-700 ease-in-out"
          style={{
            width: `${videos.length * 70}vw`,
            transform: `translateX(-${currentIndex * 70}vw)`
          }}
        >
          {videos.map((videoSrc, idx) => (
            <div key={idx} className="w-[70vw] h-full flex-shrink-0">
              <video
                src={videoSrc}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={currentIndex === videos.length - 1}
        className={`absolute right-10 top-1/2 transform -translate-y-1/2 z-10 transition duration-300 hover:scale-110 active:scale-95 text-white cursor-pointer 
          ${currentIndex === videos.length - 1 ? "opacity-30 cursor-not-allowed" : ""}`}
        aria-label="Next"
      >
        <FaChevronRight size={42} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {videos.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? 'bg-gray-400' : 'bg-black'
            } cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
}

export default VideoSlider;
