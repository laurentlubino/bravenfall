import { getCharacter } from '@/data/characters';

type InfoProps = {
  character: Awaited<ReturnType<typeof getCharacter>>;
};

export const Info = ({ character }: InfoProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-24 h-24">
        <img src={character.id} alt={character.name} />
      </div>
      <div className="flex flex-col">
        <h3>Name: {character.name}</h3>
        <p>Level: {character.statistic?.level}</p>
      </div>
      <div>
        <p>
          Gold:{' '}
          {
            character.inventory?.items.find((item) => item.item.type === 'GOLD')
              ?.quantity
          }
        </p>
        <p>
          Experience: {character.statistic?.experience} /{' '}
          {character.statistic?.nextLevelExperience}
        </p>
      </div>
      <div>
        <p>Health: {character.statistic?.health}</p>
        <p>Mana: {character.statistic?.mana}</p>
      </div>
      <div>
        <p>Movement Points: {character.actionPoints?.move}</p>
        <p>Attack Points: {character.actionPoints?.attack}</p>
      </div>
    </div>
  );
};
