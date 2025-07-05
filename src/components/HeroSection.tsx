
import { ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">DEV</span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent animate-fade-in">
          Your Name
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in delay-200">
          MERN Stack Developer
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
          Passionate full-stack developer specializing in MongoDB, Express.js, React, and Node.js. 
          I create scalable web applications with modern technologies and clean, efficient code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-600">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 group">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </button>
          
          <a 
            href="#projects"
            className="px-8 py-4 border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            View My Work
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
