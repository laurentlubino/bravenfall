'use client';

import { BlurryCard } from '@/components/BlurryCard';
import { FireButton } from '@/components/FireButton';

export default function CreateCharacterPage() {
  return (
    <div
      className="w-full h-screen flex flex-col gap-2 justify-center items-center"
      style={{
        backgroundImage: 'url(/forge_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <BlurryCard className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-2">Create Character</h2>
        <input
          type="text"
          placeholder="Character Name"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <select className="border-2 border-gray-300 rounded-md p-2">
          <option value="WARRIOR">Warrior</option>
          <option value="MAGE">Mage</option>
          <option value="RANGER">Ranger</option>
          <option value="SPELLBLADE">Spellblade</option>
          <option value="ROGUE">Rogue</option>
          <option value="TRICKSTER">Trickster</option>
        </select>
        <FireButton onClick={() => {}}>Create</FireButton>
      </BlurryCard>
    </div>
  );
}
