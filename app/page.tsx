import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhyUs from './components/sections/WhyUs';
import ModernizeText from './components/sections/ModernizeText';
import OurApproch from './components/sections/OurApproch';
import CTA from './components/sections/CTA';
import Services from './components/sections/Services';
import WhereWeWork from './components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <WhyUs />
      <ModernizeText />
      <Services/>
      <WhereWeWork />
      <CTA />
      {/* <ServicesSection /> */}
    </main>
  );
}
