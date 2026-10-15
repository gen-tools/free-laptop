import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsBanner from './components/StatsBanner';
import EligibilityChecker from './components/EligibilityChecker';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import { Laptop, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState('EN');
  const [friendName, setFriendName] = useState<string | undefined>(undefined);

  // Extract 'name' query parameter on initial load for personalization
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const nameParam = params.get('name');
      if (nameParam && nameParam.trim()) {
        setFriendName(nameParam.trim());
      }
    } catch (e) {
      console.error("Error reading URL search params:", e);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-gov-blue" id="main-app-container">
      {/* Header Bar */}
      <Header 
        currentLanguage={language} 
        setLanguage={setLanguage} 
        friendName={friendName} 
      />

      {/* Hero Section */}
      <section className="w-full bg-white text-slate-900 border-b border-slate-200" id="gov-hero">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-slate-200 bg-white">
          
          {/* Hero Left Content - Editorial Style */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center space-y-8 lg:border-r lg:border-slate-200">
            <div className="space-y-6">
              <div className="inline-block bg-emerald-50 text-emerald-800 text-[10px] px-3.5 py-1 font-bold uppercase tracking-widest rounded-full w-fit">
                Phase 3 Deployment Active
              </div>

              <h1 className="font-serif text-4xl md:text-7xl leading-[0.95] text-slate-900 tracking-tighter" id="hero-title">
                Free<br/>
                <span className="italic text-gov-accent">Laptop Scheme</span> for our Youth.
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
                All qualified students enrolled in accredited academic institutions are eligible for a zero-cost, high-performance computing device under the authorized <strong className="font-semibold text-slate-950">free laptop scheme 2026</strong>. Verify your eligibility to get started.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              <a
                href="#checker"
                className="w-full sm:w-auto bg-gov-gold text-white px-10 py-5 font-black uppercase text-sm tracking-widest shadow-xl hover:bg-gov-blue hover:shadow-2xl transition-all text-center"
                id="cta-eligibility-btn"
              >
                Claim My Device
              </a>
              <div className="text-[10px] leading-snug text-slate-400 font-bold uppercase tracking-widest text-center sm:text-left">
                Program Quotas Active<br/>Processed in Real-Time
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column - Editorial Style */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Device specs box */}
            <div className="p-8 md:p-12 bg-slate-50 flex flex-col justify-center border-b border-slate-200 h-1/2 min-h-[220px]">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-gov-accent mb-6">Device Specifications</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-slate-300 pl-4">
                  <p className="text-2xl font-serif italic">14.1 / 15.6"</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Premium Displays</p>
                </div>
                <div className="border-l-2 border-slate-300 pl-4">
                  <p className="text-2xl font-serif italic">12hr+</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">All-Day Battery</p>
                </div>
                <div className="border-l-2 border-slate-300 pl-4">
                  <p className="text-2xl font-serif italic">32GB / 16GB</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">DDR5 RAM Available</p>
                </div>
                <div className="border-l-2 border-slate-300 pl-4">
                  <p className="text-2xl font-serif italic">NVMe PCIe</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">High-Speed Storage</p>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="p-8 md:p-12 bg-gov-blue text-white flex flex-col justify-between h-1/2 min-h-[220px]">
              <p className="text-2xl md:text-3.5xl font-serif italic leading-snug">
                "Technology is the passport to the future, for tomorrow belongs to those who prepare for it today."
              </p>
              <div className="flex justify-between items-end mt-6">
                <div className="text-[9px] uppercase tracking-widest opacity-60">Program Allocation #992-B</div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Official Stats Ticker Section */}
      <StatsBanner />

      {/* Eligibility Wizard / Checker Section */}
      <EligibilityChecker initialFriendName={friendName} />

      {/* Guidelines and Educational FAQ section */}
      <InfoSection />

      {/* Page Footer containing standard gov linkages and the clear Prank disclaimer */}
      <Footer />
    </div>
  );
}
