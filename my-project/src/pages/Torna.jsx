import React from 'react'
import TornaBG from '../assets/TornaB.png'
import { FaWeightHanging } from 'react-icons/fa';
import { GiDeliveryDrone, GiWindSlap } from 'react-icons/gi';
import { MdCameraAlt } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';
import { BsClockHistory } from 'react-icons/bs';
import Torna1 from '../assets/Torna1.png'
import Torna2 from '../assets/close camera.png'
import Torna3 from '../assets/swapabblebattery.png'
import Torna4 from '../assets/ppk.png'
import Torna5 from '../assets/torna5.png'

import miningImg from "../assets/mining.webp";
import renewableImg from "../assets/renewable.jpg";
import agricultureImg from "../assets/agriculture.webp";
import surveyImg from "../assets/survey.png";
import constructionImg from "../assets/construction.webp";
import defenceImg from "../assets/defence.avif";

import Lr1 from '../assets/LR1camera.png';
import A8Mini from '../assets/DISPLAY 1 (7).png';
import Zt6 from '../assets/ZT6.png';
import Multispectral from '../assets/whitecamera.png';

function Torna() {
  return (
    <div className="h-auto w-full">
      {/* Header Section */}
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[12vw] sm:text-[8vw] md:text-[6vw] leading-none font-extrabold uppercase tracking-widest text-gray-900">
            torna
          </h1>
          <h3 className="text-base sm:text-xl md:text-2xl font-medium text-gray-700 mt-4">
            By SARUS AEROSPACE PVT LTD
          </h3>
        </div>

        <div className="mt-10 w-full flex justify-center">
          <img
            src={TornaBG}
            alt="Torna Drone"
            className="w-[90%] md:w-[70%] max-h-[350px] object-contain drop-shadow-[-10px_80px_30px_#000000]"
          />
        </div>
      </div>

      {/* Description */}
      <section className="bg-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-sm sm:text-base md:text-lg text-gray-800 text-justify leading-relaxed">
            <span className="font-bold text-blue-900">TORNA</span> is a next generation, indigenous drone designed for{" "}
            <span className="font-semibold">surveillance, mapping, and inspection</span>{" "}
            <span className="font-bold text-blue-900">Ready for Type Certification!</span> 
            Engineered for versatility and built to perform in demanding environments, it combines advanced capabilities with a compact, foldable design offering an efficient, reliable, and affordable aerial solution for modern operations.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-7xl mx-auto text-center">
          {[
            { icon: <FaWeightHanging className="text-3xl sm:text-4xl mb-2" />, value: "3.5KG", label: "MAX TAKE-OFF WEIGHT" },
            { icon: <BsClockHistory className="text-3xl sm:text-4xl mb-2" />, value: "78min", label: "MAX FLIGHT TIME" },
            { icon: <GiDeliveryDrone className="text-3xl sm:text-4xl mb-2" />, value: "TOOL LESS", label: "FOLDING DESIGN" },
            { icon: <LuMapPin className="text-3xl sm:text-4xl mb-2" />, value: "2 SQ KM", label: "IN ONE FLIGHT" },
            { icon: <MdCameraAlt className="text-3xl sm:text-4xl mb-2" />, value: "MULTIPLE", label: "PAYLOAD COMPATIBILITY" },
            { icon: <GiWindSlap className="text-3xl sm:text-4xl mb-2" />, value: "10m/s", label: "MAX WIND SPEED RESISTANCE" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {item.icon}
              <p className="text-lg font-bold">{item.value}</p>
              <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section 1 */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10">
        <img src={Torna1} alt="" className="w-full md:w-1/2 h-auto object-contain" />
        <h1 className="text-black text-lg sm:text-xl md:text-2xl font-semibold text-center md:text-left">
          MULTIPLE ANTENA POSITIONS FOR LONG RANGE COMMUNICATION
        </h1>
      </section>

      {/* Features Section 2 */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <h3 className="text-xl font-semibold uppercase mb-4">Swappable Battery</h3>
          <img src={Torna3} alt="" className="w-full h-auto object-contain" />
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <img src={Torna2} alt="" className="w-full h-auto object-contain mb-4" />
          <h3 className="text-xl font-semibold uppercase">Multi Payload Support</h3>
        </div>
      </section>

      {/* Features Section 3 */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <h3 className="text-xl font-semibold uppercase mb-4">Easy Foldable Mechanism</h3>
          <img src={Torna5} alt="" className="w-full h-auto object-contain" />
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <img src={Torna4} alt="" className="w-full h-auto object-contain mb-4" />
          <h3 className="text-xl font-semibold uppercase">PPK & RTK Enabled</h3>
        </div>
      </section>

      {/* Payload Section */}
      <section className="w-full px-4 py-12 bg-white text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 uppercase mb-5 tracking-wide">
          Payload
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center mt-56">
            <img src={Lr1} alt="LR1 Camera" className="w-40 sm:w-48 h-auto mb-4" />
            <p className="text-sm sm:text-base text-gray-800 font-light">
              LR1 is a 61MP full-frame industrial camera...
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={A8Mini} alt="A8 Mini" className="w-40 sm:w-48 h-auto mb-4" />
            <p className="text-sm sm:text-base text-gray-800 font-light">
              A8 Mini is a lightweight 4K Ultra HD gimbal...
            </p>
          </div>
          <div className="flex flex-col items-center mt-56">
            <img src={Zt6} alt="ZT6 Mini" className="w-40 sm:w-48 h-auto mb-4" />
            <p className="text-sm sm:text-base text-gray-800 font-light">
              ZT6 Mini is a dual-sensor gimbal payload...
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-sm mx-auto mt-8">
          <img src={Multispectral} alt="Multispectral" className="w-40 sm:w-48 h-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-800 font-light">
            Ultra-high-resolution multispectral data...
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          { title: "MINING", image: miningImg },
          { title: "RENEWABLE ENERGY", image: renewableImg },
          { title: "AGRICULTURE", image: agricultureImg },
          { title: "INSPECTION & SURVEY", image: surveyImg },
          { title: "CONSTRUCTION", image: constructionImg },
          { title: "DEFENCE", image: defenceImg },
        ].map(({ title, image }, index) => (
          <div key={index}>
            <img src={image} alt={title} className="w-full h-48 object-cover shadow-md" />
            <h4 className="mt-2 font-semibold text-sm md:text-base">{title}</h4>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Torna
