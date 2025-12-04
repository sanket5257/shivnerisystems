import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';

export default function ModernFooter() {
  const services = [
    { name: 'Development', path: '/services/development' },
    { name: 'Platforms', path: '/services/platforms' },
    { name: 'Operate & Innovate', path: '/services/operate-innovate' }
  ];

  const assessments = [
    { name: 'App Security & Compliance', path: '/assessments/security-compliance' },
    { name: 'Cloud Cost Optimization', path: '/assessments/cloud-optimization' },
    { name: 'Internal Developer Platforms', path: '/assessments/developer-platforms' }
  ];

  const company = [
    { name: 'Customer Stories', path: '/company/customer-stories' },
    { name: 'Partners', path: '/company/partners' },
    { name: 'How We Work', path: '/company/how-we-work' },
    { name: 'Careers', path: '/about#careers' }
  ];

  const about = [
    { name: 'Our Mission', path: '/about/mission' },
    { name: "Shivneri's Journey", path: '/about/journey' },
    { name: 'Leadership Team', path: '/about/leadership' },
    { name: 'Contact', path: '/contact' }
  ];

  const contacts = [
    { region: 'India', phone: '+91 12345 67890' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/legal/privacy-policy' },
    { name: 'Cookie Policy', path: '/legal/cookie-policy' },
    { name: 'Code of Conduct', path: '/legal/code-of-conduct' },
    { name: 'Sustainability Policy', path: '/legal/sustainability-policy' },
    { name: 'Modern Slavery Policy', path: '/legal/modern-slavery-policy' },
    { name: 'Cookie Settings', path: '/cookie-settings' }
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
                        <Link href={item.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                          {item.name}
                        </Link>
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
                        <Link href={item.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                          {item.name}
                        </Link>
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
                        <Link href={item.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                          {item.name}
                        </Link>
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
                        <Link href={item.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                          {item.name}
                        </Link>
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
                    <a href="mailto:sayhello@shivneri.com" className="text-gray-400 hover:text-white text-sm">
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
                  <Link href={link.path} className="text-gray-500 hover:text-gray-300">
                    {link.name}
                  </Link>
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