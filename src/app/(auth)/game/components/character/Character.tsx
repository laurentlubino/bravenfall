'use client';
import { Character as CharacterType } from '@/services/characters';
import { useState } from 'react';
import { Equipment } from './Equipment';
import { Inventory } from './Inventory';
import { Stats } from './Stats';

type CharacterProps = {
  character: CharacterType;
};

export const Character = ({ character }: CharacterProps) => {
  const [selectedTab, setSelectedTab] = useState<
    'inventory' | 'equipment' | 'stats'
  >('stats');
  return (
    <div className="w-full h-full border-2 border-gray-300">
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
      <div className="flex flex-row">
        <button onClick={() => setSelectedTab('inventory')}>Inventory</button>
        <button onClick={() => setSelectedTab('equipment')}>Equipment</button>
        <button onClick={() => setSelectedTab('stats')}>Stats</button>
      </div>
      <div>
        {selectedTab === 'stats' && <Stats />}
        {selectedTab === 'inventory' && <Inventory />}
        {selectedTab === 'equipment' && <Equipment />}
      </div>
    </div>
  );
};
