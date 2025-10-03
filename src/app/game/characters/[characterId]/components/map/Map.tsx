import { getMap } from '@/data/maps';
import { Tile as TileType } from '@/database/generated/prisma-client';
import { EmptyTile } from './EmptyTile';
import { Tile } from './Tile';

type MapProps = {
  playerPosition: {
    x: number;
    y: number;
    mapId: string;
  };
};

export const Map = async ({ playerPosition }: MapProps) => {
  const map = await getMap(playerPosition.mapId);

  if (!map) {
    return <div>Map not found</div>;
  }

  const mapArray: (TileType | null)[][] = Array.from(
    { length: map.size_y },
    (_, y) =>
      Array.from(
        { length: map.size_x },
        (_, x) => map.tiles.find((t) => t.row === y && t.col === x) ?? null
      )
  );

  return (
    <div className="w-full h-full border-2 border-gray-300 relative">
      <h2 className="text-2xl font-bold absolute">{map.name}</h2>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex flex-col">
          {mapArray.map((row, y) =>
            row.map((tile, x) =>
              tile ? (
                <Tile key={`${x}-${y}`} tile={tile} />
              ) : (
                <EmptyTile key={`${x}-${y}`} />
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};
