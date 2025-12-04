import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CustomerStories = () => {
  const stories = [
    {
      logo: 'RAY·ALLEN',
      logoColor: '#3B82F6',
      industry: 'Industry',
      sector: 'SaaS & IT Asset Management',
      title: 'SaaS Modernization to Meet the Demands of a Growing Global Business',
      description: 'RAY·ALLEN partnered with Uptic to modernize its SaaS platform—combining AWS, Kubernetes, and CI/CD to enable faster releases, partner-ready deployments, and global agility',
      company: 'Ray Allen, Inc.',
      companyDescription: 'A global SaaS leader in IT asset lifecycle management'
    },
    {
      logo: 'assured',
      logoSubtext: 'data protection',
      logoColor: '#FFFFFF',
      industry: 'Industry',
      sector: 'SaaS & Data Protection',
      title: 'Cloud Automation Engine for Global Data Protection at Speed and Scale Across Regions',
      description: 'Uptic helped Assured modernize its Rubrik-based platform with Azure and Terraform automation—delivering secure, compliant data protection in minutes, not days.',
      company: 'Assured Data Protection',
      companyDescription: 'Global data backup, DR, and cyber recovery platform'
    },
    {
      logo: 'Vertex',
      logoColor: '#10B981',
      industry: 'Finance',
      sector: 'FinTech',
      title: 'Realtime Payments Platform for Faster Settlement and Lower Fees',
      description: 'Vertex partnered with Uptic to re-architect their payments pipeline using event-driven microservices, reducing settlement latency and operational cost.',
      company: 'Vertex Financial',
      companyDescription: 'FinTech startup delivering cross-border payments'
    },
    {
      logo: 'GreenWave',
      logoSubtext: 'energy',
      logoColor: '#059669',
      industry: 'Energy',
      sector: 'Renewables',
      title: 'Scaling IoT Telemetry for Distributed Renewable Assets',
      description: 'GreenWave scaled device telemetry ingestion and analytics with a serverless pipeline and near-real-time dashboards to improve uptime and forecasting.',
      company: 'GreenWave Energy',
      companyDescription: 'Operator of distributed renewable energy microgrids'
    },
    {
      logo: 'Lumen',
      logoColor: '#F59E0B',
      industry: 'Healthcare',
      sector: 'HealthTech',
      title: 'Secure Cloud Migration for Sensitive Patient Data',
      description: 'Lumen moved core patient records to a compliant cloud architecture, adding automated compliance checks, encrypted backups, and role-based access controls.',
      company: 'Lumen Health',
      companyDescription: 'HealthTech platform for care coordination'
    },
    {
      logo: 'Atlas',
      logoSubtext: 'retail',
      logoColor: '#EF4444',
      industry: 'Retail',
      sector: 'eCommerce',
      title: 'Headless Commerce Transformation for Rapid Product Launches',
      description: 'Atlas transitioned to a headless commerce architecture with composable APIs and a CDN-first frontend, enabling faster launches and personalization.',
      company: 'Atlas Retail',
      companyDescription: 'Omnichannel retail brand focused on modern shopping experiences'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold
           text-gray-300 mb-4">
            Customer Stories
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Discover how we've helped businesses transform and scale
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-card p-8 md:p-10 flex flex-col justify-between group"
            >
              {/* Header Section */}
              <div>
                {/* Logo and Industry Tags */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    {story.logo === 'RAY·ALLEN' ? (
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
                        </div>
                        <span className="text-2xl font-light text-blue-500 tracking-wider">
                          {story.logo}
                        </span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl font-normal tracking-tight">
                          {story.logo}
                        </div>
                        {story.logoSubtext && (
                          <div className="text-sm text-gray-400 -mt-1">
                            {story.logoSubtext}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <span className="px-4 py-1.5 border border-gray-700 rounded-full text-xs text-gray-400">
                      {story.industry}
                    </span>
                    <span className="px-4 py-1.5 border border-gray-700 rounded-full text-xs text-gray-400">
                      {story.sector}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-light leading-tight mb-4 text-white">
                  {story.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  {story.description}
                </p>
              </div>

              {/* Footer Section */}
              <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-normal text-white mb-1">
                    {story.company}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {story.companyDescription}
                  </p>
                </div>
                <button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group-hover:border-gray-600">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </div>
  );
};

export default CustomerStories;