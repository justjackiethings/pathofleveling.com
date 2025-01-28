"use client";
import { ReactElement } from "react";

export function ActStepView(
  step: string | ReactElement,
  checkedItems: Record<string, boolean>,
  checkedItemKey: string,
  handleCheckboxChange: (checkedItemKey: string) => void
) {
  return (
    <div className="flex flex-row gap-2" key={checkedItemKey}>
      {typeof step === "string" ? (
        <></>
      ) : (
        <input
          type="checkbox"
          checked={checkedItems[checkedItemKey] || false}
          onChange={() => handleCheckboxChange(checkedItemKey)}
        />
      )}
      <div className={typeof step === "string" ? "text-xl p-2 pt-4" : ""}>
        {step}
      </div>
    </div>
  );
}
