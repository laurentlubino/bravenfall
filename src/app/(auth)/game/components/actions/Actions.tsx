import { Enemies } from './Enemies';

export const Actions = () => {
  return (
    <div className="w-full h-full border-2 border-gray-300">
      <div className="w-full h-24 border-b-2 border-gray-300">
        <button>Enemies</button>
      </div>
      <div className="w-full h-full">
        <Enemies />
      </div>
    </div>
  );
};
