import { ComponentType, FC, ReactElement } from "react";

export class LocationSteps {
  title: string;
  steps: React.JSX.Element[];
  hasWaypoint: boolean;

  constructor(title: string, steps: React.JSX.Element[], hasWaypoint: boolean) {
    this.title = title;
    this.steps = steps;
    this.hasWaypoint = hasWaypoint;
  }
}

export const actToAlmostLocationSteps: Record<string, Array<{
  title: string;
  steps: string[];
  hasWaypoint: boolean;}>> = {
  "1": [
    {
      title: "In The Riverbank",
      steps: ["Kill The Bloated Miller then enter town"],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: ["Hand in quests and head out to Clearfell"],
      hasWaypoint: false,
    },
    {
      title: "In Clearfell",
      steps: [
        "Kill Beira of the Rotten Pack. She's North/North East of the waypoint. Rewards 10% Cold Res.",
        "Find the entrance to The Grelwood.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Grelwood",
      steps: [
        "Find the waypoint and talk to the quest NPC. Usually central.",
        "Find the entrance to The Grim Tangle, take the waypoint, and go back to The Grelwood.",
        "Find the entrance to The Red Vale and go through.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Red Vale",
      steps: [
        "Find the three obelisks and get the three quest items.",
        "After getting the third, WP to town and talk to Renly to acquire the Runed Spikes. WP to The Grelwood.",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Grelwood",
      steps: [
        "Summon and talk to Una.",
        "Stab the tree with your runed spikes then talk to Una.",
        "Go back to town, talk to NPCs, then head to The Grim Tangle via waypoint to The Grelwood.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Grim Tangle",
      steps: [
        "Find the entrance to the Cemetery of The Eternals. The Druid boss can be skipped.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Cemetary of The Eternals",
      steps: [
        "Find Mausoleum of the Praetor and kill the boss in there.",
        "Find the Tomb of the Consort and kill the boss in there.",
        "Talk to Lachlann, open the gate, and kill him. ☹",
        "Enter Hunting Grounds",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Hunting Grounds",
      steps: [
        "Find and kill The Crowbell. Rewards two skill points.",
        "Find and enter Ogham Farmlands.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Farmlands",
      steps: [
        "Find Una's lute. Usually around the center of the zone. Rewards 2 skill points.",
        "Find and kill Vargir The Feral Mutt in the Crop Circle. Drops a level 4 skill gem.",
        "Find and take the entrance to Ogham Village and WP back to the Hunting Grounds.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Hunting Grounds",
      steps: ["Find and enter Freythorn."],
      hasWaypoint: true,
    },
    {
      title: "In Freythorn",
      steps: [
        "Do all 4 rituals, killing The King in the Mists at the end. Rewards 30 spirit.",
        "TP back to town and waypoint to Ogham Village.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Village",
      steps: [
        "If it's your first character of the league; Find Smithing Tools.",
        "Find and kill The Executioner",
        "Go to The Manor Ramparts",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Manor Ramparts",
      steps: [
        "Find the entrance to to Ogham Manor. This is always in the opposite direction of the waypoint after you zone in.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Manor",
      steps: [
        "Find and kill Candlemass, the Living Rite",
        "Find and go down stairs twice",
        "Find elevator to boss, kill boss, go back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "If it's your first character of the league; Talk to Renly to turn in the smithing tools",
        "Talk to The Hooded One to go to act 2",
      ],
      hasWaypoint: false,
    },
  ],
  "2": [
    {
      title: "In Vastiri Outskirts",
      steps: [
        "Find and kill Rathbreaker",
        "Portal back to camp, enter The Ardura Caravan",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Speak to everyone then use the desert map to go to Mawdun Quarry",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Mawdun Quarry",
      steps: ["Find and take the entrance to Mawdun Mine"],
      hasWaypoint: true,
    },
    {
      title: "In Mawdun Mine",
      steps: ["Find and kill Rudja, the Dread Engineer", "Talk to Risu then portal back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Risu, then use desert map to go to The Halani Gates gates",
        "Talk to Sekhema Asala at the gates, go back to the caravan, talk to Risu again, then to Sekhema Asala again",
        "Use desert map to go to The Halani Gates gates again",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Traitor's Passage",
      steps: [
        "Find and kill Basala, pick up the Djinn Barya quest item",
        "Find the entrance to The Halani Gates",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Halani Gates",
      steps: [
        "Find and kill Jamanra, the Risen King. Stay close to the canyon. Cross the canyon 3 times to find the boss.",
        "Go down the stairs and to the bottom right of the zone, then back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Use the desert map to go to the Trial of Sekhemas",
        "Talk to everyone, then use desert map to go to Keth",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Keth",
      steps: [
        "Kill Kabala, Constrictor Queen, the constrictor queen. Rewards 2 skill points.",
        "Kill snakes until you find the Kabala Clan relic.",
        "Find and enter The Lost City",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Lost City",
      steps: [
        "Find Entrance and go to Buried Shrines, then the Heart of Keth",
        "Kill Azarian, the Forsaken Son",
        "Talk to Halani, the Water Goddess, loot the cinders, burn the goddess, loot the essence of water.",
        "Head back to town.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Use desert map to go to Mastodon Badlands"],
      hasWaypoint: false,
    },
    {
      title: "In Mastodon Badlands",
      steps: ["Find the Entrance to The Bone Pits"],
      hasWaypoint: true,
    },
    {
      title: "In The Bone Pits",
      steps: [
        "Find and kill the zone boss and loot the horn",
        "Kill Hyenas until you found the sun clan relic",
        "TP back to town.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Use desert map to go to Valley of the Titans"],
      hasWaypoint: false,
    },
    {
      title: "In Valley of the Titans",
      steps: [
        "Find and click the three ancient seals",
        "Find the medallion and place the two relics in there. Rewards a permanent buff.",
        "Find and take the entrance to The Titan Grotto",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Titan Grotto",
      steps: ["Find and kill the boss, then go back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Zarka, then Sekhema Asala",
        "Use the desert map to travel to the halani gates",
        "Go to the front of the caravan and sound the horn",
        "Use the desert map to travel to Deshar",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Deshar",
      steps: [
        "Find the final letter on a corpse on the ground. Rewards two skill points on hand in.",
        "Find the entrance to the path of mourning",
        "Go the The Path of Mourning",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Path of Mourning",
      steps: ["Find the entrance to The Spires of Deshar"],
      hasWaypoint: true,
    },
    {
      title: "In The Spires of Deshar",
      steps: [
        "Find the sisters of Garukhan",
        "Find and kill Tor Gul, the Defiler",
        "Portal back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Turn in the final letter at Shambrin",
        "Talk to everyone, then use desert map to go to The Dreadnought",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Dreadnought",
      steps: [
        "Find the entrance to The Dreadnought vanguard, then find and kill Jamanra, the Abomination",
        "Portal back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Leave the Caravan and talk to The Hooded One",
        "Go back to the Caravan and talk to Sekhema Asala to go to Act 3",
      ],
      hasWaypoint: false,
    },
  ],
  "3": [
    {
      title: "In Sandswept Marsh",
      steps: ["Find the entrance to the Ziggurat Encampment (town)."],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Talk to everyone and entrance into Jungle Ruins"],
      hasWaypoint: false,
    },
    {
      title: "In Jungle Ruins",
      steps: [
        "Find the entrance to The Venom Crypts (near waypoint)",
        "Find and kill Mighty Silverfist",
        "Find and go through the entrance to Infested Barrens",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Infested Barrens",
      steps: [
        "Find the entrance to Chimeral Wetlands. Enter zone, take waypoint, backtrack to Infested Barrens.",
        "Find the entrance to The Azak Bog. Enter zone, take waypoint, backtrack to Infested Barrens.",
        "Find the entrance to The Matlan Waterways and the waypoint.",
        "Zone Note: Whichever waypoint you find last, use it to travel back to Jungle Ruins.",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Jungle Ruins",
      steps: ["Enter The Venom Crypts"],
      hasWaypoint: true,
    },
    {
      title: "In Venom Crypts",
      steps: ["Find the corpse for the venom phial, then go back to town"],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Go back to town, turn in phial at Servi for a reward. This can not be changed later.",
        "Go to The Azak Bog.",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Azak Bog",
      steps: [
        "Optional: Find the Flameskin ritual and activate all, it gives 25% fire res and rarity for the rest of the zone",
        "Find and kill Ignagduk, the Bog Witch. Rewards 30 spirit.",
        "Go back to town and then to The Chimeral Wetlands",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Chimeral Wetlands",
      steps: [
        "Find the temple/Trial of Chaos. ",
        "Find and kill Xyclucian, the Chimera",
        "Enter Jiquani's Machinarium",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Jiquani's Machinarium",
      steps: [
        "Find the first small soul core, then open the door",
        "Find two more small soul cores",
        "Find the entrance towards Jiquani's Sanctum",
        "Find and kill Blackjaw, the Remnant. Rewards 10% fire res.",
        "Checkpoint port to the entrance, then go to Jiquani's Sanctum",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Jiquani's Sanctum",
      steps: [
        "Don't forget the activate the waypoint right after the entry.",
        "Talk to Alva",
        "Find two medium soul cores",
        "Activate both generators. Place down a portal BEFORE you activate the second generator.",
        "Portal back to town and waypoint back to the Jiquani's Sanctum.",
        "Kill Zicoatl, Warden of the Core and loot the large soul core",
        "Go back to Infested Barrens waypoint",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Infested Barrens",
      steps: [
        "Insert the large soul core and go to The Matlan Waterways afterwards",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Matlan Waterways",
      steps: [
        "Activate every single lever to navigate through the zone, then activate the big one at the end",
        "Tp back to town",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Go down the stairs near the well / The Hooded One",
        "Talk to Alva, enter The Drowned City",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Drowned City",
      steps: [
        "If it's your first character of the league; Find the entrance to The Molten Vault. Enter zone, take waypoint, backtrack to The Drowned City.",
        "Find the entrance to The Apex of Filth. Enter zone, take waypoint, and if it's your first character of the league; backtrack to The Drowned City.",
        "If it's your first character of the league; Enter the Molten Vault. Otherwise enter The Apex of Filth.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Molten Vault",
      steps: [
        "Find and kill the boss, then talk to Oswald back in town",
        "Enter The Apex of Filth",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Apex of Filth",
      steps: ["Find and kill The Queen of Filth, then portal back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Go down the stairs near the well / The Hooded One again, and enter The Temple of Kopec",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Temple of Kopec",
      steps: [
        "Go up the stairs twice, then kill Ketzuli, High Priest of the Sun",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Alva and ride the elevator up",
        "Go through the gateway, then down the stairs again to enter Utzaal",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Utzaal",
      steps: [
        "Search and kill Viper Napuatzi.",
        "Find the entrance to Aggorat and enter Aggorat.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Aggorat",
      steps: [
        "Follow the voices of the Trial of Atziri, go through to find the next checkpoint",
        "Find the entrance towards The Black Chambers",
        "Find the sacrificial table",
        "Farm The Sacrificial Heart if you haven't found it yet.",
        "Use the checkpoint to go the sacrificial table, loot the dagger, place the heart, stab the heart",
        "Use the checkpoint to go to The Black Chambers",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Black Chambers",
      steps: [
        "Find and defeat Doryani, Royal Thaumaturge",
        "Port back to town, walk through the gateway to enter Act 1 Cruel",
      ],
      hasWaypoint: true,
    },
  ],
  "1 Cruel": [
    {
      title: "In Town",
      steps: [
        "Kill The Bloated Miller then enter town",
        "Hand in quests and head out to Clearfell",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Clearfell",
      steps: [
        "Kill Beira of the Rotten Pack. She's North/North East of the waypoint. Rewards 10% Cold Res.",
        "Find the entrance to The Grelwood.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Grelwood",
      steps: [
        "Find the waypoint and talk to the quest NPC. Usually central.",
        "Find the entrance to The Grim Tangle, take the waypoint, and go back to The Grelwood.",
        "Find the entrance to The Red Vale and go through.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Red Vale",
      steps: [
        "Find the three obelisks and get the three quest items.",
        "After getting the third, WP to town and talk to Renly to acquire the Runed Spikes. WP to The Grelwood.",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Grelwood",
      steps: [
        "Summon and talk to Una.",
        "Stab the tree with your runed spikes then talk to Una.",
        "Go back to town, talk to NPCs, then head to The Grim Tangle via waypoint to The Grelwood.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Grim Tangle",
      steps: [
        "Find the entrance to Cemetery of the Eternals. The Druid boss can be skipped.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Cemetary of The Eternals",
      steps: [
        "Find Mausoleum of the Praetor and kill the boss in there.",
        "Find Tomb of the Consort and kill the boss in there.",
        "Talk to Lachlann, open the gate, and kill him. ☹",
        "Enter Hunting Grounds",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Hunting Grounds",
      steps: [
        "Find and kill The Crowbell. Rewards two skill points.",
        "Find and enter Ogham Farmlands.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Farmlands",
      steps: [
        "Find Una's lute. Usually around the center of the zone. Rewards 2 skill points.",
        "Find and take the entrance to Ogham Village.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Village",
      steps: ["Find and kill The Executioner", "Go to The Manor Ramparts"],
      hasWaypoint: true,
    },
    {
      title: "In The Manor Ramparts",
      steps: [
        "Find the entrance to Ogham Manor. This is always in the opposite direction of the waypoint after you zone in.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Manor",
      steps: [
        "Find and kill Candlemass, the Living Rite",
        "Find and go down stairs twice",
        "Find elevator to boss, kill boss, go back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Talk to The Hooded One to go to act 2"],
      hasWaypoint: true,
    },
  ],
  "2 Cruel": [
    {
      title: "In Vastiri Outskirts",
      steps: [
        "Find and kill Rathbreaker",
        "Portal back to camp, enter caravan",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Speak to everyone then use the desert map to go to Mawdun Quarry",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Mawdun Quarry",
      steps: ["Find and take the entrance to Mawdun Mine"],
      hasWaypoint: true,
    },
    {
      title: "In Mawdun Mine",
      steps: ["Find and kill Rudja, the Dread Engineer", "Talk to Risu then portal back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Risu, then use desert map to go to The Halani Gates",
        "Talk to Sekhema Asala at the gates, go back to the caravan, talk to Risu again, then to Sekhema Asala again",
        "Use desert map to go to The Halani Gates again",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Traitor's Passage",
      steps: ["Find the entrance to The Halani Gates"],
      hasWaypoint: true,
    },
    {
      title: "In The Halani Gates",
      steps: [
        "Find and kill Jamanra, the Risen King. Stay close to the canyon. Cross the canyon 3 times to find the boss.",
        "Go down the stairs and to the bottom right of the zone, then back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Talk to everyone, then use desert map to go to Keth"],
      hasWaypoint: false,
    },
    {
      title: "In Keth",
      steps: [
        "Kill Kabala, Constrictor Queen. Rewards 2 skill points.",
        "Kill snakes until you find the Kabala Clan relic.",
        "Find and enter The Lost City.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Lost City",
      steps: [
        "Find entrance and go to the Buried Shrines, then the heart of keth",
        "Kill Azarian, the Forsaken Son",
        "Talk to Halani, the Water Goddess, loot the cinders, burn the goddess, loot the essence of water.",
        "Head back to town.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Use desert map to go to Mastodon Badlands"],
      hasWaypoint: false,
    },
    {
      title: "In Mastodon Badlands",
      steps: ["Find the entrance to The Bone Pits"],
      hasWaypoint: true,
    },
    {
      title: "In The Bone Pits",
      steps: [
        "Find and kill the zone boss and loot the horn",
        "Kill hyenas until you found the sun clan relic",
        "Tp back to town.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Use desert map to go to Valley of the Titans"],
      hasWaypoint: false,
    },
    {
      title: "In Valley of the Titans",
      steps: [
        "Find and click the three ancient seals",
        "Find the medallion and place the two relics in there. Rewards a permanent buff.",
        "Find and take the entrance to The Titan Grotto",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Titan Grotto",
      steps: ["Find and kill the boss, then go back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Zarka, then Asala",
        "Use the desert map to travel to the halani gates",
        "Go to the front of the caravan and sound the horn",
        "Use the desert map to travel to Deshar",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Deshar",
      steps: [
        "Find the final letter on a corpse on the ground. Rewards two skill points on hand in.",
        "Find the entrance to the path of mourning",
        "Go the The Path of Mourning",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Path of Mourning",
      steps: ["Find the entrance to the Spires of Deshar"],
      hasWaypoint: true,
    },
    {
      title: "In Spires of Deshar",
      steps: [
        "Find the sisters of Garukhan",
        "Find and kill Tor Gul, the Defiler",
        "Portal back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Turn in the final letter at Shambrin",
        "Talk to everyone, then use desert map to go to the dreadnought",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Dreadnought",
      steps: [
        "Find the entrance to the Dreadnought Vanguard, then find and kill Jamanra, the Abomination",
        "Portal back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Leave the The Ardura Caravan and talk to The Hooded One",
        "Go back to The Ardura Caravan and talk to Sekhema Asala to go to Act 3",
      ],
      hasWaypoint: false,
    },
  ],
  "3 Cruel": [
    {
      title: "In Sandswept Marsh",
      steps: ["Find the entrance to the Ziggurat Encampment (town)."],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Talk to everyone and entrance into Jungle Ruins"],
      hasWaypoint: false,
    },
    {
      title: "In Jungle Ruins",
      steps: [
        "Find the entrance to The Venom Crypts (near waypoint)",
        "Find and kill Mighty Silverfist",
        "Find and go through the entrance to Infested Barrens",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Infested Barrens",
      steps: [
        "Find the entrance to Chimeral Wetlands. Enter zone, take waypoint, backtrack to Infested Barrens.",
        "Find the entrance to The Azak Bog. Enter zone, take waypoint, backtrack to Infested Barrens.",
        "Find the entrance to The Matlan Waterways and the waypoint.",
        "Zone Note: Whichever waypoint you find last, use it to travel back to Jungle Ruins.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Jungle Ruins",
      steps: ["Enter The Venom Crypts"],
      hasWaypoint: true,
    },
    {
      title: "In The Venom Crypts",
      steps: ["Find the corpse for the venom phial, then go back to town"],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Go back to town, turn in phial at Servi for a reward. This can not be changed later.",
        "Go to The Azak Bog.",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Azak Bog",
      steps: [
        "Find the Flameskin ritual and activate all, it gives 25% fire res and rarity for the rest of the zone",
        "Find and kill Ignagduk. Rewards 30 spirit.",
        "Go back to town and then to The Chimeral Wetlands",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Chimeral Wetlands",
      steps: ["Find and kill Xyclucian, the Chimera", "Enter Jiquani's Machinarium"],
      hasWaypoint: true,
    },
    {
      title: "In Jiquani's Machinarium",
      steps: [
        "Find the first small soul core, then open the door",
        "Find two more small soul cores",
        "Find the entrance towards Jiquani's Sanctum",
        "Find and kill Blackjaw. Rewards 10% fire res.",
        "Checkpoint port to the entrance, then go to Jiquani's Sanctum",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Jiquani's Sanctum",
      steps: [
        "Don't forget the activate the waypoint right after the entry.",
        "Talk to Alva",
        "Find two medium soul cores",
        '"Activate both generators. Place down a portal BEFORE you activate the second generator."',
        "Portal back to town and waypoint back to the Jiquani's Sanctum.",
        "Kill Zicoatl, Warden of the core and loot the large soul core",
        "Go back to Infested Barrens waypoint",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Infested Barrens",
      steps: [
        "Insert the large soul core and go to The Matlan Waterways afterwards",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Matlan Waterways",
      steps: [
        "Activate every single lever to navigate through the zone, then activate the big one at the end",
        "Tp back to town",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Go down the stairs near the well / The Hooded One",
        "Talk to Alva, enter The Drowned City",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Drowned City",
      steps: [
        "Find the entrance to The Apex of Filth. Enter zone, take waypoint, and if it's your first character of the league; backtrack to The Drowned City.",
        "Enter The Apex of Filth.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Apex of Filth",
      steps: ["Find and kill The Queen of Filth, then portal back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Go down the stairs near the well / The Hooded One again, and enter The Temple of Kopec",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Temple of Kopec",
      steps: [
        "Go up the stairs twice, then kill Ketzuli, High Priest of the Sun",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Alva and ride the elevator up",
        "Go through the gateway, then down the stairs again to enter Utzaal",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Utzaal",
      steps: [
        "Search and kill Viper Napuatzi.",
        "Find the entrance to Aggorat and enter Aggorat.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Aggorat",
      steps: [
        "Follow the voices of the Trial of Atziri, go through to find the next checkpoint",
        "Find the entrance towards The Black Chambers",
        "Find the sacrificial table",
        "Farm The Sacrificial Heart if you haven't found it yet.",
        "Use the checkpoint to go the sacrificial table, loot the dagger, place the heart, stab the heart",
        "Use the checkpoint to go to The Black Chambers, enter The Black Chambers",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Black Chambers",
      steps: [
        "Find and defeat Doryani, Royal Thaumaturge",
        "Port back to town, talk to Doryiana to finish the campaign!",
      ],
      hasWaypoint: true,
    },
  ],
};


