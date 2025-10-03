import 'server-only';

import { prisma } from '@/database/client';
import { ForbiddenError, NotFoundError } from '@/utils/errors';
import { cache } from 'react';
import { getMe } from './users';

export const getCharacters = cache(async () => {
  const user = await getMe();
  const characters = await prisma.character.findMany({
    where: {
      userId: user.id,
    },
  });
  return characters;
});

export const getCharacter = cache(async (id: string) => {
  const user = await getMe();

  const character = await prisma.character.findUnique({
    where: { id },
  });
  if (character?.userId !== user.id) {
    throw new ForbiddenError();
  }
  if (!character) {
    throw new NotFoundError();
  }

  return character;
});
