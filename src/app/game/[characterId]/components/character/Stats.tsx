import { Stats as StatsType } from '@/data/characters';

type StatsProps = {
  stats: StatsType;
};

export const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="w-full h-full border-2 border-gray-300">
      <div>
        <p>Health: {stats.health}</p>
        <p>Mana: {stats.mana}</p>
        <p>Strength: {stats.strength}</p>
        <p>Dexterity: {stats.dexterity}</p>
        <p>Intelligence: {stats.intelligence}</p>
      </div>
    </div>
  );
};
