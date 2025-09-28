import { Character as CharacterType } from '@/services/characters';

type CharacterProps = {
  character: CharacterType;
};

export const Character = ({ character }: CharacterProps) => {
  return (
    <div className="w-full h-full border-2 border-gray-300">
      <div>
        <img src={character.avatarUrl} alt={character.name} />
      </div>
      <div>
        <h3>Stats</h3>
        <p>Health: {character.stats.health}</p>
        <p>Mana: {character.stats.mana}</p>
        <p>Strength: {character.stats.strength}</p>
        <p>Dexterity: {character.stats.dexterity}</p>
        <p>Intelligence: {character.stats.intelligence}</p>
      </div>
    </div>
  );
};
