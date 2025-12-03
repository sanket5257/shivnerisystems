import React from 'react';
import { Layers, Square } from 'lucide-react';

const Page = () => {
  return (
    <div className="relative min-h-screen ">
   
      
      {/* Content */}
      <div className="relative z-10 min-h-screen text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <button className="mb-8 px-6 py-2 rounded-full border border-gray-700 text-white text-sm hover:border-gray-600 transition-colors">
              The Shivneri Team Model
            </button>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-2 text-white">
                  Your Full-Stack
                </h1>
                <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white">
                  Product + Platform Team
                </h1>
              </div>
              
              <div>
                <p className="text-white text-base leading-relaxed">
                  We blend product thinkers, engineers, and platform specialists into one high-performing unit. Skills roll on and off based on need—not arbitrary staffing.
                </p>
              </div>
            </div>
          </div>
          {/* Product Team Section */}
          <div className="mb-8 border border-gray-800 rounded-3xl p-8 grid md:grid-cols-[400px_1fr] gap-8">
            {/* Left Card - Product Team */}
            <div className="rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: 'url(/assets/images/68e3caaa1e0d3deccf973f65_67867867.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Square className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-semibold text-white mb-4">Product Team</h2>
                  <p className="text-white text-sm leading-relaxed">
                    Designs and builds the user-facing features, interfaces, and experiences that bring ideas to life.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Roles Grid */}
            <div className="flex flex-col justify-between">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-white text-sm mt-2">Application<br />Architect</span>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    UX/UI Designer
                  </div>
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    Front-End Developer
                  </div>
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    Back-End Developer
                  </div>
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    QA & Test Engineer
                  </div>
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    Data Engineer
                  </div>
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    AI Engineer
                  </div>
                </div>
              </div>
              <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-gray-400 text-sm">
                App Support & Operations
              </div>
            </div>
          </div>

          {/* Platform Team Section */}
          <div className="border border-gray-800 rounded-3xl p-8 grid md:grid-cols-[400px_1fr] gap-8 relative overflow-hidden">
            {/* Left Card - Platform Team */}
            <div className=" rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: 'url(/assets/images/68e3caaa1e0d3deccf973f65_67867867.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }} />
              <div className="relative z-10">
                <div className="w-12 h-12  rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-semibold text-white mb-4">Platform Team</h2>
                  <p className="text-white text-sm leading-relaxed">
                    Delivers the cloud infrastructure, automation, and tools that enable secure, scalable, and efficient product delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Roles Grid */}
            <div className="flex flex-col justify-between">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-white text-sm mt-2">Platform<br />Architect</span>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    Site Reliability Engineer
                  </div>
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    Cloud Engineer
                  </div>
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    Network Engineer
                  </div>
                  <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-white text-sm">
                    Infrastructure Engineer
                  </div>
                </div>
              </div>
              <div className="border border-gray-800 rounded-2xl px-6 py-4 text-center text-gray-400 text-sm">
                Platform Support & Operations
              </div>
            </div>

            {/* Right Side Text (Automation & Security) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <div className="flex gap-32">
                <span className="text-white text-sm tracking-widest origin-center rotate-90 whitespace-nowrap">
                  Automation
                </span>
                <span className="text-white text-sm tracking-widest origin-center rotate-90 whitespace-nowrap">
                  Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;