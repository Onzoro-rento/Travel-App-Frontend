// src/components/TripCard.tsx
"use client";

import { Trip } from "@/types";
import { EllipsisVertical,MapPin, Calendar } from 'lucide-react';
import { formatDateShort } from "@/lib/utils";
import ImgPlaceholder from "@/components/ui/ImgPlaceholder";

interface Props {
  trip: Trip;
  onClick: () => void;
}

export default function TripCard({ trip, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-md w-[300px]"
    >
      {/* Cover */}
      <ImgPlaceholder label={trip.coverLabel} className="h-40 w-full" />

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">{trip.title}</h3>
          <button
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 pl-2 hover:text-gray-600 transition-colors shrink-0"
          >
            <EllipsisVertical size={18} />
          </button>
        </div>


        <div className="flex items-center gap-1.5 mb-2">
          <Calendar size={16} />
          <span className="text-[13px] text-gray-500">
            {formatDateShort(trip.startDate)} - {formatDateShort(trip.endDate)}
          </span>
        </div>

        {trip.note && (
          <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
            {trip.note}
          </p>
        )}
      </div>
    </div>
  );
}