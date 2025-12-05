"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const BookingModal = dynamic(() => import('../BookingModal'), { ssr: false });

export default function UpticHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="h-screen bg-[#131214] text-white relative overflow-hidden">
        <video className='object-cover h-full w-full' src="/assets/Homepage X Hero Video (1).mp4" autoPlay loop muted></video>
        
        {/* Hero Content */}
        <div className="absolute top-30 sm:top-10 md:top-20 right-0 left-0 bottom-0 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-20 md:pb-40 text-center">
          <div className="mb-6 sm:mb-8">
            <span className="px-4 sm:px-6 py-1.5 sm:py-2 border border-neutral-700 rounded-full text-xs sm:text-sm text-neutral-300 inline-block">
              Modern Full-Stack Development & Engineering
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
            Build Faster. Deploy
            <br className="hidden sm:block" />
            Smarter. Scale Effortlessly.
          </h1>
          
          <p className="text-sm text-neutral-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Advanced software engineering using next-generation architecture and technologies to
            <br className="hidden md:block" />
            power your applications, data, AI, and automation. Speed and scale—without limits.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button 
              className="btn-primary w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base"
              onClick={() => setIsModalOpen(true)}
            >
              Book a meeting
            </button>
            <Link href="/services" className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3 border border-neutral-700 rounded-lg hover:border-neutral-500 transition flex items-center justify-center space-x-2 group">
              <span>Our services</span>
              <span className="transform group-hover:translate-x-1 transition">→</span>
            </Link>
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