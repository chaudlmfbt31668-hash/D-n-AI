import React, { useState, useMemo } from 'react';
import { WASTE_LOOKUP_DATABASE } from '../data/wasteData';
import { WasteCategoryType, WasteLookupItem } from '../types';
import {
  Search,
  Sparkles,
  Info,
  AlertCircle,
  HelpCircle,
  X,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

// Utility helper to normalize Vietnamese string (remove diacritics for approximate/fuzzy search)
function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

export const LookupSection: React.FC = () => {
  const [queryInput, setQueryInput] = useState('');
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<'all' | WasteCategoryType>('all');

  const suggestedKeywords = ['chai nhựa', 'pin', 'vỏ chuối', 'lon', 'giấy'];

  // Handle Search Submission (via button click or Enter key)
  const handlePerformSearch = (termToSearch?: string) => {
    const term = termToSearch !== undefined ? termToSearch : queryInput;
    setActiveSearchTerm(term.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handlePerformSearch();
    }
  };

  const handleSuggestionClick = (keyword: string) => {
    setQueryInput(keyword);
    handlePerformSearch(keyword);
  };

  const handleClear = () => {
    setQueryInput('');
    setActiveSearchTerm('');
    setSelectedCategoryFilter('all');
  };

  // Search logic: case-insensitive & approximate/diacritics-insensitive match
  const searchResults = useMemo(() => {
    const term = activeSearchTerm.trim();
    const normalizedTerm = removeVietnameseTones(term);

    return WASTE_LOOKUP_DATABASE.filter((item) => {
      // Category filter
      const matchCategory =
        selectedCategoryFilter === 'all' || item.category === selectedCategoryFilter;
      if (!matchCategory) return false;

      // If no search term, display items in current category
      if (!term) return true;

      const itemNameNorm = removeVietnameseTones(item.name);
      const itemDescNorm = removeVietnameseTones(item.description);
      const itemTreatmentNorm = removeVietnameseTones(item.treatment);
      const itemNoteNorm = removeVietnameseTones(item.note);
      const itemTagsNorm = (item.tags || []).map((t) => removeVietnameseTones(t));

      // Check substring match on normalized text (supports both "chai nhua" and "chai nhựa")
      const matchesName = itemNameNorm.includes(normalizedTerm);
      const matchesDesc = itemDescNorm.includes(normalizedTerm);
      const matchesTreatment = itemTreatmentNorm.includes(normalizedTerm);
      const matchesNote = itemNoteNorm.includes(normalizedTerm);
      const matchesTags = itemTagsNorm.some((t) => t.includes(normalizedTerm) || normalizedTerm.includes(t));

      return matchesName || matchesDesc || matchesTags || matchesTreatment || matchesNote;
    });
  }, [activeSearchTerm, selectedCategoryFilter]);

  const getBadgeStyle = (category: WasteCategoryType) => {
    switch (category) {
      case 'recyclable':
        return {
          badge: 'bg-sky-100 text-sky-800 border-sky-200',
          dot: 'bg-sky-500',
          border: 'border-sky-200 hover:border-sky-400',
          lightBg: 'bg-sky-50/40',
        };
      case 'organic':
        return {
          badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-500',
          border: 'border-emerald-200 hover:border-emerald-400',
          lightBg: 'bg-emerald-50/40',
        };
      case 'inorganic':
        return {
          badge: 'bg-stone-100 text-stone-800 border-stone-200',
          dot: 'bg-stone-500',
          border: 'border-stone-200 hover:border-stone-400',
          lightBg: 'bg-stone-50/60',
        };
      case 'hazardous':
        return {
          badge: 'bg-amber-100 text-amber-900 border-amber-300',
          dot: 'bg-amber-500',
          border: 'border-amber-200 hover:border-amber-400',
          lightBg: 'bg-amber-50/40',
        };
    }
  };

  return (
    <section id="lookup" className="py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title Header with sky-blue ambience */}
        <div className="text-center max-w-3xl mx-auto mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 via-sky-50/70 to-emerald-50/60 border border-sky-200/80 shadow-2xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-950 border border-sky-300 text-xs font-bold mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>TRA CỨU NHANH HỌC ĐƯỜNG</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            🔎 RÁC NÀY ĐI ĐÂU?
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl mx-auto">
            Tra cứu nhanh nhóm phân loại, hướng xử lý khái quát và các lưu ý an toàn quan trọng cho từng món rác thường ngày.
          </p>
        </div>

        {/* Search Input Box with "Tìm kiếm" button */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center shadow-xs bg-white/95 rounded-2xl border border-sky-300/80 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100 transition-all p-1.5">
            <Search className="w-5 h-5 text-stone-400 ml-3 shrink-0" />
            <input
              type="text"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tên một món rác..."
              className="w-full px-3 py-2.5 text-sm sm:text-base text-stone-800 placeholder:text-stone-400 outline-none bg-transparent"
            />
            {queryInput && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors mr-1 cursor-pointer"
                title="Xóa tìm kiếm"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => handlePerformSearch()}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm transition-all shadow-2xs shrink-0 cursor-pointer"
            >
              Tìm kiếm
            </button>
          </div>

          {/* Quick Suggested Keywords */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3 text-xs">
            <span className="text-stone-500 font-medium mr-1">Gợi ý tìm kiếm:</span>
            {suggestedKeywords.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => handleSuggestionClick(kw)}
                className={`px-3 py-1 rounded-lg border transition-all cursor-pointer font-medium ${
                  activeSearchTerm.toLowerCase() === kw.toLowerCase()
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                    : 'bg-emerald-50/80 hover:bg-emerald-100 text-emerald-900 border-emerald-200'
                }`}
              >
                “{kw}”
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'recyclable', label: '♻️ Tái chế' },
            { id: 'organic', label: '🍃 Hữu cơ' },
            { id: 'inorganic', label: '🗑️ Rác còn lại' },
            { id: 'hazardous', label: '⚠️ Rác nguy hại' },
          ].map((tab) => {
            const isActive = selectedCategoryFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategoryFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter if searched */}
        {activeSearchTerm && (
          <div className="mb-4 flex items-center justify-between text-xs sm:text-sm text-stone-600 max-w-6xl mx-auto px-1">
            <span>
              Kết quả tìm kiếm cho: <strong className="text-stone-900">“{activeSearchTerm}”</strong>
            </span>
            <span className="font-semibold text-emerald-800">
              {searchResults.length} món rác phù hợp
            </span>
          </div>
        )}

        {/* Results Cards Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {searchResults.map((item) => {
              const style = getBadgeStyle(item.category);

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl border p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between ${style.border}`}
                >
                  <div>
                    {/* Header: Name + Category Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl select-none">{item.emoji}</span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading leading-tight">
                            {item.name}
                          </h3>
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border whitespace-nowrap shrink-0 flex items-center gap-1.5 ${style.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                        <span>{item.categoryLabel}</span>
                      </span>
                    </div>

                    {/* Mô tả */}
                    <div className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <span className="font-semibold text-stone-700">Mô tả: </span>
                      <span>{item.description}</span>
                    </div>

                    {/* Hướng xử lý khái quát */}
                    <div className="mt-3.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm text-stone-700">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
                        <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Hướng xử lý:</span>
                      </div>
                      <p className="leading-relaxed">{item.treatment}</p>
                    </div>

                    {/* Lưu ý */}
                    <div className={`mt-3 p-3 rounded-xl border text-xs sm:text-sm ${style.lightBg} border-stone-200/90 text-stone-800`}>
                      <div className="flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-stone-900">Lưu ý: </strong>
                          <span>{item.note}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search Friendly Message */
          <div className="text-center py-12 p-8 rounded-3xl bg-white border border-dashed border-stone-300 max-w-lg mx-auto shadow-2xs animate-in fade-in duration-200">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-3">
              <HelpCircle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-stone-800 font-heading">
              Không tìm thấy món rác "{activeSearchTerm}"
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              Bạn hãy thử tìm kiếm với các từ khóa gợi ý như <strong>chai nhựa</strong>, <strong>pin</strong>, <strong>vỏ chuối</strong>, <strong>lon</strong>, <strong>giấy</strong> hoặc thử xóa dấu tiếng Việt nhé!
            </p>

            {/* Quick reset button */}
            <div className="mt-5 flex justify-center gap-2">
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Xem tất cả các loại rác
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
