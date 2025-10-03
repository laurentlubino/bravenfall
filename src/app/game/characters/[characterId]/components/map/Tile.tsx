import { Tile as TileType } from '@/database/generated/prisma-client';

type TileProps = {
  tile: TileType;
};

export const Tile = ({ tile }: TileProps) => {
  return <div className="w-10 h-10 border-2 border-gray-300">{tile.name}</div>;
};
