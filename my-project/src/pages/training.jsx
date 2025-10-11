import React from 'react'
import backgroundImage from '../assets/treningbg.png'
import Logo from '../assets/SARUS LOGO.png'
import Trening1 from '../assets/training1.png'
import Trening2 from '../assets/training2.png'
import Trening3 from '../assets/training3.png'
import { CheckCircle } from "lucide-react";


function Trening() {
  return (
    <div className="bg-gray-300 font-[Montserrat] text-[#22253a]">

      <div className="relative h-[400px] md:h-screen w-full bg-cover bg-center flex items-center justify-center mt-20 overflow-hidden" style={{backgroundImage: `url(${backgroundImage})`,}}>
        <div className="absolute inset-0 scale-y-150 bg-gradient-to-r from-white/20 via-black/50 to-black/60"></div>

        <div className="relative z-10 text-white flex flex-col items-center justify-center text-center space-y-4 px-4">
          <img src={Logo} alt="Sarus Aerospace Logo" className="h-20 md:h-28 relative top-[-80px] animate-bounce" />
          
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide uppercase">
            Sarus Aerospace RPTO
          </h1>


          <p className="mt-2 text-base md:text-xl max-w-2xl">
            Become a certified drone pilot with hands-on training designed for modern aerial operations.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">Join Now</button>

          <p className="mt-2 text-sm md:text-base max-w-2xl">
            Start Your Flying Journey with Sarus Aerospace
          </p>

        </div>
      </div>

      <div className="font-[Montserrat] text-[#0f172a] bg-white">
        {/* COURSES FOR ASPIRANT */}
        <section className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto py-10 md:py-20">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold uppercase text-black ">
              Courses for Aspirant
            </h3>
            <img
              src={Trening1}
              alt="Agriculture Drone"
              className="rounded-lg w-[70%] md:w-[70%] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Agriculture Drone Pilot Training
            </h2>

            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#000]" size={20} />
                Introduction to Agri-Drones & Payload Systems
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#000]" size={20} />
                Mission Planning for Crop Health Mapping
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#000]" size={20} />
                Safe Flight Operations & Maintenance
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#000]" size={20} />
                Certification by Sarus Aerospace
              </li>
            </ul>

            <button className="mt-8 px-6 py-2 border border-black text-black rounded-full font-medium bg-gray-300">
              Join Now
            </button>
          </div>
        </section>
        <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3, 4,5].map((dot, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 2 ? "bg-[#000]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

        {/* WHY CHOOSE SARUS AEROSPACE */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between w-[90%] mx-auto py-10 md:py-20">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-10">

            <ul className="space-y-4 text-lg mt-6">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#000]" size={20} />
                DGCA-Compliant Curriculum & Training Modules
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#000]" size={20} />
                Certified Instructors & Real-Field Experience
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#000]" size={20} />
                Industry-Grade Drone Fleet (VTOL, Multirotor, Agri-Drones)
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#000]" size={20} />
                Post-Training Support for UAOP Application
              </li>
            </ul>

            <button className="mt-8 px-6 py-2 border border-black text-black rounded-full font-medium bg-gray-300">
              Join Now
            </button>
          </div>

          {/* Right Image (Circular Frame) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
            <h3 className="text-2xl font-semibold uppercase text-black ">
              Why Choose Sarus Aerospace
            </h3>
            <img
              src={Trening2}
              alt="Agriculture Drone"
              className="rounded-lg w-[60%] md:w-[70%] md:h-99 object-cover"
            />
          </div>


          
        </section>
        <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3, 4,5].map((dot, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 2 ? "bg-[#000]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
      </div>

      <div className="font-[Montserrat] text-[#0f172a] bg-white">
        {/* ACTION MODE ON FIELD */}
        <section className="w-[90%] mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Trening3}
              alt="Action Mode"
              className="rounded-lg w-[90%] md:w-[85%] shadow-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-5">
            <h2 className="text-xl md:text-2xl font-bold uppercase">
              Action Mode on Field
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Trainees of the Sarus Aerospace Drone Pilot Training Program engage
              in a live field session, learning essential pre-flight checks and
              operational procedures under expert supervision.
            </p>
            <button className="mt-8 px-6 py-2 border border-black text-black rounded-full font-medium bg-gray-300">
              Join Now
            </button>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="w-[90%] mx-auto py-16">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-10">
            Testimonials
          </h2>

          {/* Card Row */}


          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3, 4,5].map((dot, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 2 ? "bg-[#000]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default Trening
