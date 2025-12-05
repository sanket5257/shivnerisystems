import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JourneyTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const milestones = [
    {
      year: '2022',
      title: 'Development Launch',
      description: 'Capabilities to include modern full-stack development services from UI to AI.'
    },
    {
      year: '2023',
      title: 'Delivery Innovation',
      description: 'Delivery models evolve from project work to fractional product & platform teams.'
    },
    {
      year: '2024',
      title: 'USA Expansion',
      description: 'USA market expansion, Matt Keenan joins the founding team.'
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Expanding services globally with new partnerships and innovative solutions.'
    },
    {
      year: '2026',
      title: 'AI Integration',
      description: 'Full-scale AI integration across all development and delivery processes.'
    }
  ];

  useEffect(() => {
    // Animate the title on load
    gsap.from('.journey-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate the grid pattern
    gsap.from('svg rect', {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.3
    });

    // Setup scroll trigger for the timeline
    if (timelineRef.current) {
      // Optimize performance
      gsap.defaults({ force3D: true });
      
      const maxScroll = timelineRef.current.scrollWidth - window.innerWidth;
      
      // Main timeline with optimized settings
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 10%',
          end: 'bottom 20%',
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(timelineRef.current, { 
              x: -maxScroll * progress,
              force3D: true 
            });
          }
        }
      });
      
      // Set initial transform
      gsap.set(timelineRef.current, { x:100, force3D: true });

      // Optimize item animations
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        
        const position = i / (itemsRef.current.length - 1);
        
        // Animate in with the main timeline for better performance
        timeline.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power1.out',
          force3D: true
        }, position * 0.8 + 0.1);

        // Optimized hover effects with reduced animations
        const year = item.querySelector('.year-text');
        const title = item.querySelector('h3');
        const desc = item.querySelector('p');
        
        if (year && title && desc) {
          const textElements = [year, title, desc];
          
          item.addEventListener('mouseenter', () => {
            gsap.killTweensOf(textElements);
            
            gsap.to(textElements, { 
              color: '#fb923c', 
              duration: 0.3,
              stagger: 0.05,
              force3D: true
            });
          });

          item.addEventListener('mouseleave', () => {
            gsap.killTweensOf([year, title, desc]);
            
            gsap.to(year, { 
              color: '#d1d5db', 
              duration: 0.3,
              force3D: true
            });
            
            gsap.to(title, { 
              color: '#ffffff', 
              duration: 0.3,
              force3D: true
            });
            
            gsap.to(desc, { 
              color: '#9ca3af', 
              duration: 0.3,
              force3D: true
            });
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []); 

  return (
    <div className="bg-black text-white">
      {/* Hero Section with large title */}
      <div className="flex items-center justify-center relative overflow-hidden journey-title py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
        <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent tracking-tighter relative z-10 px-4 text-center">
          Our Journey
        </h1>
      </div>

      {/* Timeline Section */}
      <div ref={containerRef} className="relative bg-gradient-to-b from-black via-zinc-950 to-black" style={{ minHeight: '100vh' }}>
        <div className="sticky top-0 h-screen overflow-x-auto overflow-x-hidden">
          <div className="h-full flex items-center relative">
            <div ref={timelineRef} className="flex items-end gap-0 transition-transform duration-100 ease-linear relative px-4 sm:px-6 md:px-8">
              {/* Horizontal connecting line behind nodes with gradient glow */}
              <div className="absolute left-4 right-4 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent z-0 pointer-events-none" />
              <div className="absolute left-4 right-4 bottom-0 h-[1px] bg-white blur-sm z-0 pointer-events-none" />
            
              {/* Company Timeline Label */}
              <div className="flex-shrink-0 flex items-end justify-center mb-24 sm:mb-32 md:mb-40 ml-4 sm:ml-8 md:ml-16 mr-8 sm:mr-12 md:mr-16">
                <div className="border border-gray-600/50 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-md transform rotate-90 origin-center shadow-2xl">
                  <span className="text-xs sm:text-sm md:text-base text-gray-300 whitespace-nowrap font-medium tracking-wide">
                    Company Timeline
                  </span>
                </div>
              </div>

              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  ref={(el: HTMLDivElement | null) => { if (el) itemsRef.current[index] = el; }}
                  className="flex-shrink-0 w-[280px] xs:w-[300px] sm:w-[340px] md:w-[400px] lg:w-[440px] relative timeline-item px-2 sm:px-4"
                >
                  {/* Content Card - Above the timeline */}
                  <div className="mb-32 sm:mb-40 md:mb-48 px-4 sm:px-5 md:px-7 py-6 sm:py-7 md:py-8 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-black/40 backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/70 hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <h3 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-white leading-tight tracking-tight">
                      {milestone.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          {i < milestone.title.split(' ').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Vertical Line from card to year with gradient */}
                  <div className="absolute ml-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] h-28 xs:h-32 sm:h-44 md:h-52 bg-gradient-to-b from-white to-gray-600"></div>
                  
                  {/* Year Display - Vertical, below the line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pt-4">
                    <div className="flex flex-col items-center space-y-0 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-black bg-gradient-to-b from-white via-gray-300 to-gray-600 bg-clip-text text-transparent leading-none tracking-tighter year-text transition-all duration-300">
                      {milestone.year.split('').map((char, i) => (
                        <div key={i} className="leading-[0.8]">{char}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;