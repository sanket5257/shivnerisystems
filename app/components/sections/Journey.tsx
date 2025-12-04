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
          start: 'center center', // Start when container's center is at viewport's center
          end: 'bottom top', // End when container's bottom reaches viewport's top
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
      gsap.set(timelineRef.current, { x: 0, force3D: true });

      // Optimize item animations
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        
        // Initial state with hardware acceleration
        gsap.set(item, { 
          opacity: 0, 
          y: 20,
          force3D: true,
          willChange: 'opacity, transform' // Hint browser for better performance
        });
        
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
      <div className=" flex items-center justify-center relative overflow-hidden journey-title">
       <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold bg-gradient-to-r from-neutral-500 via-neutral-400 to-gray-300 bg-clip-text text-transparent tracking-tight relative z-10">
          Our Journey
        </h1>
      </div>

      {/* Timeline Section */}
      <div ref={containerRef} className="relative" style={{ height: '100vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-full flex items-center relative">
            <div ref={timelineRef} className="flex items-end gap-0 transition-transform duration-100 ease-linear relative">
              {/* Company Timeline Label */}
              <div className="flex-shrink-0 flex items-end justify-center mb-32 md:mb-40 ml-8 md:ml-16 mr-8 md:mr-12">
                <div className="border border-gray-700 rounded-full px-4 py-2 md:px-6 md:py-3 bg-black/50 backdrop-blur-sm transform rotate-90 origin-center">
                  <span className="text-xs md:text-sm text-gray-400 whitespace-nowrap">
                    Company Timeline
                  </span>
                </div>
              </div>

              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  ref={(el: HTMLDivElement | null) => { if (el) itemsRef.current[index] = el; }}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] relative timeline-item"
                >
                  {/* Content Card - Above the timeline */}
                  <div className="mb-40 md:mb-48 px-4 md:px-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 md:mb-4 text-white leading-tight tracking-tight">
                      {milestone.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          {i < milestone.title.split(' ').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Timeline Node - Circle on the line */}
                  <div className="absolute bottom-32 md:bottom-40 left-1/2 transform -translate-x-1/2 ">
                    <div className="w-3 h-3 mb-2  md:w-4 md:h-4 rounded-full bg-white border-2 border-gray-700 relative z-10 timeline-node transition-all duration-300"></div>
                  </div>
                  
                  {/* Vertical Line from node to year */}
                  <div className="absolute md:bottom-0 left-1/2 transform -translate-x-1/2 w-px h-44 md:h-44 ml-6 bg-white"></div>
                  
                  {/* Year Display - Vertical, below the line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-col items-center space-y-0 text-5xl sm:text-6xl md:text-7xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent leading-none tracking-tighter year-text transition-all duration-300">
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