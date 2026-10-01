import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Leaf,
  FileText,
  Zap,
  Trash2,
  Search,
  Gamepad2,
  RotateCw,
  HeartHandshake,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { PageType } from '../types';

interface HeroSectionProps {
  onExploreSorting: () => void;
  onPlayGame: () => void;
  onLookup?: () => void;
  onNavigate?: (page: PageType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSorting,
  onPlayGame,
  onNavigate,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>('bins');

  const interactiveVisuals = [
    {
      id: 'bottle',
      title: 'Chai nhựa PET',
      category: 'Có khả năng tái chế',
      badgeColor: 'text-sky-800 bg-sky-50 border-sky-200',
      description: 'Súc sạch, bóp dẹp và bỏ vào thùng phù hợp để đưa vào quy trình tái chế khi có hệ thống thu gom.',
      icon: (
        <svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2h8" />
          <path d="M9 2v3a3 3 0 0 1-1.5 2.6L7 8v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8l-.5-.4A3 3 0 0 1 15 5V2" />
          <line x1="7" y1="13" x2="17" y2="13" />
        </svg>
      ),
    },
    {
      id: 'paper',
      title: 'Giấy & Sách vở cũ',
      category: 'Có khả năng tái chế',
      badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
      description: 'Giấy kiểm tra, sách báo cũ tập kết khô ráo để tái chế bột giấy khi có hệ thống thu gom phù hợp.',
      icon: <FileText className="w-6 h-6 text-blue-600" />,
    },
    {
      id: 'organic',
      title: 'Rác hữu cơ & Hoa quả',
      category: 'Rác Hữu Cơ',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      description: 'Vỏ chuối, cuống rau, bã trà dễ phân hủy ủ thành phân compost tự nhiên cho vườn cây lớp học.',
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: 'battery',
      title: 'Pin tiểu cũ',
      category: 'Rác Nguy Hại',
      badgeColor: 'text-amber-900 bg-amber-50 border-amber-300',
      description: 'Chứa thành phần độc hại. Không tự ý xử lý tại nhà, cần thu gom riêng nộp điểm tiếp nhận phù hợp.',
      icon: <Zap className="w-6 h-6 text-amber-600" />,
    },
    {
      id: 'bins',
      title: 'Thùng rác phân loại',
      category: 'Quy Chuẩn Màu Sắc',
      badgeColor: 'text-teal-900 bg-teal-50 border-teal-200',
      description: 'Phân loại theo màu chuẩn: Xanh lá (Hữu cơ), Xanh dương (Tái chế), Xám (Rác còn lại).',
      icon: <Trash2 className="w-6 h-6 text-teal-600" />,
    },
  ];

  // 6 Main portal modules linking directly to the respective separate pages
  const portalModules = [
    {
      id: 'sorting' as PageType,
      title: 'Phân loại rác',
      subtitle: 'Quy chuẩn 4 nhóm rác',
      description: 'Khám phá màu sắc thùng rác, định nghĩa chuẩn xác và nguyên tắc 3S học đường.',
      icon: <Trash2 className="w-6 h-6 text-sky-700" />,
      badge: 'Kiến thức chuẩn',
      bgGradient: 'from-sky-50 via-white to-sky-50/60',
      borderColor: 'border-sky-200/90 hover:border-sky-400',
      accentColor: 'text-sky-700',
      buttonBg: 'bg-sky-600 hover:bg-sky-700',
    },
    {
      id: 'game' as PageType,
      title: 'Mini Game 15 câu',
      subtitle: 'Thử thách & Tích điểm',
      description: 'Kiểm tra độ chuẩn xác phân loại qua 15 câu hỏi ngẫu nhiên, nhận ngay +10 Điểm Xanh mỗi câu đúng.',
      icon: <Gamepad2 className="w-6 h-6 text-amber-700" />,
      badge: 'Tương tác 100%',
      bgGradient: 'from-amber-50 via-white to-amber-50/60',
      borderColor: 'border-amber-200/90 hover:border-amber-400',
      accentColor: 'text-amber-800',
      buttonBg: 'bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold',
    },
    {
      id: 'lookup' as PageType,
      title: 'Rác này đi đâu?',
      subtitle: 'Tra cứu nhanh 25+ vật phẩm',
      description: 'Tìm kiếm vật phẩm trên tay (chai nhựa, pin, vỏ bánh, vỏ chuối...) với hướng dẫn xử lý cụ thể.',
      icon: <Search className="w-6 h-6 text-emerald-700" />,
      badge: 'Công cụ tra cứu',
      bgGradient: 'from-emerald-50 via-white to-emerald-50/60',
      borderColor: 'border-emerald-200/90 hover:border-emerald-400',
      accentColor: 'text-emerald-800',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
    },
    {
      id: 'journey' as PageType,
      title: 'Hành trình của rác',
      subtitle: 'Vòng đời tái sinh tuần hoàn',
      description: 'Theo dõi 5 bước từ lúc bạn bỏ vào thùng rác cho đến khi được xử lý an toàn hoặc trở thành sản phẩm mới.',
      icon: <RotateCw className="w-6 h-6 text-teal-700" />,
      badge: 'Mô phỏng 3D',
      bgGradient: 'from-teal-50 via-white to-teal-50/60',
      borderColor: 'border-teal-200/90 hover:border-teal-400',
      accentColor: 'text-teal-800',
      buttonBg: 'bg-teal-600 hover:bg-teal-700',
    },
    {
      id: 'habits' as PageType,
      title: 'Thói quen xanh 5R',
      subtitle: '5 Nguyên tắc cốt lõi',
      description: 'Refuse, Reduce, Reuse, Recycle, Special Care – Tìm hiểu các nguyên tắc bảo vệ môi trường học đường.',
      icon: <HeartHandshake className="w-6 h-6 text-rose-700" />,
      badge: '5 Nguyên tắc',
      bgGradient: 'from-rose-50 via-white to-rose-50/60',
      borderColor: 'border-rose-200/90 hover:border-rose-400',
      accentColor: 'text-rose-800',
      buttonBg: 'bg-rose-600 hover:bg-rose-700',
    },
    {
      id: 'handbook' as PageType,
      title: 'Sổ tay thực hành xanh',
      subtitle: 'Checklist tích Điểm Xanh',
      description: 'Đánh dấu các việc xanh bạn đã thực hiện trong ngày, lưu tiến độ và nâng cấp điểm số cá nhân.',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-700" />,
      badge: 'Tương tác & Điểm',
      bgGradient: 'from-emerald-50 via-white to-emerald-50/60',
      borderColor: 'border-emerald-200/90 hover:border-emerald-400',
      accentColor: 'text-emerald-800',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
    },
    {
      id: 'about' as PageType,
      title: 'Về dự án GreenSort',
      subtitle: 'Tin học 10 · Vibe Coding',
      description: 'Ý tưởng, công cụ phát triển bằng AI, mục tiêu giáo dục môi trường học đường và cam kết an toàn.',
      icon: <Lightbulb className="w-6 h-6 text-indigo-700" />,
      badge: 'Dự án THPT',
      bgGradient: 'from-indigo-50 via-white to-indigo-50/60',
      borderColor: 'border-indigo-200/90 hover:border-indigo-400',
      accentColor: 'text-indigo-800',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-700',
    },
  ];

  return (
    <div className="py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Main Hero Header Card with Light Sky-Blue ambience */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/80 to-emerald-50/70 border border-sky-200/90 shadow-sm p-6 sm:p-12 text-center">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-sky-300/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-emerald-300/25 rounded-full blur-2xl pointer-events-none" />

          {/* Top Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-300/80 text-sky-950 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-2xs mb-4">
            <span className="text-base select-none">🌱</span>
            <span>GREENSORT · NỀN TẢNG MÔI TRƯỜNG THPT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            “PHÂN LOẠI ĐÚNG –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 underline decoration-amber-400 decoration-4 underline-offset-8">
              SỐNG XANH
            </span>”
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto mt-4">
            Cùng tìm hiểu cách phân loại, tái chế và xử lý rác đúng cách thông qua các chuyên mục trực quan và tính năng tương tác sinh động.
          </p>

          {/* Action buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* 🎯 DEMO NHANH Button */}
            <button
              onClick={onPlayGame}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-500 border border-amber-500/90 active:scale-95 text-stone-950 font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ring-2 ring-amber-300/70"
            >
              <span className="text-lg">🎯</span>
              <span>DEMO NHANH</span>
            </button>

            <button
              onClick={onExploreSorting}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>BẮT ĐẦU PHÂN LOẠI</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onNavigate && (
              <button
                onClick={() => onNavigate('lookup')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-sky-50 text-sky-900 border border-sky-300/80 active:scale-95 font-bold text-sm sm:text-base shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Search className="w-4 h-4 text-sky-600" />
                <span>TRA CỨU RÁC</span>
              </button>
            )}
          </div>
        </section>

        {/* 5 Interactive Visual Models Showcase */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-sky-200/80 shadow-xs p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-sky-100">
            <div>
              <div className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Mô hình trực quan học đường
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 font-heading">
                5 Yếu tố môi trường quan trọng bạn cần nhận biết
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-medium bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200">
              Nhấp vào từng món để xem hướng dẫn nhanh
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {interactiveVisuals.map((item) => {
              const isSelected = activeItem === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col items-center text-center ${
                    isSelected
                      ? 'bg-sky-50/90 border-sky-500 shadow-sm ring-2 ring-sky-300 scale-[1.02]'
                      : 'bg-white/80 border-slate-200/90 hover:border-sky-300 hover:bg-sky-50/50 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-3 shadow-2xs transition-transform duration-200">
                    {item.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-heading leading-tight">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-semibold mt-1.5 px-2 py-0.5 rounded-md border ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>
              );
            })}
          </div>

          {activeItem && (() => {
            const current = interactiveVisuals.find((v) => v.id === activeItem);
            if (!current) return null;
            return (
              <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-emerald-50/50 to-white border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all animate-in fade-in duration-200">
                <div className="flex items-center gap-3.5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-sky-200 shadow-2xs">
                    {current.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {current.title} · <span className="font-semibold text-sky-700">{current.category}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {current.description}
                    </p>
                  </div>
                </div>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('sorting')}
                    className="shrink-0 text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-sky-200 shadow-2xs hover:shadow-xs"
                  >
                    <span>Xem chi tiết ở mục Phân loại</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })()}
        </section>

        {/* Portal Module Showcase: 6 Separate Pages Hub */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>CHUYÊN MỤC HỌC TẬP</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Khám phá GreenSort theo từng trang riêng biệt
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
              Mỗi mục được phân bổ khoa học để bạn dễ dàng tập trung tiếp thu kiến thức và trải nghiệm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portalModules.map((module) => (
              <div
                key={module.id}
                className={`rounded-3xl bg-gradient-to-b ${module.bgGradient} border ${module.borderColor} p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-200">
                      {module.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 text-slate-700 shadow-2xs">
                      {module.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-sky-950 transition-colors">
                    {module.title}
                  </h3>
                  <div className={`text-xs font-semibold ${module.accentColor} mt-0.5`}>
                    {module.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate(module.id);
                      else if (module.id === 'sorting') onExploreSorting();
                      else if (module.id === 'game') onPlayGame();
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs hover:shadow-sm ${module.buttonBg}`}
                  >
                    <span>Vào xem trang này</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why GreenSort Matters - 3 Feature highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-3xl bg-white/80 border border-emerald-200/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-100/90 text-emerald-800 flex items-center justify-center font-bold text-lg mb-3">
                📚
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Học qua trải nghiệm tương tác
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Không đọc tài liệu khô khan: bạn được thực hành phân loại đồ vật, nhận phản hồi tức thì và tích lũy Điểm Xanh.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Phương pháp Vibe Coding</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/80 border border-sky-200/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-sky-100/90 text-sky-800 flex items-center justify-center font-bold text-lg mb-3">
                🔍
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Tra cứu nhanh vật dụng trường học
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Tìm kiếm lập tức chai trà sữa, vỏ snack bim bim, pin chuột hay hộp xốp để biết đúng thùng cần bỏ.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-100 flex items-center gap-1.5 text-xs font-bold text-sky-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Dữ liệu thực tế 25+ món</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/80 border border-amber-200/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-100/90 text-amber-800 flex items-center justify-center font-bold text-lg mb-3">
                🛡️
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Giáo dục an toàn môi trường
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Khuyến cáo học sinh thu gom riêng pin cũ và rác điện tử, bảo vệ an toàn cho bản thân và người thu gom rác.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-100 flex items-center gap-1.5 text-xs font-bold text-amber-700">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Tuân thủ Luật BVMT 2020</span>
            </div>
          </div>
        </section>

        {/* Final Environmental Slogan Banner (Soft Light Pastel Palette) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-sky-50 to-teal-50 text-slate-800 shadow-2xs text-center border border-emerald-200/90">
          <span className="text-2xl mb-1.5 inline-block">🌱</span>
          <h2 className="text-lg sm:text-2xl font-extrabold font-heading text-emerald-900 tracking-tight leading-snug">
            “Phân loại đúng hôm nay – Xây dựng tương lai xanh ngày mai.”
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
            Hành động nhỏ của bạn khi đặt đúng món rác vào đúng thùng sẽ tạo nên thay đổi to lớn cho trường học và Trái Đất.
          </p>
        </section>

      </div>
    </div>
  );
};
