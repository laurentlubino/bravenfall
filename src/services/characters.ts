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

export type Character = {
  id: number;
  name: string;
  avatarUrl: string;
  position: {
    mapId: number;
    x: number;
    y: number;
  };
  actionPoints: {
    move: number;
    attack: number;
  };
  stats: {
    health: number;
    mana: number;
    strength: number;
    dexterity: number;
    intelligence: number;
  };
  inventory: {
    items: { item: Item; quantity: number }[];
  };
  equipment: {
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
};

export const getCharacterById = async (id: number): Promise<Character> => {
  return {
    id,
    name: 'John Doe',
    avatarUrl: 'https://via.placeholder.com/150',
    inventory: {
      items: [],
    },
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
