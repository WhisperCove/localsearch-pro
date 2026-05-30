import { useState } from "react";

interface FirstRunWizardProps {
  onComplete: () => void;
}

const slides = [
  {
    title: "全离线本地搜索",
    description: "隐私零泄露，所有数据本地处理，无需联网即可使用",
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "毫秒级响应",
    description: "百万级文档下简单查询 <<100ms，即时预览，丝滑体验",
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "中文语义友好",
    description: "基于 jieba 分词，支持专有名词，中文搜索无乱码",
    icon: (
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
  },
];

export function FirstRunWizard({ onComplete }: FirstRunWizardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-40 bg-white dark:bg-gray-950 flex flex-col">
      {/* Header */}
      <div className="flex-none px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">
            LocalSearch Pro
          </span>
        </div>
        <button
          onClick={handleSkip}
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          跳过
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          {/* Icon */}
          <div
            className={`w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${slides[currentSlide].color} flex items-center justify-center text-white shadow-2xl`}
          >
            {slides[currentSlide].icon}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {slides[currentSlide].title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none px-8 pb-8">
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleNext}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
        >
          {currentSlide < slides.length - 1 ? "下一步" : "开始使用"}
        </button>
      </div>
    </div>
  );
}
