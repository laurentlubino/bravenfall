import 'server-only';

import { prisma } from '@/database/client';
import { Map } from '@/database/generated/prisma-client';
import { cache } from 'react';

export const getMaps = cache(async () => {
  const maps = await prisma.map.findMany({
    include: {
      tiles: true,
    },
  });
  return maps;
});

export const getMap = cache(async (id: string) => {
  const map = await prisma.map.findUnique({
    where: { id },
    include: { tiles: true },
  });
  return map;
});

export const createMap = cache(async (data: Map) => {
  const map = await prisma.map.create({ data });
  return map;
});

export const updateMap = cache(async (id: string, data: Map) => {
  const map = await prisma.map.update({ where: { id }, data });
  return map;
});

export const deleteMap = cache(async (id: string) => {
  await prisma.map.delete({ where: { id } });
});
