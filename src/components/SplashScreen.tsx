import { useState, useEffect } from "react";

interface SplashScreenProps {
  isFirstLaunch: boolean;
  onComplete: () => void;
}

export function SplashScreen({ isFirstLaunch: _isFirstLaunch, onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("正在初始化...");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const stages = [
      { text: "正在加载配置文件...", duration: 800 },
      { text: "正在连接本地数据库...", duration: 1000 },
      { text: "正在验证系统环境...", duration: 600 },
      { text: "准备就绪", duration: 400 },
    ];

    let currentStage = 0;
    let elapsed = 0;

    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setStatusText(stages[currentStage].text);
        elapsed += 100;

        if (elapsed >= stages[currentStage].duration) {
          currentStage++;
          elapsed = 0;
        }

        setProgress(
          Math.min(
            (currentStage * 100) / stages.length +
              (elapsed / stages[currentStage].duration) * (100 / stages.length),
            100,
          ),
        );
      } else {
        clearInterval(interval);
        setFadeOut(true);
        setTimeout(onComplete, 300);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #1e1e2e 0%, #2d2d44 50%, #1a1a2e 100%)",
      }}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
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
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            LocalSearch Pro
          </h1>
          <p className="text-gray-400 text-sm">本地文件智能检索工具</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Status text */}
        <p className="text-gray-500 text-sm">{statusText}</p>

        {/* Copyright */}
        <p className="text-gray-600 text-xs mt-8">© 2026 LocalSearch Pro</p>
      </div>
    </div>
  );
}
