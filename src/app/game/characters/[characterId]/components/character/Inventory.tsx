import { Inventory as InventoryType } from '@/data/characters';

type InventoryProps = {
  inventory: InventoryType;
};

export const Inventory = ({ inventory }: InventoryProps) => {
  return (
    <div className="w-full h-full border-2 border-gray-300 overflow-y-auto flex flex-row">
      {inventory.map(({ item, quantity }) => (
        <div key={item.id} className="h-24 w-24 border-2 border-gray-300">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-18 w-24 border-2 border-gray-300"
          />
          <p>
            {item.name} x {quantity}
          </p>
        </div>
      ))}
    </div>
  );
};
