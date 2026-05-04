import Header from "@/components/frame/Header";

export default function Home() {
  // 将来ここでtrip一覧をfetch（SSR）
  // const trips = await fetchTrips();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
    </div>
  );
}
