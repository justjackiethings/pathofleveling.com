"use client";

import { Sidebar } from "@/components/sidebar";
import { useState } from "react";
import { ActProgressView } from "./ActProgressView";
import { useSetCheckedItems } from "./useSetCheckedItems";
import { useUpdateStorageCheckedItems } from "./useUpdateStorageCheckedItems";

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useSetCheckedItems(setCheckedItems);

  useUpdateStorageCheckedItems(checkedItems);

  const handleCheckboxChange = (checkedItemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [checkedItemKey]: !prev[checkedItemKey],
    }));
  };

  return (
    <div className="border-t h-screen flex">
      <div className="flex">
        <Sidebar />
        <div className="px-4 lg:pl-64">
          <div className="h-full px-4 py-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 pb-8">
              <h1 className="text-4xl font-bold tracking-tight">
                PATH OF <span className="text-primary">LEVELING</span>
              </h1>
            </div>
            <p className="text-center text-muted-foreground pb-8">
              Leveling guide for Path of Exile 2 based on community knowledge
            </p>
            <ActProgressView
              checkedItems={checkedItems}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
