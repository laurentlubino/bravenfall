import { prisma } from '@/database/client';

export const getUserByAuthId = async (authId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      authId,
    },
  });
  return user;
};

export const createUser = async (authId: string) => {
  const user = await prisma.user.create({
    data: {
      authId,
    },
  });
  return user;
};
