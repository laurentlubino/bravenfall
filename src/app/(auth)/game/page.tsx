import { getAuth } from '@/services/auth';

export default async function Game() {
  const { userId } = await getAuth();
  if (!userId) {
    return <div>User not found</div>;
  }
  //   const user = await getUserByAuthId(userId);
  if (!userId) {
    return <div>User not found</div>;
  }
  return <div>Character Selection</div>;
}
