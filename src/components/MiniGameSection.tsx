import React, { useState } from 'react';
import { GAME_QUESTIONS } from '../data/wasteData';
import { WasteCategoryType, GameQuestion, PageType } from '../types';
import {
  Trophy,
  RotateCcw,
  CheckCircle,
  XCircle,
  ArrowRight,
  HelpCircle,
  Sparkles,
  BookOpen,
  Target,
  Percent,
  CheckSquare
} from 'lucide-react';

interface MiniGameSectionProps {
  onEarnEcoPoints: (points: number) => void;
  onNavigate?: (page: PageType) => void;
}

interface AnswerOption {
  category: WasteCategoryType;
  label: string;
  emoji: string;
  themeStyle: string;
  hoverStyle: string;
}

export const MiniGameSection: React.FC<MiniGameSectionProps> = ({
  onEarnEcoPoints,
  onNavigate,
}) => {
  // Fisher-Yates shuffle to guarantee non-repeating questions per game session
  const shuffleQuestions = (): GameQuestion[] => {
    const list = [...GAME_QUESTIONS];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    // Take 15 unique questions for the session
    return list.slice(0, 15);
  };

  const [sessionQuestions, setSessionQuestions] = useState<GameQuestion[]>(() => shuffleQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<WasteCategoryType | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [pointsClaimed, setPointsClaimed] = useState(false);

  const currentItem = sessionQuestions[currentIndex] || sessionQuestions[0];
  const totalQuestions = sessionQuestions.length;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const answerOptions: AnswerOption[] = [
    {
      category: 'recyclable',
      label: 'Tái chế',
      emoji: '♻️',
      themeStyle: 'border-sky-300 bg-sky-50 text-sky-900',
      hoverStyle: 'hover:bg-sky-100 hover:border-sky-400',
    },
    {
      category: 'organic',
      label: 'Hữu cơ',
      emoji: '🍃',
      themeStyle: 'border-emerald-300 bg-emerald-50 text-emerald-900',
      hoverStyle: 'hover:bg-emerald-100 hover:border-emerald-400',
    },
    {
      category: 'inorganic',
      label: 'Rác còn lại',
      emoji: '🗑️',
      themeStyle: 'border-stone-300 bg-stone-100 text-stone-900',
      hoverStyle: 'hover:bg-stone-200 hover:border-stone-400',
    },
    {
      category: 'hazardous',
      label: 'Rác nguy hại',
      emoji: '⚠️',
      themeStyle: 'border-amber-300 bg-amber-50 text-amber-950',
      hoverStyle: 'hover:bg-amber-100 hover:border-amber-400',
    },
  ];

  const handleSelectAnswer = (category: WasteCategoryType) => {
    // Prevent multiple submissions or score duplication
    if (isAnswered) return;

    setSelectedCategory(category);
    setIsAnswered(true);

    const isCorrect = category === currentItem.category;
    if (isCorrect) {
      // Exactly +10 points for correct answer
      setScore((prev) => prev + 10);
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!isAnswered) return;
    if (currentIndex + 1 < sessionQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedCategory(null);
      setIsAnswered(false);
    } else {
      setIsGameOver(true);
    }
  };

  // Clean reset: Resets score, questions, current index, and answer status
  const handleRestartGame = () => {
    setScore(0);
    setCorrectCount(0);
    setCurrentIndex(0);
    setSelectedCategory(null);
    setIsAnswered(false);
    setIsGameOver(false);
    setPointsClaimed(false);
    setSessionQuestions(shuffleQuestions());
  };

  const handleClaimPoints = () => {
    if (!pointsClaimed && score > 0) {
      onEarnEcoPoints(score);
      setPointsClaimed(true);
    }
  };

  const handleLearnMore = () => {
    if (onNavigate) {
      onNavigate('sorting');
    } else {
      const el = document.getElementById('sorting');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Encouraging feedback without player rankings
  const getEncouragementMessage = (acc: number) => {
    if (acc >= 80) {
      return 'Bạn đã có nền tảng tốt, hãy tiếp tục tìm hiểu thêm!';
    }
    if (acc >= 50) {
      return 'Bạn đã nắm được những kiến thức cơ bản về phân loại rác!';
    }
    return 'Hãy thử lại để củng cố kiến thức!';
  };

  return (
    <section id="game" className="py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
      {/* Game Title & Header */}
      <div className="text-center mb-8 p-6 rounded-3xl bg-gradient-to-br from-white/90 via-sky-50/70 to-amber-50/60 border border-sky-200/80 shadow-2xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold mb-2 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>MINI GAME TƯƠNG TÁC HỌC ĐƯỜNG</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
          🎮 RÁC VỀ ĐÚNG NHÀ
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
          Mục tiêu: Đưa từng món rác vào đúng 1 trong 4 nhóm: <strong>Tái chế</strong>, <strong>Hữu cơ</strong>, <strong>Rác còn lại</strong> hoặc <strong>Rác nguy hại</strong>.
        </p>
      </div>

      {/* Main Game Card */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-sky-200 shadow-md p-6 sm:p-8 relative overflow-hidden">
        {!isGameOver ? (
          <div>
            {/* Top Stat Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-100 text-xs sm:text-sm">
              <div className="font-semibold text-stone-500">
                Câu hỏi: <span className="font-extrabold text-emerald-800 text-sm sm:text-base">{currentIndex + 1}</span> / {sessionQuestions.length}
              </div>

              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl font-bold text-emerald-900 shadow-2xs">
                <Trophy className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>Điểm: {score}</span>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="w-full bg-stone-100 h-2 rounded-full mt-4 overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }}
              />
            </div>

            {/* 1. Hiển thị vật phẩm */}
            <div className="my-6 sm:my-8 text-center bg-[#fafcf8] border border-stone-200/90 rounded-2xl p-6 sm:p-8">
              <div className="text-6xl sm:text-7xl mb-3 select-none transition-transform hover:scale-110 duration-200">
                {currentItem.emoji}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                Vật phẩm cần xử lý:
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-heading">
                {currentItem.name}
              </h2>

              {/* 2. Hiển thị câu hỏi */}
              <div className="mt-3 pt-3 border-t border-stone-200/50 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-800">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>“Món rác này nên được phân loại thế nào?”</span>
              </div>
            </div>

            {/* 3. Hiển thị 4 nút trả lời */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {answerOptions.map((opt) => {
                const isSelected = selectedCategory === opt.category;
                const isCorrect = opt.category === currentItem.category;

                let stateClasses = `${opt.themeStyle} ${opt.hoverStyle}`;

                if (isAnswered) {
                  if (isCorrect) {
                    stateClasses = 'bg-emerald-600 border-emerald-700 text-white font-bold ring-2 ring-emerald-300 shadow-sm';
                  } else if (isSelected) {
                    stateClasses = 'bg-rose-50 border-rose-400 text-rose-800 line-through opacity-80';
                  } else {
                    stateClasses = 'opacity-40 border-stone-200 bg-stone-50 text-stone-400';
                  }
                }

                return (
                  <button
                    key={opt.category}
                    disabled={isAnswered}
                    onClick={() => handleSelectAnswer(opt.category)}
                    className={`p-4 sm:p-5 rounded-2xl border-2 font-heading transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer select-none active:scale-95 disabled:cursor-not-allowed ${stateClasses}`}
                  >
                    <span className="text-2xl sm:text-3xl mb-1">{opt.emoji}</span>
                    <span className="text-sm sm:text-base font-bold">{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 5. Sau khi chọn: Báo đúng / chưa đúng & hiển thị giải thích */}
            {isAnswered && (
              <div
                className={`mt-6 p-5 rounded-2xl border transition-all animate-in fade-in duration-300 ${
                  selectedCategory === currentItem.category
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}
              >
                <div className="flex items-start gap-3">
                  {selectedCategory === currentItem.category ? (
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1.5 flex-1">
                    <div className="font-extrabold text-sm sm:text-base">
                      {selectedCategory === currentItem.category
                        ? 'Chính xác! (+10 điểm)'
                        : 'Chưa đúng rồi! (+0 điểm)'}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {currentItem.explanation}
                    </p>
                    <div className="text-xs font-semibold text-emerald-800 pt-1">
                      💡 {currentItem.tip}
                    </div>
                  </div>
                </div>

                {/* 6. Nút "Câu tiếp theo" */}
                <div className="mt-4 pt-3 border-t border-stone-200/60 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                  >
                    <span>
                      {currentIndex + 1 < sessionQuestions.length ? 'Câu tiếp theo' : 'Xem kết quả'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Màn hình kết quả sau khi hoàn thành Mini Game */
          <div className="text-center py-6 sm:py-8 space-y-6 animate-in fade-in zoom-in-95 duration-400 ease-out">
            {/* Header: 🎉 HOÀN THÀNH! */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-heading tracking-tight flex items-center justify-center gap-2">
                <span>🎉</span>
                <span>HOÀN THÀNH!</span>
              </h2>

              {/* Thông báo khuyến khích dựa trên kết quả (Không xếp hạng người chơi) */}
              <p className="text-sm sm:text-base font-medium text-emerald-800 max-w-md mx-auto mt-2 leading-relaxed">
                “{getEncouragementMessage(accuracy)}”
              </p>
            </div>

            {/* 4 Thẻ hiển thị số liệu kết quả */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto pt-2">
              {/* 1. Tổng điểm */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 text-center shadow-2xs">
                <div className="flex items-center justify-center text-emerald-700 mb-1">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Tổng điểm
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-900 font-heading mt-0.5">
                  {score}
                </div>
                <div className="text-[10px] text-stone-400">
                  tối đa {totalQuestions * 10} điểm
                </div>
              </div>

              {/* 2. Số câu đúng */}
              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/90 text-center shadow-2xs">
                <div className="flex items-center justify-center text-sky-700 mb-1">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Số câu đúng
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-900 font-heading mt-0.5">
                  {correctCount}
                </div>
                <div className="text-[10px] text-stone-400">
                  câu chính xác
                </div>
              </div>

              {/* 3. Tổng số câu */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center shadow-2xs">
                <div className="flex items-center justify-center text-stone-600 mb-1">
                  <Target className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Tổng số câu
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-800 font-heading mt-0.5">
                  {totalQuestions}
                </div>
                <div className="text-[10px] text-stone-400">
                  câu hỏi trong lượt
                </div>
              </div>

              {/* 4. Tỷ lệ trả lời đúng */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-center shadow-2xs">
                <div className="flex items-center justify-center text-amber-700 mb-1">
                  <Percent className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Tỷ lệ đúng
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-heading mt-0.5">
                  {accuracy}%
                </div>
                <div className="text-[10px] text-stone-400">
                  độ chuẩn xác
                </div>
              </div>
            </div>

            {/* Điểm xanh tích lũy (nếu có điểm) */}
            {score > 0 && !pointsClaimed && (
              <div className="pt-1">
                <button
                  onClick={handleClaimPoints}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 text-xs font-bold transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Lưu {score} Điểm Xanh vào hồ sơ cá nhân</span>
                </button>
              </div>
            )}

            {pointsClaimed && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                <span>Đã ghi nhận {score} Điểm Xanh vào tài khoản!</span>
              </div>
            )}

            {/* Hai nút hành động theo yêu cầu */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              {/* Nút 1: 🔄 Chơi lại (Reset toàn bộ điểm, câu hỏi, câu hiện tại, đáp án) */}
              <button
                onClick={handleRestartGame}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>🔄 Chơi lại</span>
              </button>

              {/* Nút 2: 📚 Tìm hiểu thêm (Điều hướng đến mục Phân loại rác) */}
              <button
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold text-sm shadow-2xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>📚 Tìm hiểu thêm</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Rules & Reminder Footer */}
      <div className="mt-6 text-center text-xs text-stone-500">
        💡 Mỗi câu trả lời đúng được cộng <strong>+10 điểm</strong>. Mỗi lượt chơi gồm 15 câu hỏi ngẫu nhiên không trùng lặp.
      </div>
    </div>
  </section>
);
};
