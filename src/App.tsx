/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SortingGuideSection } from './components/SortingGuideSection';
import { MiniGameSection } from './components/MiniGameSection';
import { LookupSection } from './components/LookupSection';
import { JourneySection } from './components/JourneySection';
import { HabitsSection } from './components/HabitsSection';
import { HandbookSection } from './components/HandbookSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { PageType } from './types';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const [ecoScore, setEcoScore] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('greensort_eco_score');
      return saved ? parseInt(saved, 10) : 50;
    } catch {
      return 50;
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('greensort_eco_score', ecoScore.toString());
    } catch (e) {
      console.error(e);
    }
  }, [ecoScore]);

  // Navigate to a separate page and smoothly scroll to the top
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEarnEcoPoints = (points: number) => {
    setEcoScore((prev) => Math.max(0, prev + points));
    if (points > 0) {
      showToast(`+${points} Điểm Xanh đã được cộng vào hồ sơ!`);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const getPageTitle = (page: PageType): string => {
    switch (page) {
      case 'sorting':
        return 'Phân loại rác';
      case 'game':
        return 'Mini Game';
      case 'lookup':
        return 'Rác này đi đâu?';
      case 'journey':
        return 'Hành trình của rác';
      case 'habits':
        return 'Thói quen 5R';
      case 'handbook':
        return 'Sổ tay thực hành';
      case 'about':
        return 'Về dự án';
      default:
        return 'Trang chủ';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-800 selection:bg-sky-200 selection:text-sky-950">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-2xl shadow-xl border border-sky-400/40 animate-in fade-in slide-in-from-bottom-4 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Header */}
      <Navbar
        ecoScore={ecoScore}
        activeSection={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Breadcrumb Bar for Separate Pages */}
      {currentPage !== 'home' && (
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-5 pb-1">
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-1.5 text-sky-700 hover:text-sky-900 font-bold transition-colors cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Trang chủ</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="font-extrabold text-slate-800">
                {getPageTitle(currentPage)}
              </span>
            </div>

            <button
              onClick={() => handleNavigate('home')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100/90 text-sky-800 border border-sky-200 text-xs font-bold transition-all cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Về Trang chủ</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content: Render ONLY the current page */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HeroSection
            onExploreSorting={() => handleNavigate('sorting')}
            onPlayGame={() => handleNavigate('game')}
            onLookup={() => handleNavigate('lookup')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'sorting' && (
          <SortingGuideSection onNavigate={handleNavigate} />
        )}

        {currentPage === 'game' && (
          <MiniGameSection
            onEarnEcoPoints={handleEarnEcoPoints}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'lookup' && <LookupSection />}

        {currentPage === 'journey' && <JourneySection />}

        {currentPage === 'habits' && (
          <HabitsSection onNavigate={handleNavigate} />
        )}

        {currentPage === 'handbook' && (
          <HandbookSection
            ecoScore={ecoScore}
            onUpdateEcoPoints={handleEarnEcoPoints}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && <AboutSection />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
