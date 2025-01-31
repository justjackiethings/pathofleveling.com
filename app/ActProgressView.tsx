"use client";
import { acts } from "@/lib/actData";
import { ActStepView } from "./ActStepView";

export const ActProgressView = (props : { checkedItems: Record<string, boolean>; handleCheckboxChange: (checkedItemKey: string) => void; }) => (
  <div className="space-y-12">
    {Object.entries(acts).map(([act, steps], i) => (
      <section key={act} id={`act${act}`} className="scroll-m-20">
        <h2 className="text-2xl font-bold tracking-tight text-primary pb-4">
          --== ACT {act} ==--
        </h2>
        <div className="text-muted-foreground pb-12" key={act + i}>
          {steps.map((step, stepI) => (
            <ActStepView
              key={`${act}-${stepI}`}
              step={step}
              checkedItems={props.checkedItems}
              checkedItemKey={`${act}-${stepI}`}
              handleCheckboxChange={props.handleCheckboxChange}
            />
          ))}
        </div>
      </section>
    ))}
  </div>
);
