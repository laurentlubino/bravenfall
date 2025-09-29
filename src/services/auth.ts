import { auth } from '@clerk/nextjs/server';

export const getAuth = async () => {
  return await auth();
};
