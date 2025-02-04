"use client";
import { SetStateAction, useEffect } from "react";

export function useSetCheckedItems(setCheckedItems: { (value: SetStateAction<Record<string, boolean>>): void; }) {
  useEffect(() => {
    const savedCheckedItems = localStorage.getItem("checkedItems");
    if (savedCheckedItems) {
      setCheckedItems(JSON.parse(savedCheckedItems));
    }
  }, [setCheckedItems]);
}
