import 'server-only';

import { Table } from '@/components/Table';
import { getMonsters } from '@/data/monsters';
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
    key: 'description',
    label: 'Description',
  },
  {
    key: 'statisticId',
    label: 'Statistic ID',
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

export default async function MonstersPage() {
  const monsters = await getMonsters();

  return (
    <div className="w-full h-full p-6">
      <PageHeader
        title="Monsters"
        create={{
          label: 'Create Monster',
          href: '/game/studio/monsters/create',
        }}
      />
      <div className="w-full h-full">
        <Table
          color="transparent"
          columns={TABLE_HEADERS}
          data={monsters.map((monster) => ({
            ...monster,
          }))}
        />
      </div>
    </div>
  );
}
