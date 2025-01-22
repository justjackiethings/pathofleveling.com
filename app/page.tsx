"use client";

import { Sidebar } from "@/components/sidebar";
import { useState, useEffect, ReactElement } from "react";

export default function Home() {
  const acts: Record<string, Array<ReactElement | string>> = {
    "1": [
      "In Town",
      <div>Kill the boss then enter town</div>,
      <div>Hand in quests and head out to Clearfell</div>,
      "In Clearfell",
      <div>
        Kill Beira of the Rotten Pack. She's North/North East of the waypoint.
        Rewards 10% Cold Res.
      </div>,
      <div>Find the exit to Grelwood.</div>,
      "In Grelwood",
      <div>Find the waypoint and talk to the quest NPC. Usually central.</div>,
      <div>Find the exit to Grim Tangle, take the waypoint, and go back to Grelwood.</div>,
      <div>Find the exit to Red Vale, take the waypoint, and go back to Grelwood.</div>,
      "In Red Vale",
      <div>Find the three obelisks and get the three quest items.</div>,
      <div>Go back to town, talk to NPCs, then head to Grim Tangle via waypoint.</div>,
      "In Grim Tangle",
      <div>Find theexit to the Cemetery of The Eternals. The Druid boss can be skipped.</div>,
      "In Cemetary of The Eternals",
      <div>Find the Mausoleum and kill the boss in there.</div>,
      <div>Find the Tomb and kill the boss in there.</div>,
      <div>Talk to Lachlan, open the gate, and kill him. ☹</div>,
      <div>Enter Hunting Grounds</div>,
      "In Hunting Grounds",
      <div>Find and kill Crowbell. Rewards two skill points.</div>,
      <div>Find and enter Ogham Farmlands, find the waypoint and head back to the hunting grounds.</div>,
      <div>Find and enter Freythorn, find the waypoint and head back to the hunting grounds.</div>,
      "In Freythorn",
      <div>Do all 4 rituals, killing The King of The Mists at the end. Rewards 30 spirit.</div>,
      <div>TP back to town and waypoint to Ogham Farmlands.</div>,
      "In Ogham Farmlands",
      <div>Find Una's lute. Usually around the center of the zone. Rewards 2 skill points.</div>,
      <div>Find and take the exit to Ogham Village.</div>,
      "In Ogham Village",
      <div>If it's your first character of the league; Find Smithing Tools.</div>,
      <div>Find and kill The Executioner</div>,
      <div>Go to The Manor Ramparts</div>,
      "In The Manor Ramparts",
      <div>Find the exit to Ogham Manor. This is always in the opposite direction of the waypoint after you zone in.</div>,
      "In Ogham Manor",
      <div>Find and kill candlemass</div>,
      <div>Find and go down stairs twice</div>,
      <div>Find elevator to boss, kill boss, go back to town</div>,
      "In Town",
      <div>If it's your first character of the league; Talk to Renly to turn in the smithing tools</div>,
      <div>Talk to the hooded one to go to act 2</div>,

    ],
    "2": [],
    "3": [],
    "1 Cruel": [
      "In Town",
      <div>Kill the boss then enter town</div>,
      <div>Hand in quests and head out to Clearfell</div>,
      "In Clearfell",
      <div>
        Kill Beira of the Rotten Pack. She's North/North East of the waypoint.
        Rewards 10% Cold Res.
      </div>,
      <div>Find the exit to Grelwood.</div>,
      "In Grelwood",
      <div>Find the waypoint and talk to the quest NPC. Usually central.</div>,
      <div>Find the exit to Grim Tangle, take the waypoint, and go back to Grelwood.</div>,
      <div>Find the exit to Red Vale, take the waypoint, and go back to Grelwood.</div>,
      "In Red Vale",
      <div>Find the three obelisks and get the three quest items.</div>,
      <div>Go back to town, talk to NPCs, then head to Grim Tangle via waypoint.</div>,
      "In Grim Tangle",
      <div>Find theexit to the Cemetery of The Eternals. The Druid boss can be skipped.</div>,
      "In Cemetary of The Eternals",
      <div>Find the Mausoleum and kill the boss in there.</div>,
      <div>Find the Tomb and kill the boss in there.</div>,
      <div>Talk to Lachlan, open the gate, and kill him. ☹</div>,
      <div>Enter Hunting Grounds</div>,
      "In Hunting Grounds",
      <div>Find and kill Crowbell. Rewards two skill points.</div>,
      <div>Find and enter Ogham Farmlands.</div>,
      "In Ogham Farmlands",
      <div>Find Una's lute. Usually around the center of the zone. Rewards 2 skill points.</div>,
      <div>Find and take the exit to Ogham Village.</div>,
      "In Ogham Village",
      <div>Find and kill The Executioner</div>,
      <div>Go to The Manor Ramparts</div>,
      "In The Manor Ramparts",
      <div>Find the exit to Ogham Manor. This is always in the opposite direction of the waypoint after you zone in.</div>,
      "In Ogham Manor",
      <div>Find and kill candlemass</div>,
      <div>Find and go down stairs twice</div>,
      <div>Find elevator to boss, kill boss, go back to town</div>,
      "In Town",
      <div>Talk to the hooded one to go to act 2</div>,

    ],
    "2 Cruel": [],
    "3 Cruel": [],
  };

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
      <div className="flex-1 flex">
        <Sidebar className="hidden lg:block" />
        <div className="flex-1 overflow-y-auto pl-64">
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
                  <div className="text-muted-foreground" key={i}>
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
                        <div className={typeof step === "string" ? "text-xl p-2 pt-4" : ""}>{step}</div>
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
