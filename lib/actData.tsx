import { ReactElement } from "react";

export const acts: Record<string, Array<ReactElement | string>> = {
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
  "3": [
    "In Sandswept Marsh",
    <div>Find the exit to the Ziggurat Encampment (town).</div>,
    "In Town",
    <div>Talk to everyone and exit into Jungle Ruins</div>,
    "In Jungle Ruins",
    <div>Find the Exit to venom crypts (near waypoint)</div>,
    <div>Find and kill the mighty silverfist</div>,
    <div>Find and go through the exit to Infested Barrens</div>,
    "In Infested Barrens",
    <div>
      Find the exit to Chimeral Wetlands. Enter zone, take waypoint, backtrack
      to Infested Barrens.
    </div>,
    <div>
      Find the exit to Azak Bog. Enter zone, take waypoint, backtrack to
      Infested Barrens.
    </div>,
    <div>Find the exit to the Matlan Waterways and the waypoint.</div>,
    <div>
      Zone Note: Whichever waypoint you find last, use it to travel back to
      Jungle Ruins.
    </div>,
    "In Jungle Ruins",
    <div>Enter the Venom Crypts</div>,
    "In Venom Crypts",
    <div>Find the corpse for the venom phial, then go back to town</div>,
    "In Town",
    <div>
      Go back to town, turn in phial at Servi for a reward. This can not be
      changed later.
    </div>,
    <div>Go to the Azak Bog.</div>,
    "In Azak Bog",
    <div className="flex flex-row gap-2">
      <div className="italic">#Optional</div>Find the Flameskin ritual and
      activate all, it gives 25% fire res and rarity for the rest of the zone
    </div>,
    <div>Find and kill Ignagduk. Rewards 30 spirit.</div>,
    <div>Go back to town and then to The Chimeral Wetlands</div>,
    "In The Chimeral Wetlands",
    <div>Find the temple/trial of chaos. </div>,
    <div>Find and kill the chimeara boss</div>,
    <div>Enter Juquani's Machinarium</div>,
    "In Jiquani's Machinarium",
    <div>Find the first small soul core, then open the door</div>,
    <div>Find two more small soul cores</div>,
    <div>Find the exit towards Jiquani's sanctum</div>,
    <div>Find and kill Blackjaw. Rewards 10% fire res.</div>,
    <div>Checkpoint port to the exit, then go to Jiquani's Sanctum</div>,
    "In Jiquani's Sanctum",
    <div>Don't forget the activate the waypoint right after the entry.</div>,
    <div>Talk to Alva</div>,
    <div>Find two medium soul cores</div>,
    <div>"Activate both generators. Place down a portal BEFORE you activate the second generator."</div>,
    <div>Portal back to town and waypoint back to the Jiquani's Sanctum.</div>,
    <div>Kill Zicoatl, Warden of the core and loot the large soul core</div>,
    <div>Go back to the infested barrens waypoint</div>,
    "In Infested Barrens",
    <div>Insert the large soul core and go to Matlan Waterways afterwards</div>,
    "In Matlan Waterways",
    <div>Activate every single lever to navigate through the zone, then activate the big one at the end</div>,
    <div>Tp back to town</div>,
    "In Town",
    <div>Go down the stairs near the well / the hooded one</div>,
    <div>Talk to Alva, enter The Drowned City</div>,
    "In The Drowned City",
    <div>If it's your first character of the league; Find the exit to The Molten Vault. Enter zone, take waypoint, backtrack to The Drowned City.</div>,
    <div>Find the exit to The Apex of Filth. Enter zone, take waypoint, and if it's your first character of the league; backtrack to The Drowned City.</div>,
    <div>If it's your first character of the league; Enter the Molten Vault. Otherwise enter The Apex of Filth.</div>,
    "In The Molten Vault",
    <div>Find and kill the boss, then talk to Oswald back in town</div>,
    <div>Enter The Apex of Filth</div>,
    "In The Apex of Filth",
    <div>Find and kill the queen of filth, then portal back to town</div>,
    "In Town",
    <div>Go down the stairs near the well / the hooded one again, and enter The Temple of Kopec</div>,
    "In The Temple of Kopec",
    <div>Go up the stairs twice, then kill Ketzuli, High Priest of The Sun</div>,
    "In Town",
    <div>Talk to Alva and ride the elevator up</div>,
    <div>Go through the gateway, then down the stairs again to enter Utzaal</div>,
    "In Utzaal",
    <div>Search and kill Viper Napuatzi.</div>,
    <div>Find the exit to Aggorat and enter Aggorat.</div>,
    "In Aggorat",
    <div>Follow the voices of the trial of Atziri, go through to find the next checkpoint</div>,
    <div>Find the exit towards the Black Chambers</div>,
    <div>Find the Sacrificial table</div>,
    <div>Farm The Sacrificial Heart if you haven't found it yet.</div>,
    <div>Use the checkpoint to go the sacrificial table, loot the dagger, place the heart, stab the heart</div>,
    <div>Use the checkpoint to go to The Black Chambers, enter The Black Chambers</div>,
    "In The Black Chambers",
    <div>Find and defeat Doryiani, Royal Thaumaturge</div>,
    <div>Port back to town, walk through the gateway to enter Act 1 Cruel</div>,
  ],
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
  "3 Cruel": [
    "In Sandswept Marsh",
    <div>Find the exit to the Ziggurat Encampment (town).</div>,
    "In Town",
    <div>Talk to everyone and exit into Jungle Ruins</div>,
    "In Jungle Ruins",
    <div>Find the Exit to venom crypts (near waypoint)</div>,
    <div>Find and kill the mighty silverfist</div>,
    <div>Find and go through the exit to Infested Barrens</div>,
    "In Infested Barrens",
    <div>
      Find the exit to Chimeral Wetlands. Enter zone, take waypoint, backtrack
      to Infested Barrens.
    </div>,
    <div>
      Find the exit to Azak Bog. Enter zone, take waypoint, backtrack to
      Infested Barrens.
    </div>,
    <div>Find the exit to the Matlan Waterways and the waypoint.</div>,
    <div>
      Zone Note: Whichever waypoint you find last, use it to travel back to
      Jungle Ruins.
    </div>,
    "In Jungle Ruins",
    <div>Enter the Venom Crypts</div>,
    "In Venom Crypts",
    <div>Find the corpse for the venom phial, then go back to town</div>,
    "In Town",
    <div>
      Go back to town, turn in phial at Servi for a reward. This can not be
      changed later.
    </div>,
    <div>Go to the Azak Bog.</div>,
    "In Azak Bog",
    <div className="flex flex-row gap-2">
      <div className="italic">#Optional</div>Find the Flameskin ritual and
      activate all, it gives 25% fire res and rarity for the rest of the zone
    </div>,
    <div>Find and kill Ignagduk. Rewards 30 spirit.</div>,
    <div>Go back to town and then to The Chimeral Wetlands</div>,
    "In The Chimeral Wetlands",
    <div>Find and kill the chimeara boss</div>,
    <div>Enter Juquani's Machinarium</div>,
    "In Jiquani's Machinarium",
    <div>Find the first small soul core, then open the door</div>,
    <div>Find two more small soul cores</div>,
    <div>Find the exit towards Jiquani's sanctum</div>,
    <div>Find and kill Blackjaw. Rewards 10% fire res.</div>,
    <div>Checkpoint port to the exit, then go to Jiquani's Sanctum</div>,
    "In Jiquani's Sanctum",
    <div>Don't forget the activate the waypoint right after the entry.</div>,
    <div>Talk to Alva</div>,
    <div>Find two medium soul cores</div>,
    <div>"Activate both generators. Place down a portal BEFORE you activate the second generator."</div>,
    <div>Portal back to town and waypoint back to the Jiquani's Sanctum.</div>,
    <div>Kill Zicoatl, Warden of the core and loot the large soul core</div>,
    <div>Go back to the infested barrens waypoint</div>,
    "In Infested Barrens",
    <div>Insert the large soul core and go to Matlan Waterways afterwards</div>,
    "In Matlan Waterways",
    <div>Activate every single lever to navigate through the zone, then activate the big one at the end</div>,
    <div>Tp back to town</div>,
    "In Town",
    <div>Go down the stairs near the well / the hooded one</div>,
    <div>Talk to Alva, enter The Drowned City</div>,
    "In The Drowned City",
    <div>Find the exit to The Apex of Filth. Enter zone, take waypoint, and if it's your first character of the league; backtrack to The Drowned City.</div>,
    <div>Enter The Apex of Filth.</div>,
    "In The Apex of Filth",
    <div>Find and kill the queen of filth, then portal back to town</div>,
    "In Town",
    <div>Go down the stairs near the well / the hooded one again, and enter The Temple of Kopec</div>,
    "In The Temple of Kopec",
    <div>Go up the stairs twice, then kill Ketzuli, High Priest of The Sun</div>,
    "In Town",
    <div>Talk to Alva and ride the elevator up</div>,
    <div>Go through the gateway, then down the stairs again to enter Utzaal</div>,
    "In Utzaal",
    <div>Search and kill Viper Napuatzi.</div>,
    <div>Find the exit to Aggorat and enter Aggorat.</div>,
    "In Aggorat",
    <div>Follow the voices of the trial of Atziri, go through to find the next checkpoint</div>,
    <div>Find the exit towards the Black Chambers</div>,
    <div>Find the Sacrificial table</div>,
    <div>Farm The Sacrificial Heart if you haven't found it yet.</div>,
    <div>Use the checkpoint to go the sacrificial table, loot the dagger, place the heart, stab the heart</div>,
    <div>Use the checkpoint to go to The Black Chambers, enter The Black Chambers</div>,
    "In The Black Chambers",
    <div>Find and defeat Doryiani, Royal Thaumaturge</div>,
    <div>Port back to town, talk to Doryiana to finish the campaign!</div>,
  ],
};