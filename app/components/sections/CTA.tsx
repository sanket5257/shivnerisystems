import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/carpet-uptic.mp4" type="video/mp4" />
      </video>

      {/* Overlay Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between h-full  mx-auto px-8 lg:px-16">
        {/* Left Side - Main Heading */}
        <div className="flex-1 max-w-2xl">
          {/* TL;DR Badge */}
          <div className="inline-block mb-8">
            <div className="px-5 py-2 border border-neutral-600 rounded-full">
              <span className="text-neutral-400 text-sm tracking-wide">TL;DR</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-light text-neutral-500 leading-tight">
            If you only read one thing,{' '}
            <span className="font-normal text-white">make it this.</span>
          </h1>
        </div>

        {/* Right Side - Description Card */}
        <div className="flex-1 max-w-xl ml-16">
          <div className="bg-black/30 backdrop-blur-md rounded-3xl p-10 border border-zinc-700/30">
            <p className="text-neutral-400 text-lg lg:text-3xl leading-relaxed mb-8">
              Your fractional product team, full-time engineering partner, and zero-BS cloud experts.{' '}
              <span className="text-white font-medium">
                We build it, ship it, and support it
              </span>
              —with speed, clarity, and technical ownership.
            </p>

            {/* CTA Button */}
            <button className="w-full btn-primary">
              Book a 30-minute consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}