import { Enemies } from './Enemies';

export const Actions = () => {
  return (
    <div className="flex flex-col w-full h-full border-2 border-gray-300">
      <div className="w-full border-b-2 border-gray-300">
        <button>Enemies</button>
      </div>
      <div className="w-full h-full">
        <Enemies />
      </div>
    </div>
  );
};
