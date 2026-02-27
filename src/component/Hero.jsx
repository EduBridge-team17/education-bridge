import React from "react";
import Heroimage from "../assets/hero-img.svg";
import { motion } from "framer-motion";
import Heroarrow from "../assets/hero-arrow.svg";
import Herodiamond from "../assets/hero-diamond.svg";
import Herodot from "../assets/hero-dot.svg";
import Herostrip from "../assets/hero-strip.svg";
import Herocheck from "../assets/hero-check.svg";
import Heromobile from "../assets/hero-mobile.svg";
import Herooffline from "../assets/hero-offline.svg";

const Hero = () => {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p className="text-teal-600 font-medium text-sm mb-4">
              <img
                src={Herodot}
                alt="Dot"
                className="w-3 h-3 mr-2 inline-block"
              />
              <span>Optimised for Online/Offline Learning</span>
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Bridging Rural <br />
              <span className="text-teal-700">Education Gaps</span>
            </h1>

            <div>
              <img src={Herostrip} alt="Strip" />
            </div>

            <p className="text-gray-600 mb-8 max-w-lg">
              Access world-class notes and quizzes for SS1-SS3. No internet? No
              problem. Learn via SMS and offline-first technology designed for
              Nigerian students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0F756D] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
                Get Started
                <img
                  src={Heroarrow}
                  alt="Arrow"
                  className="w-10 h-5 inline-block"
                />
              </button>

              <button className=" bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition">
                Partner With Us
                <img
                  src={Herodiamond}
                  alt="Diamond"
                  className="w-10 h-5 inline-block"
                />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 py-20">
              <p className="text-gray-600 font-medium text-sm mb-4 ">
                <img
                  src={Herocheck}
                  alt=" Check"
                  className="w-25 h-25 mr-2 inline-block"
                />
                <span>SS1 - SS3 Syllabus</span>
              </p>

              <p className="text-gray-600 font-medium text-sm mb-4">
                <img
                  src={Herooffline}
                  alt=" Offline"
                  className="w-25 h-26 mr-2 inline-block"
                />
                <span>Works Offline</span>
              </p>

              <p className="text-gray-600 font-medium text-sm mb-4 ">
                <img
                  src={Heromobile}
                  alt="Mobile"
                  className="w-25 h-25 mr-2 inline-block"
                />
                <span>Mobile Friendly</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/30">
              <img
                src={Heroimage}
                alt="Student learning"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
