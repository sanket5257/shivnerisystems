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
          start: 'top 10%', // Start when the top of the container is 20% from the top of the viewport
          end: 'bottom 20%', // End when the bottom of the container is 20% from the top of the viewport
          scrub: 1.5, // Smoother scrubbing
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Manual control for better performance
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
        
       
        
        // Calculate position in timeline (0 to 1)
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
        const node = item.querySelector('.timeline-node');
        
        if (node && year && title && desc) {
          // Cache elements that don't change
          const textElements = [year, title, desc];
          
          item.addEventListener('mouseenter', () => {
            // Batch animations together for better performance
            gsap.killTweensOf([node, ...textElements]);
            
            gsap.to(node, { 
              scale: 1.5, 
              backgroundColor: '#ffffff', 
              duration: 0.3,
              force3D: true
            });
            
            gsap.to(textElements, { 
              color: '#ffffff', 
              duration: 0.3,
              stagger: 0.05,
              force3D: true
            });
          });

          item.addEventListener('mouseleave', () => {
            gsap.killTweensOf([node, year, title, desc]);
            
            gsap.to(node, { 
              scale: 1, 
              backgroundColor: '#ffffff', 
              duration: 0.3,
              force3D: true
            });
            
            gsap.to(year, { 
              color: '#6b7280', 
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
        // Cleanup ScrollTrigger instances
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []); 

  return (
    <div className="bg-black text-white">
      {/* Hero Section with large title */}
      <div className="flex items-center justify-center relative overflow-hidden journey-title py-8 md:py-12">
       <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-semibold bg-gradient-to-r from-neutral-500 via-neutral-400 to-gray-300 bg-clip-text text-transparent tracking-tight relative z-10 px-4 text-center">
          Our Journey
        </h1>
      </div>

      {/* Timeline Section */}
      <div ref={containerRef} className="relative" style={{ minHeight: '100vh' }}>
        <div className="sticky top-0 h-screen overflow-x-auto overflow-x-hidden">
          <div className="h-full flex items-center relative">
              <div ref={timelineRef} className="flex items-end gap-0 transition-transform duration-100 ease-linear relative px-4 sm:px-6 md:px-8">
                {/* Horizontal connecting line behind nodes (moved to bottom) */}
                <div className="absolute left-4 right-4 bottom-0 h-0.5 bg-white z-0 pointer-events-none" />
              {/* Company Timeline Label */}
              <div className="flex-shrink-0 flex items-end justify-center mb-24 sm:mb-32 md:mb-40 ml-4 sm:ml-8 md:ml-16 mr-4 sm:mr-8 md:mr-12">
                <div className="border border-gray-700 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-black/50 backdrop-blur-sm transform rotate-90 origin-center">
                  <span className="text-xs sm:text-sm text-white whitespace-nowrap">
                    Company Timeline
                  </span>
                </div>
              </div>

              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  ref={(el: HTMLDivElement | null) => { if (el) itemsRef.current[index] = el; }}
                  className="flex-shrink-0 w-[260px] xs:w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] relative timeline-item px-2 sm:px-4"
                >
                  {/* Content Card - Above the timeline */}
                  <div className="mb-32 sm:mb-40 md:mb-48 px-3 sm:px-4 md:px-6">
                    <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light mb-2 sm:mb-3 md:mb-4 text-white leading-tight tracking-tight">
                      {milestone.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          {i < milestone.title.split(' ').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Timeline Node - Circle on the line */}
                  <div className="absolute bottom-28 xs:bottom-28 sm:bottom-32 md:bottom-40 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-white border-2 border-gray-700 timeline-node transition-all duration-300"></div>
                  </div>
                  
                  {/* Vertical Line from node to year */}
                  <div className="absolute ml-5 bottom-0 left-1/2 transform -translate-x-1/2 w-px h-24 xs:h-28 sm:h-40 md:h-44 bg-white"></div>
                  
                  {/* Year Display - Vertical, below the line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pt-2">
                    <div className="flex flex-col items-center space-y-0 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent leading-none tracking-tighter year-text transition-all duration-300">
                      {milestone.year.split('').map((char, i) => (
                        <div key={i} className="leading-[0.85]">{char}</div>
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