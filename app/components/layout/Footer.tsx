import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';
export default function ModernFooter() {
  const services = ['Development', 'Platforms', 'Operate & Innovate'];
  const assessments = ['App Security & Compliance', 'Cloud Cost Optimization', 'Internal Developer Platforms'];
  const company = ['Customer Stories', 'Partners', 'How We Work', 'Careers'];
  const about = ['Our Mission', "Shivneri's Journey", 'Leadership Team', 'Contact'];
  
  const contacts = [
    { region: 'India', phone: '+91 12345 67890' }
  ];
  
  const legalLinks = [
    'Privacy Policy',
    'Cookie Policy',
    'Code of Conduct',
    'Sustainability Policy',
    'Modern Slavery Policy',
    'Cookie Settings'
  ];

  return (
    <footer className="relative overflow-hidden  text-white">
      <video className='object-cover overflow-hidden' src="/assets/Homepage X Hero Video (1).mp4" autoPlay loop muted></video>
      <div className="border-t absolute top-0 bottom-0 left-0 right-0 backdrop-blur-xl border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            <div className="lg:w-1/2">
            <Link href="/" className="flex items-center mb-20">
            <img 
              src="../assets/images/logo2.png" 
              alt="Logo" 
              className="h-8 w-auto" 
              width={120}
              height={32}
            />
          </Link>
              <h2 className="text-5xl lg:text-6xl font-light leading-tight mb-6">

                Let's build<br />
                something<br />
                great together.
              </h2>
              <p className="text-gray-400 text-lg">
                Connect with our engineers to scope your next step.
              </p>
            </div>

            <div className="lg:w-1/2">
              <div className="flex gap-3 justify-end mb-12">
                <button className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all">
                  <Mail size={20} className="text-white" />
                </button>
                <button className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all">
                  <Phone size={20} className="text-white" />
                </button>
                <button className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all">
                  <MapPin size={20} className="text-white" />
                </button>
                <button className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all">
                  <Linkedin size={20} className="text-white" />
                </button>
              </div>

              {/* Navigation Grid */}
              <div className="grid grid-cols-4 gap-8 border-t border-white/10 pt-12">
                {/* Services */}
                <div>
                  <h3 className="font-medium mb-4 text-white">Services</h3>
                  <ul className="space-y-3">
                    {services.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Assessments */}
                <div>
                  <h3 className="font-medium mb-4 text-white">Assessments</h3>
                  <ul className="space-y-3">
                    {assessments.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="font-medium mb-4 text-white">Company</h3>
                  <ul className="space-y-3">
                    {company.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* About */}
                <div>
                  <h3 className="font-medium mb-4 text-white">About</h3>
                  <ul className="space-y-3">
                    {about.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 mt-12 pt-12">
                <div className="grid grid-cols-3 gap-8">
                  {/* Phone Numbers */}
                  <div className="space-y-3">
                    {contacts.map((contact, i) => (
                      <div key={i} className="text-sm">
                        <span className="text-white">{contact.region}:</span>
                        <span className="text-gray-400 ml-2">{contact.phone}</span>
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div>
                    <a href="mailto:sayhello@uptic.io" className="text-gray-400 hover:text-white text-sm">
                      sayhello@shivneri.com
                    </a>
                  </div>

                  {/* Address */}
                  <div className="text-right text-sm text-gray-400">
                    <div>Shivneri Tech Park</div>
                    <div>Ichalkaranji</div>
                    <div>Maharashtra 416115</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link, i) => (
                <React.Fragment key={i}>
                  <a href="#" className="text-gray-500 hover:text-gray-300">
                    {link}
                  </a>
                  {i < legalLinks.length - 1 && <span className="text-gray-700">|</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              Copyright 2025 Shivneri Systems Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}