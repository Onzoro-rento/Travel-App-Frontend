"use client";

import { ReactNode } from "react";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}

      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        {children}
      </div>
    </div>
  );
}
