import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

// Import images
import generalQueryImg from "../assets/generalquery.png";
import dealershipImg from "../assets/dealership.png";
import joinOurTeamImg from "../assets/joinourteam.png";
import trainingImg from "../assets/training.png";
import droneImg from "../assets/shourya1-removebg-preview.png";
import bgImg from "../assets/background1.jpg";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ✅ new state

  const onSubmit = async (data) => {
    const formData = {
      access_key: "52984a69-57de-40ea-b340-cdcd4fe46f2a", // Web3Forms Access Key
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      company: data.company,
      industry: data.industry,
      droneSolution: data.droneSolution,
      message: data.message,
      to: "info@sarusaerospace.in,sales.marketing@sarusaerospace.in,sales@sarusaerospace.in",
    };

    try {
      setLoading(true);
      await axios.post("https://api.web3forms.com/submit", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Your message has been sent successfully!");
      setShowPopup(true); // ✅ show popup
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen backdrop-blur-md">
      {/* ================= POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h2 className="text-xl font-bold mb-4 text-green-600">Success!</h2>
            <p className="text-gray-700 mb-6">
              Your message has been sent successfully. We’ll get back to you soon!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= HEADER SECTION ================= */}
      <div className="relative">
        <div
          className="w-full min-h-screen bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
            {/* Left side - Drone Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src={droneImg} alt="Drone" className="max-w-full h-auto" />
            </div>

            {/* Right side - Contact Details */}
            <div className="w-full md:w-1/2 text-white md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                CONTACT US
              </h2>
              <div className="space-y-6 text-black">
                <div className="flex md:justify-end items-start gap-4">
                  <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
                  <p className="max-w-md">
                    SARUS AEROSPACE PVT LTD 3rd FLOOR, SOUTH BLOCK, SILVER JUBILEE BHAVAN,
                    Jnana Sangama, VTU Main Rd, Visvesvaraya Technological University,
                    Machhe, Belagavi, Karnataka 590018, India
                  </p>
                </div>
                <div className="flex md:justify-end items-center gap-4">
                  <FaEnvelope className="text-red-500 text-xl" />
                  <p>sales.marketing@sarusaerospace.in</p>
                </div>
                <div className="flex md:justify-end items-center gap-4">
                  <FaPhone className="text-blue-600 text-xl" />
                  <p>+91-7204817111</p>
                </div>
                <div className="flex md:justify-end items-center gap-4">
                  <FaEnvelope className="text-red-500 text-xl" />
                  <p>sales@sarusaerospace.in</p>
                </div>
                <div className="flex md:justify-end items-center gap-4">
                  <FaPhone className="text-blue-600 text-xl" />
                  <p>+91-7204824111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ICONS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center py-8 px-4">
        <div>
          <img src={generalQueryImg} alt="General Query" className="mx-auto h-16 mb-2" />
          <p className="font-semibold">GENERAL QUERY</p>
        </div>
        <div>
          <img src={dealershipImg} alt="Dealership" className="mx-auto h-16 mb-2" />
          <p className="font-semibold">DEALERSHIP & DISTRIBUTORSHIP</p>
        </div>
        <div>
          <img src={joinOurTeamImg} alt="Career" className="mx-auto h-16 mb-2" />
          <p className="font-semibold">JOIN OUR TEAM (CAREER)</p>
        </div>
        <div>
          <img src={trainingImg} alt="Training" className="mx-auto h-16 mb-2" />
          <p className="font-semibold">TRAINING</p>
        </div>
      </div>

      {/* ================= FORM ================= */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div>
            <label className="block mb-1 font-medium">First Name *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <p className="text-red-500 text-sm">First name is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Last Name *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <p className="text-red-500 text-sm">Last name is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email ID *</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded p-2"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Valid email is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone No. *</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded p-2"
              {...register("phone", { required: true })}
            />
            {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">City *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              {...register("city", { required: true })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">State *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              {...register("state", { required: true })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Company Name *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              {...register("company", { required: true })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Industry *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              {...register("industry", { required: true })}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium">Type of Drone Solution Interested In *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              {...register("droneSolution", { required: true })}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium">Your Message/Query</label>
            <textarea
              className="w-full border border-gray-300 rounded p-2"
              rows="4"
              {...register("message")}
            ></textarea>
          </div>
          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white py-2 px-6 rounded transition`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
