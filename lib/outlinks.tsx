// To generate outLinks, run the query selector in templates from the wiki. Needs manual cleaning
// document.querySelector("#mw-content-text > div.mw-parser-output > div.navbox > table").querySelectorAll("a").values().toArray().map(x => ({text: x.text, href: x.href}))
// https://www.poe2wiki.net/wiki/Template:Navbox_World
// Feed that into replaceWikiLinks to create actData with wiki link anchors

import React from "react";

const locationOutLinks = [
  {
    text: "The Riverbank",
    href: "https://www.poe2wiki.net/wiki/The_Riverbank",
  },
  {
    text: "Clearfell Encampment",
    href: "https://www.poe2wiki.net/wiki/Clearfell_Encampment",
  },
  {
    text: "Clearfell",
    href: "https://www.poe2wiki.net/wiki/Clearfell",
  },
  {
    text: "Mud Burrow",
    href: "https://www.poe2wiki.net/wiki/Mud_Burrow",
  },
  {
    text: "The Grelwood",
    href: "https://www.poe2wiki.net/wiki/The_Grelwood",
  },
  {
    text: "The Red Vale",
    href: "https://www.poe2wiki.net/wiki/The_Red_Vale",
  },
  {
    text: "The Grim Tangle",
    href: "https://www.poe2wiki.net/wiki/The_Grim_Tangle",
  },
  {
    text: "Cemetery of the Eternals",
    href: "https://www.poe2wiki.net/wiki/Cemetery_of_the_Eternals",
  },
  {
    text: "Mausoleum of the Praetor",
    href: "https://www.poe2wiki.net/wiki/Mausoleum_of_the_Praetor",
  },
  {
    text: "Tomb of the Consort",
    href: "https://www.poe2wiki.net/wiki/Tomb_of_the_Consort",
  },
  {
    text: "Hunting Grounds",
    href: "https://www.poe2wiki.net/wiki/Hunting_Grounds",
  },
  {
    text: "Freythorn",
    href: "https://www.poe2wiki.net/wiki/Freythorn",
  },
  {
    text: "Ogham Farmlands",
    href: "https://www.poe2wiki.net/wiki/Ogham_Farmlands",
  },
  {
    text: "Ogham Village",
    href: "https://www.poe2wiki.net/wiki/Ogham_Village",
  },
  {
    text: "The Manor Ramparts",
    href: "https://www.poe2wiki.net/wiki/The_Manor_Ramparts",
  },
  {
    text: "Ogham Manor",
    href: "https://www.poe2wiki.net/wiki/Ogham_Manor",
  },
  {
    text: "Vastiri Outskirts",
    href: "https://www.poe2wiki.net/wiki/Vastiri_Outskirts",
  },
  {
    text: "The Ardura Caravan",
    href: "https://www.poe2wiki.net/wiki/The_Ardura_Caravan",
  },
  {
    text: "Mawdun Quarry",
    href: "https://www.poe2wiki.net/wiki/Mawdun_Quarry",
  },
  {
    text: "Mawdun Mine",
    href: "https://www.poe2wiki.net/wiki/Mawdun_Mine",
  },
  {
    text: "Traitor's Passage",
    href: "https://www.poe2wiki.net/wiki/Traitor%27s_Passage",
  },
  {
    text: "Trial of the Sekhemas",
    href: "https://www.poe2wiki.net/wiki/Trial_of_the_Sekhemas",
  },
  {
    text: "The Halani Gates",
    href: "https://www.poe2wiki.net/wiki/The_Halani_Gates",
  },
  {
    text: "Keth",
    href: "https://www.poe2wiki.net/wiki/Keth",
  },
  {
    text: "The Lost City",
    href: "https://www.poe2wiki.net/wiki/The_Lost_City",
  },
  {
    text: "Buried Shrines",
    href: "https://www.poe2wiki.net/wiki/Buried_Shrines",
  },
  {
    text: "Mastodon Badlands",
    href: "https://www.poe2wiki.net/wiki/Mastodon_Badlands",
  },
  {
    text: "The Bone Pits",
    href: "https://www.poe2wiki.net/wiki/The_Bone_Pits",
  },
  {
    text: "Valley of the Titans",
    href: "https://www.poe2wiki.net/wiki/Valley_of_the_Titans",
  },
  {
    text: "The Titan Grotto",
    href: "https://www.poe2wiki.net/wiki/The_Titan_Grotto",
  },
  {
    text: "Deshar",
    href: "https://www.poe2wiki.net/wiki/Deshar",
  },
  {
    text: "Path of Mourning",
    href: "https://www.poe2wiki.net/wiki/Path_of_Mourning",
  },
  {
    text: "The Spires of Deshar",
    href: "https://www.poe2wiki.net/wiki/The_Spires_of_Deshar",
  },
  {
    text: "The Dreadnought",
    href: "https://www.poe2wiki.net/wiki/The_Dreadnought",
  },
  {
    text: "Dreadnought Vanguard",
    href: "https://www.poe2wiki.net/wiki/Dreadnought_Vanguard",
  },
  {
    text: "Sandswept Marsh",
    href: "https://www.poe2wiki.net/wiki/Sandswept_Marsh",
  },
  {
    text: "Ziggurat Encampment",
    href: "https://www.poe2wiki.net/wiki/Ziggurat_Encampment",
  },
  {
    text: "Jungle Ruins",
    href: "https://www.poe2wiki.net/wiki/Jungle_Ruins",
  },
  {
    text: "The Venom Crypts",
    href: "https://www.poe2wiki.net/wiki/The_Venom_Crypts",
  },
  {
    text: "Infested Barrens",
    href: "https://www.poe2wiki.net/wiki/Infested_Barrens",
  },
  {
    text: "The Azak Bog",
    href: "https://www.poe2wiki.net/wiki/The_Azak_Bog",
  },
  {
    text: "Chimeral Wetlands",
    href: "https://www.poe2wiki.net/wiki/Chimeral_Wetlands",
  },
  {
    text: "The Temple of Chaos",
    href: "https://www.poe2wiki.net/wiki/The_Temple_of_Chaos",
  },
  {
    text: "The Trial of Chaos",
    href: "https://www.poe2wiki.net/wiki/The_Trial_of_Chaos",
  },
  {
    text: "Jiquani's Machinarium",
    href: "https://www.poe2wiki.net/wiki/Jiquani%27s_Machinarium",
  },
  {
    text: "Jiquani's Sanctum",
    href: "https://www.poe2wiki.net/wiki/Jiquani%27s_Sanctum",
  },
  {
    text: "The Matlan Waterways",
    href: "https://www.poe2wiki.net/wiki/The_Matlan_Waterways",
  },
  {
    text: "The Drowned City",
    href: "https://www.poe2wiki.net/wiki/The_Drowned_City",
  },
  {
    text: "The Molten Vault",
    href: "https://www.poe2wiki.net/wiki/The_Molten_Vault",
  },
  {
    text: "Apex of Filth",
    href: "https://www.poe2wiki.net/wiki/Apex_of_Filth",
  },
  {
    text: "Temple of Kopec",
    href: "https://www.poe2wiki.net/wiki/Temple_of_Kopec",
  },
  {
    text: "Utzaal",
    href: "https://www.poe2wiki.net/wiki/Utzaal",
  },
  {
    text: "Aggorat",
    href: "https://www.poe2wiki.net/wiki/Aggorat",
  },
  {
    text: "The Black Chambers",
    href: "https://www.poe2wiki.net/wiki/The_Black_Chambers",
  },
  {
    text: "Epilogue",
    href: "https://www.poe2wiki.net/wiki/Epilogue",
  },
  {
    text: "The Ziggurat Refuge",
    href: "https://www.poe2wiki.net/wiki/The_Ziggurat_Refuge",
  },
];

const npcOutLinks = [
  {
    text: "Wounded Man",
    href: "https://www.poe2wiki.net/wiki/Wounded_Man",
  },
  {
    text: "Renly",
    href: "https://www.poe2wiki.net/wiki/Renly",
  },
  {
    text: "Finn",
    href: "https://www.poe2wiki.net/wiki/Finn",
  },
  {
    text: "Una",
    href: "https://www.poe2wiki.net/wiki/Una",
  },
  {
    text: "The Hooded One",
    href: "https://www.poe2wiki.net/wiki/The_Hooded_One",
  },
  {
    text: "Lachlann",
    href: "https://www.poe2wiki.net/wiki/Lachlann_the_Lost",
  },
  {
    text: "Leitis",
    href: "https://www.poe2wiki.net/wiki/Leitis",
  },
  {
    text: "Shambrin",
    href: "https://www.poe2wiki.net/wiki/Shambrin",
  },
  {
    text: "Zarka",
    href: "https://www.poe2wiki.net/wiki/Zarka",
  },
  {
    text: "Sekhema Asala",
    href: "https://www.poe2wiki.net/wiki/Sekhema_Asala",
  },
  {
    text: "The Hooded One",
    href: "https://www.poe2wiki.net/wiki/The_Hooded_One",
  },
  {
    text: "Risu",
    href: "https://www.poe2wiki.net/wiki/Risu",
  },
  {
    text: "Halani, the Water Goddess",
    href: "https://www.poe2wiki.net/wiki/Halani,_the_Water_Goddess",
  },
  {
    text: "Balbala, the Advisor",
    href: "https://www.poe2wiki.net/wiki/Balbala,_the_Advisor",
  },
  {
    text: "Oswald",
    href: "https://www.poe2wiki.net/wiki/Oswald",
  },
  {
    text: "Servi",
    href: "https://www.poe2wiki.net/wiki/Servi",
  },
  {
    text: "Alva",
    href: "https://www.poe2wiki.net/wiki/Alva",
  },
  {
    text: "The Hooded One",
    href: "https://www.poe2wiki.net/wiki/The_Hooded_One",
  },
  {
    text: "Gwendolyn Albright",
    href: "https://www.poe2wiki.net/wiki/Gwendolyn_Albright",
  },
  {
    text: "Sebastian Carroway",
    href: "https://www.poe2wiki.net/wiki/Sebastian_Carroway",
  },
  {
    text: "Cauldron Keeper",
    href: "https://www.poe2wiki.net/wiki/Cauldron_Keeper",
  },
  {
    text: "Doryani",
    href: "https://www.poe2wiki.net/wiki/Doryani",
  },
  {
    text: "The Trialmaster",
    href: "https://www.poe2wiki.net/wiki/The_Trialmaster",
  },
];

const monstersOutLinks = [
  {
    "text": "The Bloated Miller",
    "href": "https://www.poe2wiki.net/wiki/The_Bloated_Miller"
  },
  {
    "text": "Beira of the Rotten Pack",
    "href": "https://www.poe2wiki.net/wiki/Beira_of_the_Rotten_Pack"
  },
  {
    "text": "The Devourer",
    "href": "https://www.poe2wiki.net/wiki/The_Devourer"
  },
  {
    "text": "The Brambleghast",
    "href": "https://www.poe2wiki.net/wiki/The_Brambleghast"
  },
  {
    "text": "The Rust King",
    "href": "https://www.poe2wiki.net/wiki/The_Rust_King"
  },
  {
    "text": "The Rotten Druid",
    "href": "https://www.poe2wiki.net/wiki/The_Rotten_Druid"
  },
  {
    "text": "Asinia, the Praetor's Consort",
    "href": "https://www.poe2wiki.net/wiki/Asinia,_the_Praetor%27s_Consort"
  },
  {
    "text": "Draven, the Eternal Praetor",
    "href": "https://www.poe2wiki.net/wiki/Draven,_the_Eternal_Praetor"
  },
  {
    "text": "Lachlann of Endless Lament",
    "href": "https://www.poe2wiki.net/wiki/Lachlann_of_Endless_Lament"
  },
  {
    "text": "The Crowbell",
    "href": "https://www.poe2wiki.net/wiki/The_Crowbell"
  },
  {
    "text": "The King in the Mists",
    "href": "https://www.poe2wiki.net/wiki/The_King_in_the_Mists_(Freythorn)"
  },
  {
    "text": "The Executioner",
    "href": "https://www.poe2wiki.net/wiki/The_Executioner"
  },
  {
    "text": "Candlemass, the Living Rite",
    "href": "https://www.poe2wiki.net/wiki/Candlemass,_the_Living_Rite"
  },
  {
    "text": "Rathbreaker",
    "href": "https://www.poe2wiki.net/wiki/Rathbreaker"
  },
  {
    "text": "Rudja, the Dread Engineer",
    "href": "https://www.poe2wiki.net/wiki/Rudja,_the_Dread_Engineer"
  },
  {
    "text": "Balbala, the Traitor",
    "href": "https://www.poe2wiki.net/wiki/Balbala,_the_Traitor"
  },
  {
    "text": "Jamanra, the Risen King",
    "href": "https://www.poe2wiki.net/wiki/Jamanra,_the_Risen_King"
  },
  {
    "text": "Iktab, the Deathlord",
    "href": "https://www.poe2wiki.net/wiki/Iktab,_the_Deathlord"
  },
  {
    "text": "Ekbab, Ancient Steed",
    "href": "https://www.poe2wiki.net/wiki/Ekbab,_Ancient_Steed"
  },
  {
    "text": "Kabala, Constrictor Queen",
    "href": "https://www.poe2wiki.net/wiki/Kabala,_Constrictor_Queen"
  },
  {
    "text": "Azarian, the Forsaken Son",
    "href": "https://www.poe2wiki.net/wiki/Azarian,_the_Forsaken_Son"
  },
  {
    "text": "Zalmarath, the Colossus",
    "href": "https://www.poe2wiki.net/wiki/Zalmarath,_the_Colossus"
  },
  {
    "text": "Tor Gul, the Defiler",
    "href": "https://www.poe2wiki.net/wiki/Tor_Gul,_the_Defiler"
  },
  {
    "text": "Rootdredge",
    "href": "https://www.poe2wiki.net/wiki/Rootdredge"
  },
  {
    "text": "Mighty Silverfist",
    "href": "https://www.poe2wiki.net/wiki/Mighty_Silverfist"
  },
  {
    "text": "Ignagduk, the Bog Witch",
    "href": "https://www.poe2wiki.net/wiki/Ignagduk,_the_Bog_Witch"
  },
  {
    "text": "Xyclucian, the Chimera",
    "href": "https://www.poe2wiki.net/wiki/Xyclucian,_the_Chimera"
  },
  {
    "text": "Blackjaw, the Remnant",
    "href": "https://www.poe2wiki.net/wiki/Blackjaw,_the_Remnant"
  },
  {
    "text": "Zicoatl, Warden of the Core",
    "href": "https://www.poe2wiki.net/wiki/Zicoatl,_Warden_of_the_Core"
  },
  {
    "text": "The Queen of Filth",
    "href": "https://www.poe2wiki.net/wiki/The_Queen_of_Filth"
  },
  {
    "text": "Mektul, the Forgemaster",
    "href": "https://www.poe2wiki.net/wiki/Mektul,_the_Forgemaster"
  },
  {
    "text": "Ketzuli, High Priest of the Sun",
    "href": "https://www.poe2wiki.net/wiki/Ketzuli,_High_Priest_of_the_Sun"
  },
  {
    "text": "Viper Napuatzi",
    "href": "https://www.poe2wiki.net/wiki/Viper_Napuatzi"
  },
  {
    "text": "Count Geonor",
    "href": "https://www.poe2wiki.net/wiki/Count_Geonor"
  },
  {
    "text": "Jamanra, the Abomination",
    "href": "https://www.poe2wiki.net/wiki/Jamanra,_the_Abomination"
  },
  {
    "text": "Doryani, Royal Thaumaturge",
    "href": "https://www.poe2wiki.net/wiki/Doryani,_Royal_Thaumaturge"
  },
];

const replaceTextWithLinks = (input: string) => {
  // Sort locationOutLinks by descending text length to avoid partial matches
  const sortedLinks = [...locationOutLinks, ...npcOutLinks, ...monstersOutLinks].sort(
    (a, b) => b.text.length - a.text.length
  );

  // Create a regex pattern to match all location names
  const pattern = new RegExp(
    sortedLinks.map((link) => `\\b${link.text}\\b`).join("|"),
    "g"
  );

  return input
    .split(pattern)
    .reduce<React.ReactNode[]>((acc, part, index, arr) => {
      acc.push(part);
      if (index < arr.length - 1) {
        const match = input.match(pattern)?.[index];
        const link = sortedLinks.find((link) => link.text === match);
        if (link)
          acc.push(
            <a
              className="text-secondary-foreground"
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          );
      }
      return acc;
    }, []);
};

export const HighlightedText = ({ text }: { text: string }) => {
  return <div>{replaceTextWithLinks(text)}</div>;
};
