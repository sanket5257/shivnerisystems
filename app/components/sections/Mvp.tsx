import React from 'react';

const Mvp = () => {
  const cards = [
    {
      title: 'Mission',
      description:
        'Build, scale, and run great software—fast, secure, and built for what’s next.',
      img: '/assets/images/68d105c245053d57199df7a8_Wireframe 33.svg' // ← place your background image here
    },
    {
      title: 'Vision',
      description:
        'A world where every team can ship high-performing software without legacy drag or bloated overhead.',
      img: '' // ← place your background image here
    },
    {
      title: 'Purpose',
      description:
        'We turn bold ideas into resilient, scalable systems—minus the red tape.',
      img: '' // ← place your background image here
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-gray-300 border border-gray-700 rounded-full mb-6 tracking-wide">
            MVP
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-200">
            Mission. Vision. <span className="text-white">Purpose.</span>
          </h2>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                p-8 rounded-3xl
                border border-gray-800
                bg-gradient-to-b from-[#111] to-[#0c0c0c]
                transition-all duration-300
                hover:bg-gray-700 hover:-translate-y-1
              "
            >
              {/* BACKGROUND IMAGE (LEFT EMPTY) */}
              <div
                className="
                  absolute inset-0 
                  bg-no-repeat bg-contain bg-right-top pointer-events-none
                "
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>

              {/* CARD TITLE */}
              <h3 className="text-lg font-semibold text-gray-200 mb-6 relative z-10">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-base leading-relaxed relative z-10">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mvp;
