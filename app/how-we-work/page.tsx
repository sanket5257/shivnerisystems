"use client"

import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import TeamModel from '../components/sections/TeamModel';
import CTA from '../components/sections/CTA';
import gsap from 'gsap';

const Page = () => {
  const bgImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (bgImageRef.current) {
      gsap.to(bgImageRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);
  return (
    <div className="bg-black text-white relative overflow-hidden flex flex-col items-center">
      {/* Background Image */}
      <img 
        ref={bgImageRef}
        className='absolute opacity-50 top-0 left-0 w-full h-auto -translate-y-1/2 transform-gpu origin-center'
        src="/assets/images/68c97f8d935467f69535950d_Frame 1171275157.svg" 
        alt="" 
      />
      
      <div className="relative z-10 w-full text-center">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-40 pb-20 text-center">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <button className="mb-12 px-6 py-2 rounded-full border border-gray-700 text-gray-400 text-sm hover:border-gray-600 transition-colors">
              How we work
            </button>
            
            <h1 className="text-6xl md:text-7xl font-semibold mb-8 leading-tight bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">
              A Better Way to<br />
              Build Software
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl">
              A smarter model. Leaner teams. Faster outcomes. This is the new
              way to build, scale, and support software.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex justify-center">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-6xl px-6 pb-4 mx-auto">
            {/* Left Column */}
            <div className="flex flex-col items-center md:items-start">
              <button className="mb-6 px-6 py-2 rounded-full border border-gray-700 text-gray-400 text-sm hover:border-gray-600 transition-colors">
                Choosing the Right Model
              </button>
              
              <h2 className="text-5xl font-light mb-6 leading-tight">
                Not All Models<br />
                Are <span className="font-normal">Built Equal</span>
              </h2>
              
              <p className="text-gray-400 text-base text-left leading-relaxed">
                Long-term platform success demands continuity, knowledge retention, and
                proactive evolution—not just reactive fixes.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-4 pt-4 flex flex-col justify-start items-start">
              <p className="text-gray-400 text-lg mb-4">
                Shivneri offers a different kind of model:
              </p>
              
              <div className="space-y-4 flex flex-col justify-start items-start w-full">
                <div className="flex items-center justify-start gap-4 py-3 w-full">
                  <CheckCircle2 className="w-6 h-6 shrink-0 text-gray-400" />
                  <p className="text-gray-300 text-lg">
                    Senior FTE talent, engaged from day one
                  </p>
                </div>
                
                <div className="flex items-center justify-start gap-4 py-3 w-full">
                  <CheckCircle2 className="w-6 h-6 shrink-0 text-gray-400" />
                  <p className="text-gray-300 text-lg">
                    Modular teams that flex to fit
                  </p>
                </div>
                
                <div className="flex items-center justify-start gap-4 py-3 w-full">
                  <CheckCircle2 className="w-6 h-6 shrink-0 text-gray-400" />
                  <p className="text-gray-300 text-lg">
                    Clear ownership from build to support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='h-[20vh]'></div>
      <TeamModel />
      <CTA/>
    </div>
  );
};

export default Page;