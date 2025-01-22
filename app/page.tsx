"use client";

import { Sidebar } from "@/components/sidebar";
import { acts } from "@/lib/actData";
import { useEffect, useState } from "react";

export default function Home() {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const savedCheckedItems = localStorage.getItem("checkedItems");
    if (savedCheckedItems) {
      setCheckedItems(JSON.parse(savedCheckedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheckboxChange = (actKey: string, stepIndex: number) => {
    const itemKey = `${actKey}-${stepIndex}`;
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
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
            <div className="space-y-12">
              {Object.entries(acts).map(([act, steps], i) => (
                <section key={act} id={`act${act}`} className="scroll-m-20">
                  <h2 className="text-2xl font-bold tracking-tight text-primary pb-4">
                    --== ACT {act} ==--
                  </h2>
                  <div className="text-muted-foreground pb-12" key={i}>
                    {steps.map((step, stepI) => (
                      <div
                        className="flex flex-row gap-2"
                        key={i * 1000 + stepI}
                      >
                        {typeof step === "string" ? (
                          <></>
                        ) : (
                          <input
                            type="checkbox"
                            checked={checkedItems[`${act}-${stepI}`] || false}
                            onChange={() => handleCheckboxChange(act, stepI)}
                          />
                        )}
                        <div
                          className={
                            typeof step === "string" ? "text-xl p-2 pt-4" : ""
                          }
                        >
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
