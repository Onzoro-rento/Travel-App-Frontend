"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/frame/TopBar";
import AddTripModal from "@/components/modal/AddTripModal";

export default function Header() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TopBar onAddTrip={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <AddTripModal
          onClose={() => {
            setIsModalOpen(false);
            router.refresh();
          }}
        />
      )}
    </>
  );
}
