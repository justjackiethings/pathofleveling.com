"use client";
import { useEffect } from "react";

export function useUpdateStorageCheckedItems(checkedItems: Record<string, boolean>) {
  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);
}
