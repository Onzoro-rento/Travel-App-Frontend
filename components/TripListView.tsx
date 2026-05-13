"use client";

import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import Header from "@/components/frame/Header";
import TripCard from "@/components/TripCard";
import { Trip } from "@/types";

interface Props {
  trips: Trip[];
}

export default function TripListView({ trips }: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-6 py-8 max-w-[1100px] mx-auto">
        {trips.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
              <MapPin size={28} color="#9ca3af" />
            </div>
            <p className="text-lg font-semibold">旅行プランはありません</p>
            <p className="text-sm text-gray-500">新しい旅行を追加して、予定の管理を始めましょう</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-5">
            {trips.map((t) => (
              <TripCard key={t.id} trip={t} onClick={() => router.push(`/trips/${t.id}`)} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
