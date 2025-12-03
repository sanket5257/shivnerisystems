'use client'

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface Service {
  id: number;
  title: string;
  description?: string;
  videoSrc: string;
}

const ServicesSection = () => {
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const services: Service[] = [
    // First row - 2 services
    {
      id: 1,
      title: 'Product Design',
      description: 'We craft digital products that solve real problems and delight users from concept to launch.',
      videoSrc: '/assets/branding.mp4'
    },
    {
      id: 2,
      title: 'UX/UI Design',
      description: 'We create visually stunning, user-friendly designs that enhance engagement and deliver a smooth digital experience.',
      videoSrc: '/assets/Web_design.mp4'
    },
    // Second row - 3 services
    {
      id: 3,
      title: 'Mobile Applications',
      description: 'We craft intuitive, high-performance mobile applications that delight users and accelerate growth.',
      videoSrc: '/assets/mobile_application.mp4'
    },
    {
      id: 4,
      title: 'Development',
      description: 'We build robust technical foundations that bring creative concepts to life while ensuring scalability for your growing business.',
      videoSrc: '/assets/development.mp4'
    },
    {
      id: 5,
      title: 'Video Editing',
      description: 'We turn raw footage into captivating stories that elevate your brand everywhere.',
      videoSrc: '/assets/video_editing.mp4'
    },
    // Third row - 2 services
    {
      id: 6,
      title: 'Graphic Design & Branding',
      description: 'We translate your values into distinctive visual identities that resonate with audiences and create immediate recognition.',
      videoSrc: '/assets/branding.mp4'
    },
    {
      id: 7,
      title: 'Motion Design',
      description: 'We bring visuals to life with dynamic animation that clarifies, excites, and moves audiences.',
      videoSrc: '/assets/motion_graphics.mp4'
    },
  ];

  useEffect(() => {
    // Initialize animations
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, []);

  const handleMouseEnter = async (index: number) => {
    if (!services[index].videoSrc) return;
    
    const videoElement = videoRefs.current[index]?.querySelector('video');
    if (!videoElement) return;

    try {
      setPlayingIndex(index);
      videoElement.currentTime = 0;
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        await playPromise.catch(() => {
          // Handle the error silently
          setPlayingIndex(null);
        });
      }
    } catch (err) {
      console.error('Error playing video:', err);
      setPlayingIndex(null);
    }
  };

  const handleMouseLeave = (index: number) => {
    if (playingIndex !== index) return;
    
    const videoElement = videoRefs.current[index]?.querySelector('video');
    if (videoElement) {
      try {
        videoElement.pause();
        videoElement.currentTime = 0;
      } catch (err) {
        console.error('Error pausing video:', err);
      }
    }
    setPlayingIndex(null);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      <div className=" mx-auto px-8 lg:px-16">
       <div className="mb-10">
          <div className="inline-block px-6 py-2 border border-gray-700 rounded-full text-sm text-gray-400 mb-8">
            Services
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold tracking-tight mb-4">
            <span className="text-gray-500">It’s not just what we build</span>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold tracking-tight">
            <span className="">it’z how we show up.</span>
          </h1>
          <div className="flex justify-end mt-8">
            <button className="flex items-center gap-3 px-6 py-3 border border-gray-700 rounded-full hover:border-gray-500 transition-colors">
              <span className="text-gray-400">Learn more</span>
              <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0">
          {services.map((service, index) => (
            <div key={service.id} className={`relative group ${
              // First row: 2 items, each spans 3 columns
              index < 2 ? 'md:col-span-3' : 
              // Second row: 3 items, each spans 2 columns
              index < 5 ? 'md:col-span-2' :
              // Third row: 2 items, each spans 3 columns
              'md:col-span-3'
            }`}>
              <svg 
                className="absolute top-4 left-2 w-10 h-10 opacity-80 group-hover:opacity-100 transition-all duration-300 z-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                  className="stroke-white group-hover:fill-white transition-colors duration-300"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              <article 
                className="h-[400px] bg-black/40 backdrop-blur-sm p-8 transition-all duration-500 hover:bg-black/80 border border-white/30 relative overflow-hidden group cursor-pointer flex flex-col"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {service.videoSrc && (
                  <div 
                    ref={el => { videoRefs.current[index] = el; }}
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <video 
                      className="w-full h-full object-cover" 
                      loop 
                      muted
                      playsInline
                      preload="none"
                    >
                      <source src={service.videoSrc} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" />
                  </div>
                )}
                
                <div className="flex-1"></div> {/* This pushes the content to the bottom */}
                
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                  <div className="overflow-hidden">
                    <p className="text-gray-300/80 text-xl leading-relaxed transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default ServicesSection;