import React from 'react';
import Logo from '../assets/SARUS LOGO.png';
import Torna from '../assets/tornaFront.png';

const AboutUs = () => {
  return (
    <div className="bg-gray-300 font-[Montserrat] text-[#22253a]">
      {/* Hero Section with Logo and Heading */}
      <div className="bg-[radial-gradient(circle,_#a7a396_0%,_#2b3b4b_100%)] py-12 flex flex-col items-center">
        <img
          src={Logo}
          alt="Sarus Aerospace Logo"
          className="w-86 md:w-96 mb-2"
          loading="lazy"
        />
        <h1 className="text-white text-[48px] md:text-[74px] font-bold tracking-widest">
          SARUS AEROSPACE
        </h1>
      </div>

      {/* About Section */}
      <main className="pt-10">
        <section className="max-w-5xl mx-auto px-4 text-justify text-lg leading-relaxed">
          <h2 className="text-[#1c2341] text-xl md:text-2xl font-bold text-center">
            About us
          </h2>
          <p>
            Sarus Aerospace Pvt. Ltd., founded in 2022 in Belgaum, Karnataka, is redefining drone innovation through
            indigenous, real-world UAV solutions. With over 22 drone applications deployed across defense, agriculture,
            logistics, and inspection, we build drones that deliver results. From 250g to 90kg payloads, our systems are
            tested, trusted, and built for India’s toughest environments. We offer modular UAVs for OEMs and
            integrators, enabling faster certification, lower R&D, and scalable deployment. Whether plug and play or
            purpose-built, Sarus makes advanced drone tech more accessible to every industry.
          </p>

          <h2 className="text-[#1c2341] text-xl md:text-2xl font-bold mt-10 mb-3 text-center">
            Mission
          </h2>
          <p className="mb-6">
            Build 100% indigenous, high-performance UAVs that solve real-world challenges across sectors. We aim to
            empower industries with drones that are smart, safe, and ready for action.
          </p>

          <h2 className="text-[#1c2341] text-xl md:text-2xl font-bold mt-10 mb-3 text-center">
            Vision
          </h2>
          <p className="mb-6">
            Lead the global UAV market with drones that set new standards in reliability, endurance, and innovation. We
            envision drones as everyday tools — autonomous, intelligent, and seamlessly integrated into modern life.
          </p>
        </section>


        {/* <section className="text-center my-8">
          <img
            src={Torna}
            alt="Front view of SARUS UAV drone"
            className="w-[550px] max-w-[96vw] mx-auto drop-shadow-[3px_18px_36px_#b0b0c2]"
            loading="lazy"
          />
        </section> */}
      </main>
    </div>
  );
};

export default AboutUs;
