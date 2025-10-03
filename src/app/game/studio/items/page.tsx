import { Table } from '@/components/Table';
import { getItems } from '@/data/items';
import { PageHeader } from '../components/PageHeader';

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
      <PageHeader
        title="Items"
        create={{ label: 'Create Item', href: '/game/studio/items/create' }}
      />
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
