import React from 'react';
import {
  Ban,
  RotateCcw,
  Trash2,
  PackageCheck,
  ShieldAlert,
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PageType } from '../types';

interface HabitsSectionProps {
  onNavigate?: (page: PageType) => void;
  ecoScore?: number;
  onUpdateEcoPoints?: (points: number) => void;
}

export const HabitsSection: React.FC<HabitsSectionProps> = ({ onNavigate }) => {
  // 5 Core Habit Cards
  const coreHabits = [
    {
      number: '01',
      title: 'Giảm sử dụng đồ dùng một lần (Refuse & Reduce)',
      description: 'Hạn chế tối đa ly nhựa, hộp xốp, ống hút và túi nilon khi mua đồ ăn sáng quanh cổng trường.',
      icon: <Ban className="w-6 h-6 text-emerald-700" />,
      color: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      tips: 'Chủ động nói: "Cô ơi cho con không lấy túi nilon và hộp xốp ạ!" khi mua bánh mì hoặc xôi.',
    },
    {
      number: '02',
      title: 'Tái sử dụng những vật dụng còn phù hợp (Reuse)',
      description: 'Luôn mang bình nước cá nhân, dùng hộp cơm riêng và tận dụng mặt giấy nháp còn trống để giải bài tập.',
      icon: <RotateCcw className="w-6 h-6 text-sky-700" />,
      color: 'bg-sky-50 text-sky-900 border-sky-200',
      tips: 'Dùng hết các trang giấy còn trống của tập vở năm học trước làm giấy nháp Toán, Lý, Hóa.',
    },
    {
      number: '03',
      title: 'Phân loại rác ngay tại nơi phát sinh (Sort)',
      description: 'Chủ động bỏ rác đúng thùng màu quy chuẩn tại phòng học và gia đình trước khi buông tay.',
      icon: <Trash2 className="w-6 h-6 text-teal-700" />,
      color: 'bg-teal-50 text-teal-900 border-teal-200',
      tips: 'Để ráo nước vỏ hoa quả, trút hết nước ngọt trước khi bỏ vào thùng.',
    },
    {
      number: '04',
      title: 'Đưa vật liệu có khả năng tái chế đến hệ thống phù hợp (Recycle)',
      description: 'Làm sạch, bóp dẹp chai nhựa, lon nhôm và tập kết giấy vụn để chuyển giao đến các cơ sở tái chế.',
      icon: <PackageCheck className="w-6 h-6 text-blue-700" />,
      color: 'bg-blue-50 text-blue-900 border-blue-200',
      tips: 'Uống cạn, mở 4 tai và bóp dẹp vỏ hộp sữa giấy học đường để tiết kiệm diện tích thùng rác.',
    },
    {
      number: '05',
      title: 'Thu gom riêng các loại rác cần xử lý đặc biệt (Special Care)',
      description: 'Lưu giữ riêng pin cũ, bóng đèn huỳnh quang và rác điện tử trong hộp kín gửi điểm thu hồi chuyên trách.',
      icon: <ShieldAlert className="w-6 h-6 text-amber-700" />,
      color: 'bg-amber-50 text-amber-900 border-amber-200',
      tips: 'Dán băng dính 2 đầu cực pin cũ và nộp tại điểm thu gom pin của trường, tuyệt đối không vứt chung rác sinh hoạt.',
    },
  ];

  return (
    <section id="habits" className="py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header with light sky-blue ambience */}
        <div className="text-center max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/70 to-emerald-50/60 border border-sky-200/80 shadow-2xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>LỐI SỐNG BỀN VỮNG HỌC ĐƯỜNG</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            🌎 THÓI QUEN XANH MỖI NGÀY
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl mx-auto">
            Hành động xanh bắt đầu từ những thói quen đơn giản, dễ thực hiện ngay trong không gian học đường và gia đình theo nguyên tắc 5R.
          </p>

          {onNavigate && (
            <div className="mt-5 pt-4 border-t border-sky-100 flex justify-center">
              <button
                onClick={() => onNavigate('handbook')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Mở Sổ tay thực hành xanh để tích điểm ngay →</span>
              </button>
            </div>
          )}
        </div>

        {/* 5 Core Habit Cards - Clean, without confusing unclickable buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreHabits.map((item) => (
            <div
              key={item.number}
              className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg border ${item.color}`}>
                    {item.number}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading leading-tight">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <div className="text-xs font-medium text-emerald-800 bg-emerald-50/80 border border-emerald-200/60 p-2.5 rounded-xl leading-relaxed">
                  <span className="font-bold">Mẹo thực hiện: </span>
                  <span>{item.tips}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action for Handbook Page */}
        {onNavigate && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-sky-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                  Sổ tay Thực hành Xanh Học đường
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Tích chọn 6 việc xanh bạn đã hoàn thành hôm nay để tích lũy Điểm Xanh vào hồ sơ.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('handbook')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all cursor-pointer shrink-0"
            >
              <span>Vào trang Sổ tay thực hành</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Soft, Light Pastel Environmental Message Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-sky-50 to-teal-50 border border-emerald-200/80 text-slate-800 text-center shadow-2xs">
          <span className="text-2xl mb-1.5 inline-block">🌿</span>
          <h2 className="text-lg sm:text-xl font-extrabold font-heading text-emerald-900 tracking-tight">
            “Mỗi hành động nhỏ đều góp phần tạo nên thay đổi lớn.”
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto leading-relaxed">
            Từ một chiếc bình nước cá nhân đến việc từ chối chiếc túi nilon bánh mì, thế hệ học sinh hôm nay đang cùng nhau kiến tạo một hành tinh xanh ngát cho ngày mai.
          </p>
        </div>
      </div>
    </section>
  );
};
