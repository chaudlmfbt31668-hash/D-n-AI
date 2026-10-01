import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Square,
  RefreshCw,
  Trophy,
  Sparkles,
  BookOpen,
  ArrowRight,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { GREEN_HABITS } from '../data/wasteData';
import { PageType } from '../types';

interface HandbookSectionProps {
  onUpdateEcoPoints: (points: number) => void;
  onNavigate?: (page: PageType) => void;
  ecoScore?: number;
}

export const HandbookSection: React.FC<HandbookSectionProps> = ({
  onUpdateEcoPoints,
  onNavigate,
  ecoScore = 50,
}) => {
  const [completedHabits, setCompletedHabits] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('greensort_habits');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('greensort_habits', JSON.stringify(completedHabits));
    } catch (e) {
      console.error(e);
    }
  }, [completedHabits]);

  const toggleHabit = (id: string, points: number) => {
    if (completedHabits.includes(id)) {
      setCompletedHabits((prev) => prev.filter((item) => item !== id));
      onUpdateEcoPoints(-points);
    } else {
      setCompletedHabits((prev) => [...prev, id]);
      onUpdateEcoPoints(points);
    }
  };

  const handleReset = () => {
    const totalCurrent = completedHabits.reduce((sum, id) => {
      const h = GREEN_HABITS.find((item) => item.id === id);
      return sum + (h ? h.points : 0);
    }, 0);
    onUpdateEcoPoints(-totalCurrent);
    setCompletedHabits([]);
  };

  const earnedPoints = completedHabits.reduce((acc, id) => {
    const habit = GREEN_HABITS.find((h) => h.id === id);
    return acc + (habit ? habit.points : 0);
  }, 0);

  const totalPossiblePoints = GREEN_HABITS.reduce((acc, h) => acc + h.points, 0);
  const progressPercent = Math.round((completedHabits.length / GREEN_HABITS.length) * 100);

  return (
    <section id="handbook" className="py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Title Header with light sky-blue ambience */}
        <div className="text-center max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/70 to-emerald-50/60 border border-sky-200/80 shadow-2xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold mb-2.5 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>SỔ TAY THỰC HÀNH HỌC ĐƯỜNG</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            📖 SỔ TAY THỰC HÀNH XANH
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl mx-auto">
            Đánh dấu những hành động xanh bạn đã thực hiện trong ngày để ghi nhận Điểm Xanh vào hồ sơ cá nhân và xây dựng nếp sống văn minh học đường.
          </p>
        </div>

        {/* Progress & Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/90 border border-sky-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
              <Trophy className="w-6 h-6 text-amber-500 fill-amber-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">Hồ sơ cá nhân</div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                {ecoScore} <span className="text-xs font-bold text-sky-700">Điểm Xanh</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 border border-emerald-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">Điểm đạt hôm nay</div>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-700 font-heading">
                +{earnedPoints} <span className="text-xs font-bold text-slate-500">/ {totalPossiblePoints} đ</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 border border-amber-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              <CheckCircle2 className="w-6 h-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Đã hoàn thành</span>
                <span className="font-bold text-amber-900">{completedHabits.length}/{GREEN_HABITS.length} việc</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Checklist Container */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-sky-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-100">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                Danh sách hành động xanh cần thực hiện
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Nhấp trực tiếp vào từng ô để tích dấu hoàn thành.
              </p>
            </div>

            {completedHabits.length > 0 && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Đặt lại hôm nay</span>
              </button>
            )}
          </div>

          {/* Habit Checkboxes Grid */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {GREEN_HABITS.map((habit) => {
              const isDone = completedHabits.includes(habit.id);
              return (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id, habit.points)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 select-none ${
                    isDone
                      ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 shadow-2xs ring-1 ring-emerald-200'
                      : 'bg-white border-slate-200/90 text-slate-800 hover:border-sky-300 hover:bg-sky-50/30'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-0.5 text-emerald-700 shrink-0 focus:outline-none"
                    aria-label={`Toggle habit ${habit.title}`}
                  >
                    {isDone ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-300" />
                    )}
                  </button>

                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-xs sm:text-sm font-bold leading-snug ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {habit.title}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                        +{habit.points} đ
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {habit.description}
                    </p>

                    {habit.schoolContext && (
                      <div className="text-[11px] font-medium text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-lg">
                        💡 {habit.schoolContext}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
            <span>Dữ liệu tiến độ được tự động lưu trên trình duyệt của bạn (LocalStorage).</span>
            {onNavigate && (
              <button
                onClick={() => onNavigate('habits')}
                className="text-sky-700 hover:text-sky-900 font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>Xem 5 nguyên tắc cốt lõi tại Thói quen xanh</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Soft, Light Pastel Environmental Message Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-sky-50 to-teal-50 border border-emerald-200/90 text-slate-800 text-center shadow-2xs">
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
