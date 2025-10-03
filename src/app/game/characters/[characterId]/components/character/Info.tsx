import { Character as CharacterType } from '@/data/characters';

type InfoProps = {
  character: CharacterType;
};

export const Info = ({ character }: InfoProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-24 h-24">
        <img src={character.avatarUrl} alt={character.name} />
      </div>
      <div className="flex flex-col">
        <h3>Name: {character.name}</h3>
        <p>Level: {character.level}</p>
      </div>
      <div>
        <p>Gold: {character.gold}</p>
        <p>
          Experience: {character.experience} / {character.nextLevelExperience}
        </p>
      </div>
      <div>
        <p>Health: {character.stats.health}</p>
        <p>Mana: {character.stats.mana}</p>
      </div>
      <div>
        <p>Movement Points: {character.actionPoints.move}</p>
        <p>Attack Points: {character.actionPoints.attack}</p>
      </div>
    </div>
  );
};
