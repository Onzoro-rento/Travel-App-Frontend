import { Suspense } from "react";
import { tripAPI } from "@/lib/api/trip";
import TripListView from "@/components/TripListView";

async function TripList() {
  const trips = await tripAPI.getTrips();
  return <TripListView trips={trips} />;
}

export default function Home() {
  return (
    <Suspense>
      <TripList />
    </Suspense>
  );
}
