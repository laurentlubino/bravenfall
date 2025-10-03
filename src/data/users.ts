import 'server-only';

import { prisma } from '@/database/client';
import { cache } from 'react';
import { getCurrentAuthUser } from './auth';

export const getOrCreateUser = cache(async (authId: string) => {
  let user = await prisma.user.findUnique({
    where: {
      authId: authId,
    },
    include: {
      characters: true,
    },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        authId: authId,
      },
      include: {
        characters: true,
      },
    });
  }

  return user;
});

export const getMe = cache(async () => {
  const user = await getCurrentAuthUser();
  return await getOrCreateUser(user.id);
});
