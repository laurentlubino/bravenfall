import { Map as MapType } from '@/data/maps';

type MapProps = {
  map: MapType;
  playerPosition: {
    x: number;
    y: number;
  };
};

export const Map = ({ map, playerPosition }: MapProps) => {
  return (
    <div className="w-full h-full border-2 border-gray-300 relative">
      <h2 className="text-2xl font-bold absolute">{map.name}</h2>
      <div className="flex flex-col w-full h-full justify-center items-center">
        {map.tiles.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row">
            {row.map((tile, tileIndex) => (
              <div
                key={tileIndex}
                className={`flex justify-center items-center relative`}
                style={{
                  width: tile.tile.width,
                  height: tile.tile.height,
                  backgroundColor: tile.tile.color,
                  //   backgroundImage: `url(./${tile.tile.image})`,
                }}
              >
                <span className="absolute top-0 left-0">{tile.tile.name}</span>
                {playerPosition.x === rowIndex &&
                  playerPosition.y === tileIndex && (
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
