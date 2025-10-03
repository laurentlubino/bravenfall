import { Table } from '@/components/Table';
import { getItems } from '@/data/items';

const TABLE_HEADERS = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'type',
    label: 'Type',
  },
  {
    key: 'price',
    label: 'Price',
  },
  {
    key: 'createdAt',
    label: 'Created At',
  },
  {
    key: 'updatedAt',
    label: 'Updated At',
  },
];

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="w-full h-full p-6">
      <div className="flex flex-row justify-between items-center p-4 mb-4 border-b border-gray-200/20">
        <h1>Items</h1>
        <div>
          <button>Create Item</button>
        </div>
      </div>
      <div className="w-full h-full">
        <Table
          color="transparent"
          columns={TABLE_HEADERS}
          data={items.map((item) => ({
            ...item,
          }))}
        />
      </div>
    </div>
  );
}
