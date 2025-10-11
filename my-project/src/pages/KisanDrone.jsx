import React from 'react';
// import DroneImage from '../assets/KISAN.png';
import {
  FaWeightHanging,
  FaStopwatch,
  FaTools,
  FaMapMarkedAlt,
  FaMountain,
  FaFlask,
} from 'react-icons/fa';

import miningImg from "../assets/mining.webp";
import renewableImg from "../assets/renewable.jpg";
import agricultureImg from "../assets/agriculture.webp";
import surveyImg from "../assets/survey.png";
import constructionImg from "../assets/construction.webp";
import defenceImg from "../assets/defence.avif";

import Bg from '../assets/Kisan.jpg'

function KisanDrone() {
  return (
    <div className="">
    <section className="w-full bg-white text-center  py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-black uppercase">Kisan Drone</h1>
      <h2 className="text-lg md:text-xl text-gray-600 font-medium mt-1">By SARUS AEROSPACE PVT LTD</h2>

      {/* Image */}
      <div 
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:"100vh"
        }}
      className="my-6">
        {/* <img src={DroneImage} alt="Kisan Drone" className="mx-auto w-full max-w-[500px]" /> */}
        {/* <span className="inline-block mb-5 px-4 py-1 text-white text-sm bg-blue-900 rounded-full font-semibold tracking-wide">
          DGCA CERTIFIED
        </span> */}
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-4xl mx-auto text-sm md:text-base leading-relaxed px-2">
        10L agriculture drone sprays up to 8 acres/hour with 4 nozzles, autonomous/manual modes, and a 2–3.5m spray width perfect for fast, efficient farm coverage.
        Lightweight, foldable, and equipped with a brushless pump, flow meter, smart controller, and high-capacity battery for precision spraying and ease of use.
      </p>

      {/* Specs */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto text-gray-800">
        <div className="flex flex-col items-center">
          <FaWeightHanging size={36} className="text-black mb-2" />
          <h3 className="font-bold text-lg">28.2 KG</h3>
          <p className="text-xs text-gray-600 mt-1">MAX TAKE-OFF WEIGHT</p>
        </div>
        <div className="flex flex-col items-center">
          <FaStopwatch size={36} className="text-black mb-2" />
          <h3 className="font-bold text-lg">15 min</h3>
          <p className="text-xs text-gray-600 mt-1">MAX FLIGHT TIME</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTools size={36} className="text-black mb-2" />
          <h3 className="font-bold text-lg">TOOL LESS</h3>
          <p className="text-xs text-gray-600 mt-1">FOLDING DESIGN / FIXED ARMS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkedAlt size={36} className="text-black mb-2" />
          <h3 className="font-bold text-lg">8 Acre/Hour</h3>
          <p className="text-xs text-gray-600 mt-1">FIELD COVERAGE</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMountain size={36} className="text-black mb-2" />
          <h3 className="font-bold text-lg">98.43 ft</h3>
          <p className="text-xs text-gray-600 mt-1">OPERATING ALTITUDE</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFlask size={36} className="text-black mb-2" />
          <h3 className="font-bold text-lg">10 LITER</h3>
          <p className="text-xs text-gray-600 mt-1">TANK CAPACITY</p>
        </div>
      </div>
    </section>

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
            <img
              src={image}
              alt={title}
              className="w-full h-[180px] object-cover shadow-md"
            />
            <h4 className="mt-2 font-semibold text-sm md:text-base">{title}</h4>
          </div>
        ))}
    </section>

  </div>
    
  );
}

export default KisanDrone;
