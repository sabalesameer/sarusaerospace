// src/components/ProductsPage.jsx
import React from "react";
import Torna from "../assets/Torna1.png";
import Shourya from "../assets/shourya1-removebg-preview.png";
import Kisan from "../assets/KISAN.png";
import Anant from "../assets/Anant.png";
import AnantBG from "../assets/Product1.png"
import Anantbg from "../assets/DISPLAY_1__2_-removebg-preview.png"
import KisanBg from "../assets/KISANagri.png"
import TornaBG  from "../assets/productTorna.png";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-100 flex flex-col items-center justify-center">
      {/* Top Product Navigation */}
      <section className="w-full bg-gray-200 py-4 mt-20">
        <div className="max-w-7xl mx-auto flex justify-around items-center px-4">
          {[
            { name: "TORNA", img: Torna },
            { name: "SHOURYA", img: Shourya },
            { name: "AGRICULTURE", img: Kisan },
            { name: "ANANT", img: Anant },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto h-20 object-contain"
              />
              <p className="mt-2 text-sm font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Large Banner ANANT */}
<section
  className="relative w-[95%] mx-auto h-auto min-h-[400px] flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 mt-10 py-6 rounded-xl"
  style={{
    backgroundImage: `url(${AnantBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Foreground Drone Image */}
  <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
    <img
      src={Anantbg}
      alt="Anant Drone"
      className="h-48 md:h-72 object-contain"
    />
  </div>

  {/* Text Content */}
  <div className="w-full md:w-1/2 text-center md:text-right text-[#0a0a23] px-2 md:px-6">
    <h2 className="text-3xl md:text-4xl font-bold">ANANT</h2>
    <p className="mt-2 text-base md:text-lg">MADE FOR SURVEILLANCE & MAPPING</p>
    <button
      onClick={() => navigate('/Anant')}
      className="mt-4 px-6 py-2 border border-[#0a0a23] rounded-full hover:bg-[#0a0a23] hover:text-white transition duration-300"
    >
      LEARN MORE &gt;
    </button>
  </div>
</section>


      {/* Two Columns AGRICULTURE / TORNA */}
      <section className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 mt-10 mb-10 ">
        {/* Agriculture */}
        <div className="relative">
          <img
            src={KisanBg}
            alt="Agriculture Drone"
            className="w-full h-[80vh] object-cover"
          />

          {/* Top text */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center text-black">
            <h2 className="text-3xl font-bold">AGRICULTURE</h2>
            <p className="mt-1">FARMERS TRUE FRIEND</p>
          </div>

          {/* Button below drone */}
          <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2">
            <button
              onClick={()=>navigate('/Kisan')} 
              className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              LEARN MORE &gt;
            </button>
          </div>
        </div>

        {/* Torna */}
        <div className="relative">
          <img
            src={TornaBG}
            alt="Torna Drone"
            className="w-full h-[80vh] object-cover"
          />

          {/* Top text */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 text-center text-black">
            <h2 className="text-3xl font-bold">TORNA</h2>
            <p className="mt-1">MULTIPLE PAYLOAD COMPATIBLE</p>
          </div>

          {/* Button below drone */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2">
            <button
              onClick={()=>navigate('/Torna')} 
              className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              LEARN MORE &gt;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}