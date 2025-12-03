"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const BookingModal = dynamic(() => import('../BookingModal'), { ssr: false });

export default function UpticHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="h-screen bg-[#131214] text-white relative overflow-hidden">
        <video src="/assets/Homepage X Hero Video (1).mp4" autoPlay loop muted></video>
        
        {/* Hero Content */}
        <div className="absolute top-20 right-0 left-0 bottom-0 z-10 max-w-6xl mx-auto px-8 pt-32 pb-40 text-center">
          <div className="mb-8">
            <span className="px-6 py-2 border border-neutral-700 rounded-full text-sm text-neutral-300 inline-block">
              Modern Full-Stack Development & Engineering
            </span>
          </div>
          
          <h1 className="text-7xl font-semibold mb-6 leading-tight">
            Build Faster. Deploy<br />
            Smarter. Scale Effortlessly.
          </h1>
          
          <p className="text-sm text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Advanced software engineering using next-generation architecture and technologies to <br />
            power your applications, data, AI, and automation. Speed and scale—without limits.
          </p>
          
          <div className="flex items-center justify-center space-x-6">
            <button 
              className="btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Book a meeting
            </button>
            <button className="px-8 py-3 border border-neutral-700 rounded-lg hover:border-neutral-500 transition flex items-center space-x-2 group">
              <span>Our services</span>
              <span className="transform group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
        </div>
        
      </div>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}