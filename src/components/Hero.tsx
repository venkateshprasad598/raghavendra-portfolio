import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute w-96 h-96 bg-emerald-100 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-teal-100 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text  text-emerald-600"
        >
          Raghavendra
          
        </motion.h1>


        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-12"
        >
          <TypeAnimation
            sequence={[
              'Microbiologist',
              2000,
              'Researcher',
              2000,
              'Biotechnology Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-medium text-emerald-600"
          />
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Passionate about enzyme production and cancer research, 
            dedicated to advancing biotechnology solutions for real-world challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500}
            className="group relative overflow-hidden bg-white text-emerald-600 px-8 py-4 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105 border-2 border-emerald-600"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-emerald-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-emerald-600" />
      </motion.div>
    </div>
  );
};

export default Hero;