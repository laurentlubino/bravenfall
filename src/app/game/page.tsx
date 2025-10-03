import { FireLink } from '@/components/FireLink';
import { getCharacters } from '@/data/characters';
import { redirect } from 'next/navigation';

export default async function Game() {
  const characters = await getCharacters();

  if (characters.length === 0) {
    return redirect('/game/characters/create');
  }

  return (
    <div
      className="w-full h-screen flex flex-col gap-2 justify-center items-center"
      style={{
        backgroundImage: 'url(/forge_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2>Character Selection</h2>
      <div>
        {characters.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </div>
      <FireLink href="/game/studio">Studio</FireLink>
    </div>
  );
}
