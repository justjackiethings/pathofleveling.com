"use client";
import { ReactElement } from "react";

export function ActStepView(
  props: {
    step: string | ReactElement;
    checkedItems: Record<string, boolean>;
    checkedItemKey: string;
    handleCheckboxChange: (checkedItemKey: string) => void;
  }
) {
  return (
    <div className="flex flex-row gap-2" key={props.checkedItemKey}>
      {typeof props.step === "string" ? (
        <></>
      ) : (
        <input
          type="checkbox"
          checked={props.checkedItems[props.checkedItemKey] || false}
          onChange={() => props.handleCheckboxChange(props.checkedItemKey)}
        />
      )}
      <div className={typeof props.step === "string" ? "text-xl p-2 pt-4" : ""}>
        {props.step}
      </div>
    </div>
  );
}
