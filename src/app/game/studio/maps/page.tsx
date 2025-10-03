import { Table } from '@/components/Table';
import { getMaps } from '@/data/maps';
import { PageHeader } from '../components/PageHeader';

const TABLE_HEADERS = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'order',
    label: 'Order',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'size_x',
    label: 'Width',
  },
  {
    key: 'size_y',
    label: 'Height',
  },
  {
    key: 'tiles',
    label: 'Tiles Count',
    render: (value: any) => (Array.isArray(value) ? value.length : 0),
  },
  {
    key: 'createdAt',
    label: 'Created At',
    render: (value: any) => new Date(value).toLocaleDateString(),
  },
  {
    key: 'updatedAt',
    label: 'Updated At',
    render: (value: any) => new Date(value).toLocaleDateString(),
  },
];

export default async function MapsPage() {
  const maps = await getMaps();

  return (
    <div className="w-full h-full p-6">
      <PageHeader
        title="Maps"
        create={{ label: 'Create Map', href: '/game/studio/maps/create' }}
      />
      <div className="w-full h-full">
        <Table
          color="transparent"
          columns={TABLE_HEADERS}
          data={maps.map((map) => ({
            ...map,
          }))}
        />
      </div>
    </div>
  );
}
