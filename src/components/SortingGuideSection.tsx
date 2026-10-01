import React, { useState } from 'react';
import {
  ChevronDown,
  Sparkles,
  Info,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Droplets,
  Layers,
  Scissors
} from 'lucide-react';
import { PageType } from '../types';

interface SortingGuideSectionProps {
  onNavigate?: (page: PageType) => void;
}

interface SortingCardData {
  id: string;
  number: string;
  emoji: string;
  title: string;
  binColorName: string;
  theme: {
    border: string;
    hoverBorder: string;
    bg: string;
    expandedBg: string;
    badge: string;
    accent: string;
  };
  mainContent: string;
  examples: string[];
  treatment: string;
  note: string;
  isHazardous?: boolean;
}

export const SortingGuideSection: React.FC<SortingGuideSectionProps> = ({ onNavigate }) => {
  // By default, expand the first card for immediate rich context, allow user to toggle any card
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'recyclable': true,
    'organic': false,
    'residual': false,
    'hazardous': false,
  });

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const cardsData: SortingCardData[] = [
    {
      id: 'recyclable',
      number: '1',
      emoji: '♻️',
      title: 'RÁC CÓ KHẢ NĂNG TÁI CHẾ',
      binColorName: 'Thùng Xanh Dương / Trắng',
      theme: {
        border: 'border-sky-200',
        hoverBorder: 'hover:border-sky-400',
        bg: 'bg-white',
        expandedBg: 'bg-sky-50/40',
        badge: 'bg-sky-100 text-sky-800 border-sky-200',
        accent: 'text-sky-700',
      },
      mainContent: 'Những vật liệu phù hợp với hệ thống thu gom và tái chế có thể được thu gom riêng để đưa vào quy trình tái chế.',
      examples: [
        'chai nhựa',
        'giấy',
        'bìa carton',
        'lon kim loại',
        'một số loại thủy tinh',
      ],
      treatment: 'Thu gom riêng trong tình trạng khô ráo, sạch sẽ; nén hoặc bóp dẹp để tiết kiệm diện tích. Sau đó được vận chuyển về các cơ sở tái chế phù hợp để phân loại, làm sạch và chế biến thành nguyên liệu sản xuất mới.',
      note: 'Cần đổ sạch nước ngọt, gạt bỏ cặn dầu mỡ và tráng sơ trước khi bỏ vào thùng. Giấy hoặc bìa carton bị thấm dầu mỡ hoặc ướt bẩn sẽ mất giá trị tái chế.',
    },
    {
      id: 'organic',
      number: '2',
      emoji: '🍃',
      title: 'RÁC HỮU CƠ',
      binColorName: 'Thùng Xanh Lá',
      theme: {
        border: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-400',
        bg: 'bg-white',
        expandedBg: 'bg-emerald-50/40',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        accent: 'text-emerald-700',
      },
      mainContent: 'Rác có nguồn gốc hữu cơ có thể được xử lý bằng các phương pháp phù hợp.',
      examples: [
        'vỏ trái cây',
        'rau củ',
        'thức ăn thừa',
      ],
      treatment: 'Thu gom riêng ráo nước, không lẫn túi nilon; xử lý bằng các phương pháp phù hợp như ủ phân compost hiếu khí vi sinh tạo mùn dinh dưỡng bón cây, hoặc ủ kỵ khí sinh khí sinh học (Biogas) phục vụ năng lượng xanh.',
      note: 'Để ráo nước tối đa trước khi vứt giúp thùng rác trường học không bị rỉ nước và không bốc mùi hôi chua. Không lẫn túi nilon khó phân hủy vào nhóm rác hữu cơ.',
    },
    {
      id: 'residual',
      number: '3',
      emoji: '🗑️',
      title: 'RÁC CÒN LẠI',
      binColorName: 'Thùng Xám / Cam',
      theme: {
        border: 'border-stone-200',
        hoverBorder: 'hover:border-stone-400',
        bg: 'bg-white',
        expandedBg: 'bg-stone-50/60',
        badge: 'bg-stone-100 text-stone-700 border-stone-200',
        accent: 'text-stone-700',
      },
      mainContent: 'Những loại rác không thuộc nhóm tái chế, hữu cơ hoặc cần xử lý đặc biệt.',
      examples: [
        'túi nilon bẩn dính dầu mỡ',
        'hộp xốp đựng đồ ăn dùng một lần',
        'khẩu trang y tế, khăn giấy ướt, tã lót',
        'vỏ bao bì bánh kẹo tráng bạc màng ghép',
        'mảnh bát đĩa sành sứ vỡ',
      ],
      treatment: 'Tập kết gọn gàng vào bao chứa chắc chắn và chuyển đến các khu liên hợp xử lý tập trung để chôn lấp hợp vệ sinh hoặc thiêu đốt trong các nhà máy điện rác (Waste-to-Energy) hiện đại.',
      note: 'Không tự ý đốt rác ngoài trời vì sẽ sinh ra khói độc hại cho đường hô hấp. Đối với mảnh sành sứ vỡ, cần gói cẩn thận bằng giấy báo để đảm bảo an toàn cho nhân viên vệ sinh.',
    },
    {
      id: 'hazardous',
      number: '4',
      emoji: '⚠️',
      title: 'RÁC NGUY HẠI',
      binColorName: 'Thu Gom Riêng Biệt (Đỏ / Vàng)',
      theme: {
        border: 'border-amber-200',
        hoverBorder: 'hover:border-amber-400',
        bg: 'bg-white',
        expandedBg: 'bg-amber-50/40',
        badge: 'bg-amber-100 text-amber-900 border-amber-300',
        accent: 'text-amber-800',
      },
      mainContent: 'Cần được thu gom và xử lý theo quy định hoặc hệ thống tiếp nhận phù hợp.',
      examples: [
        'pin đã qua sử dụng',
        'một số thiết bị điện tử',
        'một số chất thải cần thu gom riêng',
      ],
      treatment: 'Thu gom riêng và bảo quản an toàn trong hộp đậy kín tại nhà hoặc lớp học; sau đó chuyển giao đến các điểm tiếp nhận pin học đường, trạm thu gom rác điện tử hoặc cơ sở được cấp phép theo quy định.',
      note: 'Tuyệt đối không tự xử lý, không tự ý tháo dỡ, không đập vỡ, không chôn lấp hay đốt pin và rác điện tử tại nhà. Hãy dán băng dính vào 2 đầu cực của viên pin cũ để chống chập mạch và gửi đến điểm thu gom an toàn.',
      isHazardous: true,
    },
  ];

  return (
    <section id="sorting" className="py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Page Title & Banner with sky-blue ambience */}
        <div className="text-center max-w-3xl mx-auto mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/70 to-emerald-50/70 border border-sky-200/80 shadow-xs relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-300/80 text-sky-950 text-xs sm:text-sm font-bold mb-3 shadow-2xs">
            <span className="text-base select-none">🌱</span>
            <span>HỆ THỐNG PHÂN LOẠI CHUẨN TẠI NGUỒN</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Phân Loại Rác Đúng Cách
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
            Nhấp vào từng nhóm rác bên dưới để xem ví dụ minh họa cụ thể, cách xử lý khái quát và các lưu ý an toàn quan trọng.
          </p>
          {onNavigate && (
            <div className="mt-4 pt-4 border-t border-sky-100 flex justify-center">
              <button
                onClick={() => onNavigate('game')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-all cursor-pointer shadow-xs hover:shadow hover:-translate-y-0.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-stone-900" />
                <span>Thử tài với Mini Game 15 câu ngay →</span>
              </button>
            </div>
          )}
        </div>

        {/* 4 Large Interactive Cards */}
        <div className="space-y-4 sm:space-y-5">
          {cardsData.map((card) => {
            const isExpanded = !!expandedCards[card.id];

            return (
              <div
                key={card.id}
                className={`rounded-3xl border transition-all duration-300 shadow-xs overflow-hidden ${
                  card.theme.border
                } ${card.theme.hoverBorder} ${
                  isExpanded ? `${card.theme.expandedBg} shadow-sm ring-1 ring-emerald-200` : card.theme.bg
                }`}
              >
                {/* Card Header clickable area */}
                <div
                  onClick={() => toggleCard(card.id)}
                  className="p-5 sm:p-7 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-emerald-50/20 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Emoji box */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-center text-2xl sm:text-3xl shrink-0 transition-transform duration-200 hover:scale-105">
                      {card.emoji}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-stone-400">
                          NHÓM {card.number}
                        </span>
                        <span className="text-stone-300">·</span>
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${card.theme.badge}`}>
                          {card.binColorName}
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 font-heading tracking-tight">
                        {card.title}
                      </h2>

                      {/* Main short content quote */}
                      <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
                        “{card.mainContent}”
                      </p>
                    </div>
                  </div>

                  {/* Toggle button */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <span className="text-xs font-semibold text-emerald-800 hidden sm:inline">
                      {isExpanded ? 'Thu gọn' : 'Xem chi tiết'}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-2xs transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-emerald-50 text-emerald-800' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Content with gentle slide-down animation */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-stone-200/60 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4">
                      {/* Left: Examples */}
                      <div className="md:col-span-4 bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Ví dụ thường gặp:</span>
                        </div>
                        <ul className="space-y-2">
                          {card.examples.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-xs sm:text-sm text-stone-800 flex items-center gap-2 capitalize"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Treatment & Note */}
                      <div className="md:col-span-8 space-y-4">
                        {/* Treatment */}
                        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                            <Info className="w-4 h-4 text-emerald-600" />
                            <span>Cách xử lý khái quát:</span>
                          </div>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                            {card.treatment}
                          </p>
                        </div>

                        {/* Note */}
                        <div
                          className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                            card.isHazardous
                              ? 'bg-amber-50 border-amber-300 text-amber-950'
                              : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            {card.isHazardous ? (
                              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            ) : (
                              <AlertTriangle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                            )}
                            <div>
                              <strong className="block mb-0.5">Lưu ý quan trọng:</strong>
                              <span>{card.note}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick 3S Guide Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-emerald-950 font-heading">
              Ghi nhớ Quy tắc 3S Học Đường
            </h3>
            <p className="text-xs text-stone-600 max-w-lg">
              <strong>SẠCH</strong> (trút bỏ nước thừa) · <strong>SƠ CHẾ</strong> (bóp dẹp tiết kiệm diện tích) · <strong>SẮP XẾP</strong> (bỏ đúng thùng).
            </p>
          </div>

          {onNavigate && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('lookup')}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                Tra cứu rác này đi đâu
              </button>
              <button
                onClick={() => onNavigate('game')}
                className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
              >
                <span>Chơi Mini Game</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
