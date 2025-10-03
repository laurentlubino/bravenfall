import { Table } from '@/components/Table';
import { getMonsters } from '@/data/monsters';

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
      <div className="flex flex-row justify-between items-center p-4 mb-4 border-b border-gray-200/20">
        <h1>Monsters</h1>
        <div>
          <button>Create Monster</button>
        </div>
      </div>
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
