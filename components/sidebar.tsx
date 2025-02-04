"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const acts = ["1", "2", "3", "1 Cruel", "2 Cruel", "3 Cruel"];

  return (
    <div
      className={`hidden fixed lg:w-64 lg:block `}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-primary">
            Jump to Acts
          </h2>
          <div className="space-y-1">
            {acts.map((act) => (
              <Button
                key={act}
                variant="ghost"
                className="w-full justify-start font-normal"
                asChild
              >
                <Link href={`/#act${act}`}>Act {act}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        className="w-full justify-start font-normal self-end"
        asChild
      >
        <Link href={`https://github.com/CanOrhan/pathofleveling.com`}>
          Github
        </Link>
      </Button>
    </div>
  );
}
