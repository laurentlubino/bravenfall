import { getCharacterById } from '@/services/characters';
import { getMapById } from '@/services/maps';
import { Actions } from './components/actions/Actions';
import { Character } from './components/character/Character';
import { Map } from './components/Map';

export default async function Game() {
  const character = await getCharacterById(1);
  const map = await getMapById(character.position.mapId);
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col w-1/2">
        <Map
          map={map}
          playerPosition={{ x: character.position.x, y: character.position.y }}
        />
        <Character character={character} />
      </div>
      <div className="flex flex-col w-1/2">
        <Actions />
      </div>
    </div>
  );
}
