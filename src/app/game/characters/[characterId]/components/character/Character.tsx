import { Character as CharacterType } from '@/data/characters';
import { Equipment } from './Equipment';
import { Info } from './Info';
import { Inventory } from './Inventory';
import { Stats } from './Stats';

type CharacterProps = {
  character: CharacterType;
};

export const Character = ({ character }: CharacterProps) => {
  return (
    <div className="w-full h-full border-2 border-gray-300 flex flex-col">
      <Info character={character} />
      <div className="w-full h-full flex flex-row ">
        <div className="flex flex-col w-1/3">
          <Equipment equipment={character.equipment} />
          <Stats stats={character.stats} />
        </div>
        <div className="flex flex-col w-2/3">
          <Inventory inventory={character.inventory} />
        </div>
      </div>
    </div>
  );
};
