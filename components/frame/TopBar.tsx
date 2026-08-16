"use client";

import { FaPlaneUp } from "react-icons/fa6";

interface Props {
  onAddTrip: () => void;
  avatarChar?: string;
}

export default function TopBar({ onAddTrip, avatarChar = "?" }: Props) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 h-24 flex items-center justify-between px-10">
      <div className="flex items-center gap-4">
        <div className="w-13 h-13 rounded-xl bg-gray-900 flex items-center justify-center">
          <FaPlaneUp size={26} color="#fff" />
        </div>
        <div>
          <p className="text-xl font-bold leading-tight">旅行プランナー</p>
          <p className="text-sm text-gray-500 leading-tight">旅行の予定を管理しましょう</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onAddTrip}
          className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          <span className="text-xl leading-none">+</span>
          新しい旅行を追加
        </button>
        <div className="w-13 h-13 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold cursor-pointer">
          {avatarChar}
        </div>
      </div>
    </header>
  );
}
