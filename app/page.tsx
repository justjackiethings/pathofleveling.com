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
      <div>
        Find the exit to Grim Tangle, take the waypoint, and go back to
        Grelwood.
      </div>,
      <div>
        Find the exit to Red Vale, take the waypoint, and go back to Grelwood.
      </div>,
      "In Red Vale",
      <div>Find the three obelisks and get the three quest items.</div>,
      <div>
        Go back to town, talk to NPCs, then head to Grim Tangle via waypoint.
      </div>,
      "In Grim Tangle",
      <div>
        Find theexit to the Cemetery of The Eternals. The Druid boss can be
        skipped.
      </div>,
      "In Cemetary of The Eternals",
      <div>Find the Mausoleum and kill the boss in there.</div>,
      <div>Find the Tomb and kill the boss in there.</div>,
      <div>Talk to Lachlan, open the gate, and kill him. ☹</div>,
      <div>Enter Hunting Grounds</div>,
      "In Hunting Grounds",
      <div>Find and kill Crowbell. Rewards two skill points.</div>,
      <div>
        Find and enter Ogham Farmlands, find the waypoint and head back to the
        hunting grounds.
      </div>,
      <div>
        Find and enter Freythorn, find the waypoint and head back to the hunting
        grounds.
      </div>,
      "In Freythorn",
      <div>
        Do all 4 rituals, killing The King of The Mists at the end. Rewards 30
        spirit.
      </div>,
      <div>TP back to town and waypoint to Ogham Farmlands.</div>,
      "In Ogham Farmlands",
      <div>
        Find Una's lute. Usually around the center of the zone. Rewards 2 skill
        points.
      </div>,
      <div>Find and take the exit to Ogham Village.</div>,
      "In Ogham Village",
      <div>
        If it's your first character of the league; Find Smithing Tools.
      </div>,
      <div>Find and kill The Executioner</div>,
      <div>Go to The Manor Ramparts</div>,
      "In The Manor Ramparts",
      <div>
        Find the exit to Ogham Manor. This is always in the opposite direction
        of the waypoint after you zone in.
      </div>,
      "In Ogham Manor",
      <div>Find and kill candlemass</div>,
      <div>Find and go down stairs twice</div>,
      <div>Find elevator to boss, kill boss, go back to town</div>,
      "In Town",
      <div>
        If it's your first character of the league; Talk to Renly to turn in the
        smithing tools
      </div>,
      <div>Talk to the hooded one to go to act 2</div>,
    ],
    "2": [
      "In Vastiri Outskirts",
      <div>Find and kill Rathbreaker</div>,
      <div>Portal back to camp, enter caravan</div>,
      "In Town",
      <div>
        Speak to everyone then use the desert map to go to Mawdun Quarry
      </div>,
      "In Mawdun Quarry",
      <div>Find and take the exit to Mawdun Mine</div>,
      "In Mawdun Mine",
      <div>Find and kill Rudja</div>,
      <div>Talk to Risu then portal back to town</div>,
      "In Town",
      <div>Talk to Risu, then use desert map to go to halani gates</div>,
      <div>
        Talk to Asala at the gates, go back to the caravan, talk to Risu again,
        then to Asala again
      </div>,
      <div>Use desert map to go to halani gates again</div>,
      "In Traitor's Passage",
      <div>Find and kill Basala, pick up the Djinn Barya quest item</div>,
      <div>Find the exit to the halani gates</div>,
      "In The Halani Gates",
      <div>
        Find and kill Jamanra the risen king. Stay close to the canyon. Cross
        the canyon 3 times to find the boss.
      </div>,
      <div>
        Go down the stairs and to the bottom right of the zone, then back to
        town
      </div>,
      "In Town",
      <div>Use the desert map to go to the Trial of Sekhemas</div>,
      <div>Talk to everyone, then use desert map to go to Keth</div>,
      "In Keth",
      <div>Kill Kabala, the constrictor queen. Rewards 2 skill points.</div>,
      <div>Kill snakes until you find the Kabala Clan relic.</div>,
      <div>Find exit to the lost city</div>,
      <div>Go to The Lost City.</div>,
      "In The Lost City",
      <div>Find exit and go to the buried shrines, then the heart of keth</div>,
      <div>Kill Azaraian the Forsaken Son</div>,
      <div>
        Talk to the goddess, loot the cinders, burn the goddess, loot the
        essence of water.
      </div>,
      <div>Head back to town.</div>,
      "In Town",
      <div>Use desert map to go to Mastodon Badlands</div>,
      "In Mastodon Badlands",
      <div>Find the exit to The Bone Pits</div>,
      "In The Bone Pits",
      <div>Find and kill the zone boss and loot the horn</div>,
      <div>Kill Hyenas until you found the sun clan relic</div>,
      <div>Tp back to town.</div>,
      "In Town",
      <div>Use desert map to go to The Valley of Titans</div>,
      "In The Valley of Titans",
      <div>Find and click the three ancient seals</div>,
      <div>
        Find the medallion and place the two relics in there. Rewards a
        permanent buff.
      </div>,
      <div>Find and take the exit to Titan Grotto</div>,
      "In Titan Grotto",
      <div>Find and kill the boss, then go back to town</div>,
      "In Town",
      <div>Talk to Zarka, then Asala</div>,
      <div>Use the desert map to traval to the halani gates</div>,
      <div>Go to the front of the caravan and sound the horn</div>,
      <div>Use the desert map to traval to Deshar</div>,
      "In Deshar",
      <div>
        Find the final letter on a corpse on the ground. Rewards two skill
        points on hand in.
      </div>,
      <div>Find the exit to the path of mourning</div>,
      <div>Go the The Path of Mourning</div>,
      "In The Path of Mourning",
      <div>Find the exit to the Spires of Deshar</div>,
      "In Spires of Deshar",
      <div>Find the sisters of Garukhan</div>,
      <div>Find and kill Tor Gul, The Defiler</div>,
      <div>Portal back to town</div>,
      "In Town",
      <div>Turn in the final letter at Shambrin</div>,
      <div>Talk to everyone, then use desert map to go to the dreadnought</div>,
      "In The Dreadnought",
      <div>
        Find the exit to the dreadnought vanguard, then find and kill Jamara,
        The Abomination
      </div>,
      <div>Portal back to town</div>,
      "In Town",
      <div>Leave the Caravan and talk to the Hooded one</div>,
      <div>Go back to the Caravan and talk to Asala to go to Act 3</div>,
    ],
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
      <div>
        Find the exit to Grim Tangle, take the waypoint, and go back to
        Grelwood.
      </div>,
      <div>
        Find the exit to Red Vale, take the waypoint, and go back to Grelwood.
      </div>,
      "In Red Vale",
      <div>Find the three obelisks and get the three quest items.</div>,
      <div>
        Go back to town, talk to NPCs, then head to Grim Tangle via waypoint.
      </div>,
      "In Grim Tangle",
      <div>
        Find theexit to the Cemetery of The Eternals. The Druid boss can be
        skipped.
      </div>,
      "In Cemetary of The Eternals",
      <div>Find the Mausoleum and kill the boss in there.</div>,
      <div>Find the Tomb and kill the boss in there.</div>,
      <div>Talk to Lachlan, open the gate, and kill him. ☹</div>,
      <div>Enter Hunting Grounds</div>,
      "In Hunting Grounds",
      <div>Find and kill Crowbell. Rewards two skill points.</div>,
      <div>Find and enter Ogham Farmlands.</div>,
      "In Ogham Farmlands",
      <div>
        Find Una's lute. Usually around the center of the zone. Rewards 2 skill
        points.
      </div>,
      <div>Find and take the exit to Ogham Village.</div>,
      "In Ogham Village",
      <div>Find and kill The Executioner</div>,
      <div>Go to The Manor Ramparts</div>,
      "In The Manor Ramparts",
      <div>
        Find the exit to Ogham Manor. This is always in the opposite direction
        of the waypoint after you zone in.
      </div>,
      "In Ogham Manor",
      <div>Find and kill candlemass</div>,
      <div>Find and go down stairs twice</div>,
      <div>Find elevator to boss, kill boss, go back to town</div>,
      "In Town",
      <div>Talk to the hooded one to go to act 2</div>,
    ],
    "2 Cruel": [
      "In Vastiri Outskirts",
      <div>Find and kill Rathbreaker</div>,
      <div>Portal back to camp, enter caravan</div>,
      "In Town",
      <div>
        Speak to everyone then use the desert map to go to Mawdun Quarry
      </div>,
      "In Mawdun Quarry",
      <div>Find and take the exit to Mawdun Mine</div>,
      "In Mawdun Mine",
      <div>Find and kill Rudja</div>,
      <div>Talk to Risu then portal back to town</div>,
      "In Town",
      <div>Talk to Risu, then use desert map to go to halani gates</div>,
      <div>
        Talk to Asala at the gates, go back to the caravan, talk to Risu again,
        then to Asala again
      </div>,
      <div>Use desert map to go to halani gates again</div>,
      "In Traitor's Passage",
      <div>Find the exit to the halani gates</div>,
      "In The Halani Gates",
      <div>
        Find and kill Jamanra the risen king. Stay close to the canyon. Cross
        the canyon 3 times to find the boss.
      </div>,
      <div>
        Go down the stairs and to the bottom right of the zone, then back to
        town
      </div>,
      "In Town",
      <div>Talk to everyone, then use desert map to go to Keth</div>,
      "In Keth",
      <div>Kill Kabala, the constrictor queen. Rewards 2 skill points.</div>,
      <div>Kill snakes until you find the Kabala Clan relic.</div>,
      <div>Find exit to the lost city</div>,
      <div>Go to The Lost City.</div>,
      "In The Lost City",
      <div>Find exit and go to the buried shrines, then the heart of keth</div>,
      <div>Kill Azaraian the Forsaken Son</div>,
      <div>
        Talk to the goddess, loot the cinders, burn the goddess, loot the
        essence of water.
      </div>,
      <div>Head back to town.</div>,
      "In Town",
      <div>Use desert map to go to Mastodon Badlands</div>,
      "In Mastodon Badlands",
      <div>Find the exit to The Bone Pits</div>,
      "In The Bone Pits",
      <div>Find and kill the zone boss and loot the horn</div>,
      <div>Kill Hyenas until you found the sun clan relic</div>,
      <div>Tp back to town.</div>,
      "In Town",
      <div>Use desert map to go to The Valley of Titans</div>,
      "In The Valley of Titans",
      <div>Find and click the three ancient seals</div>,
      <div>
        Find the medallion and place the two relics in there. Rewards a
        permanent buff.
      </div>,
      <div>Find and take the exit to Titan Grotto</div>,
      "In Titan Grotto",
      <div>Find and kill the boss, then go back to town</div>,
      "In Town",
      <div>Talk to Zarka, then Asala</div>,
      <div>Use the desert map to traval to the halani gates</div>,
      <div>Go to the front of the caravan and sound the horn</div>,
      <div>Use the desert map to traval to Deshar</div>,
      "In Deshar",
      <div>
        Find the final letter on a corpse on the ground. Rewards two skill
        points on hand in.
      </div>,
      <div>Find the exit to the path of mourning</div>,
      <div>Go the The Path of Mourning</div>,
      "In The Path of Mourning",
      <div>Find the exit to the Spires of Deshar</div>,
      "In Spires of Deshar",
      <div>Find the sisters of Garukhan</div>,
      <div>Find and kill Tor Gul, The Defiler</div>,
      <div>Portal back to town</div>,
      "In Town",
      <div>Turn in the final letter at Shambrin</div>,
      <div>Talk to everyone, then use desert map to go to the dreadnought</div>,
      "In The Dreadnought",
      <div>
        Find the exit to the dreadnought vanguard, then find and kill Jamara,
        The Abomination
      </div>,
      <div>Portal back to town</div>,
      "In Town",
      <div>Leave the Caravan and talk to the Hooded one</div>,
      <div>Go back to the Caravan and talk to Asala to go to Act 3</div>,
    ],
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
