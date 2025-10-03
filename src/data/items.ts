import 'server-only';

import { prisma } from '@/database/client';
import { Item } from '@/database/generated/prisma-client';
import { cache } from 'react';

export const getItems = cache(async () => {
  const items = await prisma.item.findMany();
  return items;
});

export const getItem = cache(async (id: string) => {
  const item = await prisma.item.findUnique({ where: { id } });
  return item;
});

export const createItem = cache(async (data: Item) => {
  const item = await prisma.item.create({ data });
  return item;
});

export const updateItem = cache(async (id: string, data: Item) => {
  const item = await prisma.item.update({ where: { id }, data });
  return item;
});

export const deleteItem = cache(async (id: string) => {
  await prisma.item.delete({ where: { id } });
});
