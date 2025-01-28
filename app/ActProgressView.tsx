"use client";
import { acts } from "@/lib/actData";
import { ActStepView } from "./ActStepView";

export const ActProgressView = ({
  checkedItems, handleCheckboxChange,
}: {
  checkedItems: Record<string, boolean>;
  handleCheckboxChange: (checkedItemKey: string) => void;
}) => (
  <div className="space-y-12">
    {Object.entries(acts).map(([act, steps], i) => (
      <section key={act} id={`act${act}`} className="scroll-m-20">
        <h2 className="text-2xl font-bold tracking-tight text-primary pb-4">
          --== ACT {act} ==--
        </h2>
        <div className="text-muted-foreground pb-12" key={i}>
          {steps.map((step, stepI) => (
            ActStepView(step, checkedItems, `${act}-${stepI}`, handleCheckboxChange)
          ))}
        </div>
      </section>
    ))}
  </div>
);

