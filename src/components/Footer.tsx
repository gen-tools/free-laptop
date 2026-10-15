import React from 'react';
import { ShieldAlert, CheckCircle } from 'lucide-react';
import OfficialSeal from './OfficialSeal';

export default function Footer() {
  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Freedom of Information Act (FOIA)', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Office of Inspector General', href: '#' },
    { name: 'Accessibility Support', href: '#' },
    { name: 'Contact Helpdesk', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#052e16] text-white pt-16 pb-8 px-6 md:px-12 border-t border-emerald-950 flex flex-col gap-12" id="gov-footer">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3">
            <OfficialSeal size={50} className="shrink-0" />
            <div className="flex flex-col">
              <span className="font-serif font-black text-sm tracking-wide text-slate-100">
                NATIONAL STUDENT PORTAL
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Authorized Distribution FY2026
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-2">
            The National Student Digital Access and Empowerment Portal is dedicated to bridging the technological divide by delivering enterprise-grade laptops to accredited students.
          </p>
        </div>

        {/* Agency Directory Links */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">
            Agency Resources &amp; Legal
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors"
                id={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Security / Verification Seals */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">
            System &amp; Server Health
          </h4>
          <div className="flex flex-col gap-2.5 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/20 p-2 rounded-none border border-emerald-900/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Node Hubs Online - 100% Secure</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/40 p-2 rounded-none border border-slate-800">
              <CheckCircle className="w-4 h-4 text-gov-accent" />
              <span>Certified SSL Encryption Standard</span>
            </div>
          </div>
        </div>

      </div>

      {/* MANDATORY USER PRANK DISCLAIMER */}
      <div className="max-w-4xl mx-auto w-full bg-slate-950/50 p-6 rounded-none border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-slate-300 shadow-inner text-left" id="prank-disclaimer-card">
        <div className="p-3 bg-amber-500/10 text-amber-500 rounded-none shrink-0">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="flex flex-col gap-1.5">
          <h5 className="text-xs font-bold text-slate-100 uppercase tracking-wider">
            ⚠️ Privacy &amp; Fun Disclaimer
          </h5>
          <p className="text-xs leading-relaxed text-slate-400 font-sans">
            We will not collect any type of data, it is just a prank website! Any credentials, names, or choices inputted here remain strictly client-side inside your local browser memory and are immediately cleared when you close the tab. No servers store this, so have fun sharing a laugh with your friends risk-free!
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto w-full border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4 font-mono">
        <span>© 2026 United States Digital Education Scheme Portal. For amusement purposes only.</span>
        <span>Version 2.4.6-RC (Build: Live)</span>
      </div>
    </footer>
  );
}
