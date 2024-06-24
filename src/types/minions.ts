export enum Ability {
  hasTaunt,
  hasShield,
  hasReborn,
  hasAvenge,
  hasWindfury,
  hasMagnetic,
  hasVenomous,
  hasBattlecry,
  hasSpellcraft,
  hasDeathrattle,
}

export enum Website {
  wiki,
  blizzard,
  bgknowhow,
  hearthpwn,
}

export enum MinionType {
  Naga = "Naga",
  Mech = "Mech",
  Beast = "Beast",
  Demon = "Demon",
  Pirate = "Pirate",
  Murloc = "Murloc",
  Dragon = "Dragon",
  Undead = "Undead",
  Quilboar = "Quilboar",
  Elemental = "Elemental",
}

export interface IMinion {
  id: string;
  name: string;
  type: string;
  pool: string;
  tier: number;
  text: string;
  health: number;
  attack: number;
  types: string[];
  pools: string[];
  picture: string;
  artist?: string;
  flavor?: string;
  isToken: boolean;
  nameShort: string;
  summonId?: string;
  isActive: boolean;
  textGolden: string;
  pictureSmall: string;
  isDuelsOnly: boolean;
  attackGolden: number;
  healthGolden: number;
  websites: Record<keyof typeof Website, string>;
  abilities: Record<keyof typeof Ability, boolean>[];
}
