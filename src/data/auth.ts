import 'server-only';

import { UnauthorizedError } from '@/utils/errors';
import { currentUser } from '@clerk/nextjs/server';
import { cache } from 'react';

export const getCurrentAuthUser = cache(async () => {
  const authUser = await currentUser();
  if (!authUser) {
    throw new UnauthorizedError();
  }
  return authUser;
});
