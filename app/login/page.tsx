"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaPlaneUp } from "react-icons/fa6";
export default function LoginPage() {
    const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
    };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl p-12 w-[400px] shadow-lg text-center">
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-900 mb-5">
            <FaPlaneUp size={30} color="#fff" />
        </div>

        <h1 className="text-[22px] font-bold mb-1.5">旅行プランナー</h1>
        <p className="text-sm text-gray-500 mb-9">旅行の予定を管理しましょう</p>

        {/* Google Sign In */}
        <button
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-5 py-3 border border-gray-200 rounded-xl bg-white text-[15px] font-medium text-gray-900 hover:bg-gray-50 transition-colors shadow-sm disabled:cursor-wait"
          onClick={handleLogin}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-gray-200 border-t-blue-500 rounded-full spinner" />
          ) : (
            <AiFillGoogleCircle size={30} color="#4285F4" />
          )}
          {loading ? "ログイン中..." : "Googleでログイン"}
        </button>

        <p className="mt-6 text-xs text-gray-400">
          ログインすることで
          <span className="underline cursor-pointer">利用規約</span>と
          <span className="underline cursor-pointer">プライバシーポリシー</span>に同意します
        </p>
      </div>
    </div>
  );
}