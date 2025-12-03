'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const BookingModal = dynamic(() => import('../BookingModal'), { ssr: false });
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems = [
    { id: 'services', label: 'Services +', path: '/services' },
    { id: 'work', label: 'Work +', path: '/work' },
    { id: 'how-we-work', label: 'How We Work', path: '/how-we-work' },
    { id: 'customer-stories', label: 'Customer Stories', path: '/customer-stories' },
    { id: 'partners', label: 'Partners', path: '/partners' },
    { id: 'about', label: 'About', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 backdrop-blur-xl">
      <div className=" mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="../assets/images/logo2.png" 
              alt="Logo" 
              className="h-8 w-auto" 
              width={120}
              height={32}
            />
          </Link>
          
          <div 
            ref={navRef}
            className="hidden md:flex items-center space-x-8 text-sm"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`transition-all duration-300 ${
                  hoveredItem && hoveredItem !== item.id 
                    ? 'opacity-40 hover:opacity-100' 
                    : 'opacity-100'
                } text-white hover:text-orange-400 cursor-pointer`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
           
            <button 
              className="btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Book a meeting
            </button>
          </div>

          {/* Mobile Navigation */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={item.path}
                  className="text-white hover:text-orange-400 transition text-left py-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <button className="w-full py-2 border border-gray-600 rounded-lg text-white hover:border-gray-400 transition">
                  Login
                </button>
                <button 
                  className="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition shadow-lg shadow-orange-500/50 text-white"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book a meeting
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
