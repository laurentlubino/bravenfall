import 'server-only';

import { prisma } from '@/database/client';
import { Monster } from '@/database/generated/prisma-client';
import { cache } from 'react';

export const getMonsters = cache(async () => {
  const monsters = await prisma.monster.findMany();
  return monsters;
});

export const getMonster = cache(async (id: string) => {
  const monster = await prisma.monster.findUnique({ where: { id } });
  return monster;
});

export const createMonster = cache(async (data: Monster) => {
  const monster = await prisma.monster.create({ data });
  return monster;
});

export const updateMonster = cache(async (id: string, data: Monster) => {
  const monster = await prisma.monster.update({ where: { id }, data });
  return monster;
});

export const deleteMonster = cache(async (id: string) => {
  await prisma.monster.delete({ where: { id } });
});
