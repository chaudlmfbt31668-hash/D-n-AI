import React, { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  ecoScore: number;
  activeSection: string;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ ecoScore, activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string; icon?: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'sorting', label: 'Phân loại rác' },
    { id: 'game', label: 'Mini Game' },
    { id: 'lookup', label: 'Rác này đi đâu?' },
    { id: 'journey', label: 'Hành trình rác' },
    { id: 'habits', label: 'Thói quen 5R' },
    { id: 'handbook', label: 'Sổ tay thực hành' },
    { id: 'about', label: 'Về dự án' },
  ];

  const handleItemClick = (id: PageType) => {
    // Automatically close the mobile menu on select
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md shadow-xs border-b border-sky-200/70 py-2.5 sm:py-3 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand: 🌱 GreenSort */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1 text-left cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
        >
          <span className="text-2xl select-none group-hover:rotate-12 transition-transform duration-200">
            🌱
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold font-heading tracking-tight text-emerald-950 flex items-center gap-1.5 leading-none">
              GreenSort
            </span>
            <span className="text-[11px] font-semibold text-sky-700 tracking-wide mt-1">
              Tin học 10 · Dự án Vibe Coding
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-sky-100/60 p-1 rounded-2xl border border-sky-200/60 shadow-2xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold transition-all duration-200 rounded-xl cursor-pointer ${
                  isActive
                    ? 'text-emerald-950 bg-white shadow-xs font-bold border border-sky-300/80 ring-1 ring-sky-200'
                    : 'text-slate-600 hover:text-sky-900 hover:bg-white/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side: Eco Points badge & DEMO NHANH & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => handleItemClick('handbook')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-sky-200 hover:border-emerald-300 hover:bg-emerald-50/80 transition-all duration-200 text-emerald-950 cursor-pointer shadow-2xs hover:-translate-y-0.5"
            title="Điểm sống xanh học sinh tích lũy"
          >
            <Trophy className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
            <div className="text-xs font-bold flex items-center gap-1">
              <span>{ecoScore}</span>
              <span className="text-emerald-700 hidden sm:inline font-semibold">Điểm Xanh</span>
            </div>
          </button>

          {/* Quick Demo Button on desktop */}
          <button
            onClick={() => handleItemClick('game')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 border border-amber-500/80 rounded-xl shadow-xs transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer ring-1 ring-amber-400/50"
          >
            <span>🎯 DEMO NHANH</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-sky-100/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (closes on item select) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-sky-200 px-4 pt-3 pb-5 mt-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-4 py-2.5 text-left text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'text-emerald-950 bg-sky-100 font-bold border border-sky-300'
                      : 'text-slate-700 hover:bg-sky-50 hover:text-sky-950'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Dự án Vibe Coding Lớp 10</span>
            <button
              onClick={() => handleItemClick('game')}
              className="px-3.5 py-1.5 text-xs font-extrabold text-stone-950 bg-amber-300 hover:bg-amber-400 border border-amber-400 rounded-xl shadow-2xs transition-colors cursor-pointer"
            >
              🎯 Demo Nhanh
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
