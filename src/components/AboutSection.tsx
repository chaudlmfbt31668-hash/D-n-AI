import React from 'react';
import { Target, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../data/wasteData';

export const AboutSection: React.FC = () => {
  const projectGoals = [
    'Nâng cao nhận thức về phân loại rác.',
    'Khuyến khích tái sử dụng và tái chế.',
    'Giúp học sinh học kiến thức môi trường thông qua trải nghiệm tương tác.',
  ];

  return (
    <section id="about" className="py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header with sky-blue ambience */}
        <div className="text-center mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/70 to-emerald-50/60 border border-sky-200/80 shadow-2xs">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-950 border border-amber-300/80 text-xs font-bold mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>DỰ ÁN HỌC ĐƯỜNG THPT</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight flex items-center justify-center gap-2">
            <span>💡</span>
            <span>VỀ DỰ ÁN</span>
          </h1>

          {/* Main Description */}
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            GreenSort là sản phẩm học tập được xây dựng bằng phương pháp Vibe Coding nhằm tìm hiểu vấn đề tái chế, phân loại và xử lý rác thải. Website kết hợp kiến thức môi trường với các tính năng tương tác để giúp người dùng học thông qua trải nghiệm.
          </p>

          {/* Two Highlight Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-emerald-300 shadow-2xs text-xs sm:text-sm font-bold text-emerald-950">
              <span className="text-base select-none">🧑🎓</span>
              <span>Sản phẩm học tập của học sinh lớp 10</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-sky-300 shadow-2xs text-xs sm:text-sm font-bold text-sky-950">
              <span className="text-base select-none">💻</span>
              <span>Công cụ phát triển: AI + Vibe Coding</span>
            </div>
          </div>
        </div>

        {/* Card: Mục tiêu của dự án */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xs p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-2xs">
              <Target className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                Mục tiêu của dự án
              </h2>
              <p className="text-xs text-stone-500">
                Định hướng giáo dục vì cộng đồng và phát triển bền vững
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {projectGoals.map((goal, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#fafcf8] border border-emerald-100/90 hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                    {goal}
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-bold text-emerald-700 tracking-wide">
                  Mục tiêu 0{idx + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Safety & Ethics Note */}
          <div className="mt-6 pt-4 border-t border-stone-100">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold">Cam kết an toàn môi trường học đường: </span>
                <span className="text-stone-700">
                  {PROJECT_INFO.safetyCommitment}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Ending Quote */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm font-heading italic text-stone-500">
            {PROJECT_INFO.quote} — {PROJECT_INFO.authorTeam}
          </p>
        </div>

        {/* Final Environmental Message Banner (Soft Light Pastel Palette) */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-sky-50 to-teal-50 text-slate-800 text-center shadow-2xs border border-emerald-200/90">
          <p className="text-lg sm:text-2xl font-extrabold font-heading text-emerald-900 tracking-tight leading-snug">
            🌱 Phân loại đúng hôm nay – Xây dựng tương lai xanh ngày mai.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
            Hành động nhỏ của bạn khi đặt đúng món rác vào đúng thùng sẽ tạo nên thay đổi to lớn cho trường học và Trái Đất.
          </p>
        </div>
      </div>
    </section>
  );
};
