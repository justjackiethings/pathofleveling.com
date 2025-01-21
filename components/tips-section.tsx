"use client"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

interface TipsSectionProps {
  title: string
  tips: string[]
}

export function TipsSection({ title, tips }: TipsSectionProps) {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="flex w-full items-center justify-between py-4 text-xl font-semibold text-primary">
        {title}
        <ChevronDown className="h-6 w-6" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        {tips.map((tip, index) => (
          <div key={index} className="flex gap-2 text-muted-foreground">
            <span>•</span>
            <p>{tip}</p>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

