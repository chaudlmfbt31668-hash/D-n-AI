import React from 'react';
import { Leaf, ArrowUp } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-emerald-950 text-white pt-12 pb-8 border-t border-emerald-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-emerald-800/80">
          {/* Logo & Slogan */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Leaf className="w-4 h-4 fill-emerald-100" />
              </div>
              <span className="text-xl font-bold font-heading text-white">GreenSort</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-amber-300 max-w-md mt-1">
              🌱 Phân loại đúng hôm nay – Xây dựng tương lai xanh ngày mai.
            </p>
            <p className="text-xs text-emerald-200/80 max-w-sm mt-0.5">
              Chung tay vì một học đường không rác thải nhựa. Phân loại chuẩn, hành động ngay!
            </p>
          </div>

          {/* Page Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-emerald-200">
            <button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Trang chủ
            </button>
            <button onClick={() => handleNav('sorting')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Phân loại rác
            </button>
            <button onClick={() => handleNav('game')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Mini Game
            </button>
            <button onClick={() => handleNav('lookup')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Rác này đi đâu?
            </button>
            <button onClick={() => handleNav('journey')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Hành trình rác
            </button>
            <button onClick={() => handleNav('habits')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Thói quen 5R
            </button>
            <button onClick={() => handleNav('handbook')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Sổ tay thực hành
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Về dự án
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white transition-all cursor-pointer self-end md:self-center"
            title="Lên đầu trang"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-400/80">
          <div>
            © 2024 - 2025 GreenSort · Dự án Tin học Lớp 10 (Vibe Coding).
          </div>
          <div>
            <span>Thiết kế vì hành tinh xanh với niềm đam mê công nghệ học đường</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
