"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Sidebar({ className }: { className?: string }) {
  const acts = ["1", "2", "3", "1 Cruel", "2 Cruel", "3 Cruel"]

  return (
    <div className={`pb-12 fixed top-0 left-0 h-full w-64 bg-background z-10 ${className}`}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-primary">View Acts</h2>
          <div className="space-y-1">
            {acts.map((act) => (
              <Button key={act} variant="ghost" className="w-full justify-start font-normal" asChild>
                <Link href={`/#act${act}`}>Act {act}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

