import 'server-only';

import { getCharacter } from '@/data/characters';
import { Actions } from './components/actions/Actions';
import { Character } from './components/character/Character';
import { Map } from './components/map/Map';

export default async function Game({
  params,
}: {
  params: { characterId: string };
}) {
  const character = await getCharacter(params.characterId);

  if (!character || !character.position) {
    return <div>Character not found</div>;
  }

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col w-1/2">
        <Map playerPosition={character.position} />
        <Character character={character} />
      </div>
      <div className="flex flex-col w-1/2">
        <Actions />
      </div>
    </div>
  );
}
