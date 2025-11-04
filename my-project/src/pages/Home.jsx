import React from 'react'
import {TfiMapAlt } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { LuNotebookPen } from "react-icons/lu";
import DroneSlider from '../components/DroneSlider'
import Torna from "../assets/Torna1.png";
import Shourya from "../assets/shourya1-removebg-preview.png";
import Kisan from "../assets/KISAN.png";
import Anant from "../assets/Anant.png"; 
import VideoSlider from '../components/VideoSlider';
import FARMINg from '../assets/FARMING.png'
import SURVEILLANCe from '../assets/SURVEILLANCE.png'
import PERFORMANCe from '../assets/PERFORMANCE.png'
import { useNavigate } from 'react-router-dom';



const drones = [
  {
    title: "SHOURYA",
    subtitle: "MULTIPLE PAYLOAD COMPATIBLE VTOL",
    img: Shourya,
    nav :'/',
  },
  {
    title: "TORNA",
    subtitle: "MULTIPLE PAYLOAD COMPATIBLE",
    img: Torna,
    nav :'/Torna',
  },
  {
    title: "KISAN DRONE",
    subtitle: "MODERN AGRICULTURE SOLUTION",
    img: Kisan,
    nav :'/Kisan',
  },
  {
    title: "ANANT",
    subtitle: "MADE FOR SURVEILLANCE & MAPPING",
    img: Anant,
    nav :'/Anant',
  },
];

const featureData = [
  {
    title: 'MODERN FARMING',
    image: FARMINg,
  },
  {
    title: 'SURVEILLANCE',
    image: SURVEILLANCe,
  },
  {
    title: 'LONG RANGE HIGH PERFORMANCE',
    image: PERFORMANCe,
  },
];


function Home() {
  const navigate = useNavigate();
  return (
    <div className='h-auto w-full'>
      <section className='relative h-screen w-full overflow-hidden'>
        <DroneSlider />
      </section>

      <section className="bg-[#0f1125] py-4 px-4 h-auto">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {drones.map((drone, index) => (
            <div
              key={index}
              className="bg-[radial-gradient(circle,_#a7a396_0%,_#2b3b4b_100%)] p-4 flex flex-col items-center text-center"
            >
              <button
                onClick={() => navigate(drone.nav || '/')}
                className="self-start border border-white/40 px-3 py-1 text-sm rounded-2xl mb-2 bg-gray-400 text-white hover:bg-white/10 cursor-pointer"
              >
                LEARN MORE
              </button>
              
              <p className="text-[1rem] text-slate-900 tracking-wide mb-1">{drone.subtitle}</p>
              <h2 className="text-4xl font-bold text-blue-950 mb-2">{drone.title}</h2>
              <img src={drone.img} alt={drone.title} className="object-contain max-h-[60vh] w-full" /> 
            </div>
          ))}
        </div>
      </section>

      <section className='h-auto w-full'>
        <VideoSlider />
      </section>

      <section className="min-h-screen w-full bg-gray-200 flex flex-col justify-between">
        {/* Header */}
        <div className="pt-16 text-center">
          <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 tracking-tight">
            Redefining Innovation in the Skies
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-3 tracking-wider uppercase">
            Sarus Aerospace
          </h2>
          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Driven by discovery, we transform new technology into real world breakthroughs,<br />
            shaping the future with every innovation.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 mb-16 px-4">
          {featureData.map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <span className="text-sm font-semibold mt-3 text-gray-700 tracking-wide">
                {f.title}
              </span>
              <img
                src={f.image}
                alt={f.title}
                className=" shadow-lg w-[80vw] md:w-[28vw] max-h-[75vh] object-cover border border-gray-200"
              />
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="w-full bg-gray-200 py-10 flex flex-wrap justify-center gap-12 md:gap-60">
          <div className="flex flex-col items-center text-center">
            <TfiMapAlt size={64} className="text-slate-900 mb-2" />
            <h3 className="uppercase text-sm font-medium text-gray-700">Office Location</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <BiSupport size={64} className="text-slate-900 mb-2" />
            <h3 className="uppercase text-sm font-medium text-gray-700">Support</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <LuNotebookPen size={64} className="text-slate-900 mb-2" />
            <h3 className="uppercase text-sm font-medium text-gray-700">Safety Instructions</h3>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
