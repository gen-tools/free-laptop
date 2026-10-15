import React, { useState } from 'react';
import { ShieldCheck, Globe, Menu, X, Landmark, Lock } from 'lucide-react';
import OfficialSeal from './OfficialSeal';

interface HeaderProps {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  friendName?: string;
}

export default function Header({ currentLanguage, setLanguage, friendName }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Scheme Guidelines', href: '#guidelines' },
    { name: 'Approved Institutes', href: '#institutes' },
    { name: 'Track Order', href: '#checker' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="w-full flex flex-col z-50" id="gov-header">
      {/* Top Banner - Official Government Banner (Editorial style) */}
      <div className="w-full bg-[#14532d] text-white text-[10px] py-2 px-6 md:px-12 font-bold uppercase tracking-widest flex flex-wrap justify-between items-center border-b border-emerald-950 gap-2">
        <div className="flex items-center gap-2">
          <Landmark className="w-3.5 h-3.5" />
          <span>Official National Digital Equity Initiative Portal (.gov)</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span className="text-slate-200">Secure connection (AES-256)</span>
          </div>
          <span className="text-white/30">|</span>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            <select
              value={currentLanguage}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent border-none text-white font-bold cursor-pointer focus:outline-none"
              id="lang-select"
            >
              <option value="EN" className="text-slate-900">EN</option>
              <option value="ES" className="text-slate-900">ES</option>
              <option value="HI" className="text-slate-900">HI</option>
              <option value="FR" className="text-slate-900">FR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Branding Header (Editorial White/Slate Theme) */}
      <div className="w-full bg-white text-slate-900 py-6 px-6 md:px-12 flex justify-between items-center md:items-end border-b border-slate-200">
        <div className="flex items-center gap-5">
          <OfficialSeal size={65} className="shrink-0 text-gov-blue" />
          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-2xl md:text-3.5xl font-black tracking-tighter uppercase leading-none text-slate-900">
              Ministry of Education <span className="text-gov-accent">&amp; Technology</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold font-sans">
              Department of Educational Advancement &amp; Innovation
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 mb-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-gov-accent transition-colors"
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#checker"
            className="bg-gov-accent text-white font-black px-8 py-4 text-xs tracking-widest uppercase hover:bg-emerald-800 transition-all shadow-md shrink-0"
            id="apply-btn-header"
          >
            Claim Device
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-800 p-2 hover:text-gov-accent"
          id="mobile-menu-toggle"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white text-slate-900 flex flex-col border-b border-slate-200 p-4 transition-all shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 border-b border-slate-100 hover:text-gov-accent hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-all"
              id={`nav-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#checker"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-gov-accent text-white font-black py-3 text-center tracking-widest uppercase hover:bg-emerald-800 transition-all text-xs"
            id="apply-btn-mobile"
          >
            Claim Device
          </a>
        </div>
      )}

      {/* Personalised Alert Banner if Prank URL parameter is matched */}
      {friendName && (
        <div className="w-full bg-emerald-50 border-b border-emerald-100 py-3 px-6 text-center text-emerald-900" id="prank-target-banner">
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-gov-accent"></span>
            ⚠️ Quota Allocated: Special laptop quota pre-approved for <span className="underline decoration-gov-accent decoration-2 font-black text-emerald-950">{friendName}</span>. Fill application below.
          </p>
        </div>
      )}
    </header>
  );
}
