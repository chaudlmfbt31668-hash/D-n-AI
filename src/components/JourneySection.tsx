import React, { useState, useEffect, useRef } from 'react';
import {
  Package,
  Layers,
  Truck,
  RotateCw,
  Sparkles,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { WASTE_JOURNEYS } from '../data/wasteData';

export const JourneySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJourneyId, setSelectedJourneyId] = useState(WASTE_JOURNEYS[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback if already in view
    setIsVisible(true);

    return () => observer.disconnect();
  }, []);

  const timelineSteps = [
    {
      step: '01',
      title: 'Rác được phát sinh',
      description: 'Rác thải phát sinh từ các hoạt động học tập, ăn uống và sinh hoạt hàng ngày tại trường học cũng như gia đình.',
      icon: <Package className="w-5 h-5 text-emerald-700" />,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      step: '02',
      title: 'Phân loại tại nguồn',
      description: 'Người dùng chủ động chia rác thành các nhóm riêng biệt ngay khi vừa buông tay bỏ vào thùng chứa quy chuẩn.',
      icon: <Layers className="w-5 h-5 text-sky-700" />,
      color: 'bg-sky-100 text-sky-800 border-sky-300',
    },
    {
      step: '03',
      title: 'Thu gom',
      description: 'Lực lượng vệ sinh và đơn vị môi trường vận chuyển riêng từng luồng rác đã phân loại, bảo đảm không bị lẫn lộn.',
      icon: <Truck className="w-5 h-5 text-teal-700" />,
      color: 'bg-teal-100 text-teal-800 border-teal-300',
    },
    {
      step: '04',
      title: 'Tái chế hoặc xử lý phù hợp',
      description: 'Rác có khả năng tái chế được chuyển đến cơ sở tái chế phù hợp, rác hữu cơ được xử lý vi sinh thành phân bón, và rác còn lại được xử lý theo quy định.',
      icon: <RotateCw className="w-5 h-5 text-amber-700" />,
      color: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      step: '05',
      title: 'Tạo ra giá trị mới hoặc được xử lý an toàn',
      description: 'Vật liệu tái chế tạo ra giá trị mới, chất thải nguy hại và các loại rác khác được xử lý an toàn theo quy định, bảo vệ môi trường sống.',
      icon: <Sparkles className="w-5 h-5 text-emerald-700" />,
      color: 'bg-emerald-100 text-emerald-900 border-emerald-400',
    },
  ];

  const activeJourney = WASTE_JOURNEYS.find((j) => j.id === selectedJourneyId) || WASTE_JOURNEYS[0];

  return (
    <section id="journey" ref={sectionRef} className="py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header with sky-blue ambience */}
        <div className="text-center max-w-3xl mx-auto mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/70 to-teal-50/60 border border-sky-200/80 shadow-2xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-950 border border-teal-300 text-xs font-bold mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>CHU TRÌNH TUẦN HOÀN SINH THÁI</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            ♻️ HÀNH TRÌNH CỦA RÁC
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl mx-auto">
            Theo dõi con đường biến chuyển của rác thải từ khoảnh khắc phát sinh đến khi tái sinh thành nguồn tài nguyên mới.
          </p>
        </div>

        {/* 5-Step Visual Timeline */}
        <div className="relative py-4">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-sky-300 to-emerald-400" />

          {/* Timeline Steps List */}
          <div className="space-y-6 sm:space-y-8">
            {timelineSteps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col lg:flex-row items-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Left Content (Desktop Even steps) */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-10 lg:text-right' : 'lg:order-2 lg:pl-10 lg:text-left'} order-2 mt-3 lg:mt-0`}>
                    <div className="bg-white p-5 sm:p-6 rounded-3xl border border-stone-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-200 group">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-lg border ${item.color}`}>
                          {item.step}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="z-10 order-1 lg:order-none flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-emerald-400 shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-110">
                      {item.icon}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="lg:hidden w-0.5 h-6 bg-emerald-300 my-1 flex items-center justify-center">
                        <ArrowDown className="w-3 h-3 text-emerald-500" />
                      </div>
                    )}
                  </div>

                  {/* Empty Spacer on Desktop opposite side */}
                  <div className={`hidden lg:block w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Ending Callout */}
        <div className="mt-12 text-center">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-sm flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl mb-2">🌱</span>
            <p className="text-base sm:text-xl font-bold font-heading text-amber-300 max-w-2xl leading-relaxed">
              “Phân loại đúng ngay từ đầu giúp quá trình thu gom và xử lý rác hiệu quả hơn.”
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 max-w-lg">
              Chỉ mất 3 giây để đặt đúng chiếc thùng rác, nhưng bạn đã tiết kiệm hàng nghìn giờ công lao động và bảo vệ hàng triệu lít nước ngầm.
            </p>
          </div>
        </div>

        {/* Interactive Material Deep Dive (Preserved feature) */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Tìm hiểu chi tiết theo vật liệu
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                Khám phá chu trình tái sinh cụ thể
              </h2>
            </div>

            {/* Material Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {WASTE_JOURNEYS.map((journey) => {
                const isSelected = journey.id === selectedJourneyId;
                return (
                  <button
                    key={journey.id}
                    onClick={() => setSelectedJourneyId(journey.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-2xs'
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-emerald-50'
                    }`}
                  >
                    {journey.material}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected material card */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-5 sm:p-7 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading">
                  Vòng đời: {activeJourney.material}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                  {activeJourney.summary}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                💡 {activeJourney.impact}
              </div>
            </div>

            <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeJourney.steps.map((st) => (
                <div key={st.step} className="p-4 rounded-2xl bg-[#fafcf8] border border-stone-200 text-xs space-y-1.5">
                  <div className="font-extrabold text-emerald-800">
                    Bước 0{st.step} · {st.title}
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    {st.description}
                  </p>
                  <div className="text-[11px] text-stone-500 pt-1 border-t border-stone-200/60 font-medium">
                    {st.fact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
