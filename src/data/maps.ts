const TILE_SIZE = 80;

type Tile = {
  name: string;
  image: string;
  color: string; // css color
  width: number;
  height: number;
};

const TILES_TYPES: Record<string, Tile> = {
  GRASS: {
    name: 'Grass',
    image: 'grass.png',
    color: '#7BB369',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  LAKE: {
    name: 'Lake',
    image: 'lake.png',
    color: '#49c0ec',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  FOREST: {
    name: 'Forest',
    image: 'forest.png',
    color: '#228B22',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  MOUNTAIN: {
    name: 'Mountain',
    image: 'rock.png',
    color: '#7a7372',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  DESERT: {
    name: 'Desert',
    image: 'sand.png',
    color: '#FAD5A5',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  OASIS: {
    name: 'Oasis',
    image: 'oasis.png',
    color: '#30D5C8',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  WATERFALL: {
    name: 'Waterfall',
    image: 'waterfall.png',
    color: '#1994b3',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_WALL_FRONT: {
    name: 'Castle Wall Front',
    image: 'castle_wall_front.png',
    color: '#444444',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_WALL_FRONT_DOOR: {
    name: 'Castle Wall Front Door',
    image: 'castle_wall_front_door.png',
    color: '#444444',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_WALL_BACK: {
    name: 'Castle Wall Back',
    image: 'castle_wall_back.png',
    color: '#444444',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_WALL_LEFT: {
    name: 'Castle Wall Left',
    image: 'castle_wall_left.png',
    color: '#444444',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_WALL_RIGHT: {
    name: 'Castle Wall Right',
    image: 'castle_wall_right.png',
    color: '#444444',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_COURT_FLOOR: {
    name: 'Castle Court Floor',
    image: 'castle_floor.png',
    color: '#808080',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_COURT_WALL: {
    name: 'Castle Court Wall',
    image: 'castle_wall.png',
    color: '#444444',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_COURT_STAIRS: {
    name: 'Castle Court Stairs',
    image: 'castle_stairs.png',
    color: '#666666',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_TOWER_FLOOR_1: {
    name: 'Castle Tower Floor 1',
    image: 'castle_tower_floor_1.png',
    color: '#222222',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  CASTLE_TOWER_FLOOR_2: {
    name: 'Castle Tower Floor 2',
    image: 'castle_tower_floor_2.png',
    color: '#222222',
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
};

type TileTypes = keyof typeof TILES_TYPES;

type MapTileConfig = TileTypes[][];

type MapConfig = {
  id: number;
  name: string;
  tiles: MapTileConfig;
};

type MapTile = {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  tile: Tile;
};

export type Map = {
  id: number;
  name: string;
  tiles: MapTile[][];
};

const mapBuilder = (tiles: MapConfig): Map => {
  return {
    id: tiles.id,
    name: tiles.name,
    tiles: tiles.tiles.map((row, rowIndex) =>
      row.map((tile, columnIndex) => ({
        id: columnIndex + rowIndex,
        x: columnIndex,
        y: rowIndex,
        width: TILES_TYPES[tile].width,
        height: TILES_TYPES[tile].height,
        tile: TILES_TYPES[tile],
      }))
    ),
  };
};

const mapOneConfig: MapConfig = {
  id: 1,
  name: 'The Shattered Marches of Bravenfall',
  tiles: [
    [
      'GRASS',
      'GRASS',
      'MOUNTAIN',
      'CASTLE_WALL_LEFT',
      'CASTLE_WALL_BACK',
      'CASTLE_WALL_BACK',
      'CASTLE_WALL_BACK',
      'CASTLE_TOWER_FLOOR_2',
    ],
    [
      'GRASS',
      'GRASS',
      'MOUNTAIN',
      'CASTLE_WALL_LEFT',
      'CASTLE_COURT_FLOOR',
      'CASTLE_COURT_FLOOR',
      'CASTLE_COURT_FLOOR',
      'CASTLE_TOWER_FLOOR_1',
    ],
    [
      'GRASS',
      'GRASS',
      'MOUNTAIN',
      'CASTLE_WALL_LEFT',

      'CASTLE_COURT_STAIRS',
      'CASTLE_COURT_WALL',
      'CASTLE_COURT_WALL',
      'CASTLE_COURT_WALL',
    ],
    [
      'GRASS',
      'GRASS',
      'MOUNTAIN',
      'CASTLE_WALL_LEFT',
      'CASTLE_COURT_FLOOR',
      'CASTLE_COURT_FLOOR',
      'CASTLE_COURT_FLOOR',
      'CASTLE_COURT_FLOOR',
    ],
    [
      'GRASS',
      'GRASS',
      'WATERFALL',
      'CASTLE_WALL_LEFT',
      'CASTLE_WALL_FRONT',
      'CASTLE_WALL_FRONT',
      'CASTLE_WALL_FRONT',
      'CASTLE_WALL_FRONT_DOOR',
    ],
    [
      'FOREST',
      'FOREST',
      'FOREST',
      'FOREST',
      'FOREST',
      'DESERT',
      'DESERT',
      'DESERT',
    ],
    [
      'FOREST',
      'LAKE',
      'FOREST',
      'FOREST',
      'FOREST',
      'DESERT',
      'OASIS',
      'DESERT',
    ],
  ],
};

const MAPS = [mapBuilder(mapOneConfig)];

export const getMapById = async (id: number) => {
  const map = MAPS.find((map) => map.id === id);
  if (!map) {
    throw new Error('Map not found');
  }
  return map;
};
