// To generate locationOutLinks, run the query selector in templates from the wiki. Needs manual cleaning
// document.querySelector("#mw-content-text > div.mw-parser-output > div.navbox > table").querySelectorAll("a").values().toArray().map(x => ({text: x.text, href: x.href}))
// https://www.poe2wiki.net/wiki/Template:Navbox_World
// Feed that into replaceWikiLinks to create actData with wiki link anchors

import { ComponentType, FC } from "react";
import { actToAlmostLocationSteps, LocationSteps } from "./actData";
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
const replaceTextWithLinks = (input: string) => {
  // Sort locationOutLinks by descending text length to avoid partial matches
  const sortedLinks = [...locationOutLinks].sort(
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
