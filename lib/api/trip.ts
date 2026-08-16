import { fetchWithAuthServer } from "@/lib/fetchWithAuthServer";
import type { TripListItemResponse } from "@/types/trip";

export const tripAPI = {
  getTrips: async () => {
    try {
      const res = await fetchWithAuthServer("/api/v1/trips");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return (await res.json()).data.map((item: TripListItemResponse) => ({
        id: item.id,
        title: item.title,
        startDate: item.start_date,
        endDate: item.end_date,
        note: item.note,
        coverLabel: item.title,
        schedules: [],
        candidates: [],
      }));
    } catch (error) {
      console.error("Error fetching trips:", error);
      return [];
    }
  },
};
