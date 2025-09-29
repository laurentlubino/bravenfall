export type Stats = {
  health: number;
  mana: number;
  strength: number;
  dexterity: number;
  intelligence: number;
};

export type ActionPoints = {
  move: number;
  attack: number;
};

type Item = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  type: string;
  sellPrice: number;
  buyPrice: number;
  stats: {
    health?: number;
    mana?: number;
    strength?: number;
    dexterity?: number;
    intelligence?: number;
  };
};

export type Inventory = { item: Item; quantity: number }[];

export type Equipment = {
  leftHandWeapon?: Item;
  rightHandWeapon?: Item;
  leftArmArmor?: Item;
  rightArmArmor?: Item;
  chestArmor?: Item;
  legsArmor?: Item;
  feetArmor?: Item;
  headArmor?: Item;
  handsRing?: Item;
  necklace?: Item;
};

export type Character = {
  id: number;
  name: string;
  level: number;
  experience: number;
  nextLevelExperience: number;
  gold: number;
  avatarUrl: string;
  position: {
    mapId: number;
    x: number;
    y: number;
  };
  actionPoints: ActionPoints;
  stats: Stats;
  inventory: Inventory;
  equipment: Equipment;
};

export const getCharacterById = async (id: number): Promise<Character> => {
  return {
    id,
    name: 'John Doe',
    level: 1,
    experience: 0,
    nextLevelExperience: 100,
    gold: 0,
    avatarUrl: 'https://via.placeholder.com/150',
    inventory: [
      {
        item: {
          id: 1,
          name: 'Item 1',
          description: 'Item 1 description',
          imageUrl: 'https://via.placeholder.com/150',
          type: 'item',
          sellPrice: 100,
          buyPrice: 100,
          stats: {
            health: 100,
            mana: 100,
          },
        },
        quantity: 1,
      },
      {
        item: {
          id: 2,
          name: 'Item 2',
          description: 'Item 2 description',
          imageUrl: 'https://via.placeholder.com/150',
          type: 'item',
          sellPrice: 100,
          buyPrice: 100,
          stats: {
            health: 100,
            mana: 100,
          },
        },
        quantity: 1,
      },
    ],
    actionPoints: {
      move: 100,
      attack: 100,
    },
    stats: {
      health: 100,
      mana: 50,
      strength: 5,
      dexterity: 5,
      intelligence: 5,
    },
    position: {
      mapId: 1,
      x: 0,
      y: 0,
    },
    equipment: {},
  };
};
