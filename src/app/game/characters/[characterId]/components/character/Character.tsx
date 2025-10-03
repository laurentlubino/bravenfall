import { getCharacter } from '@/data/characters';
import { Equipment } from './Equipment';
import { Info } from './Info';
import { Inventory } from './Inventory';
import { Stats } from './Stats';

type CharacterProps = {
  character: Awaited<ReturnType<typeof getCharacter>>;
};

export const Character = ({ character }: CharacterProps) => {
  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="w-full h-full border-2 border-gray-300 flex flex-col">
      <Info character={character} />
      <div className="w-full h-full flex flex-row ">
        <div className="flex flex-col w-1/3">
          <Equipment equipment={character.equipment} />
          <Stats stats={character.statistic} />
        </div>
        <div className="flex flex-col w-2/3">
          <Inventory inventory={character.inventory} />
        </div>
      </div>
    </div>
  );
};
