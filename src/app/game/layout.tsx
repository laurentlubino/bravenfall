import { getUserByAuthId } from '@/data/users';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { Suspense } from 'react';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authUser = await currentUser();
  const user = await getUserByAuthId(authUser?.id ?? '');

  if (!authUser) {
    return (
      <SignedOut>
        <div className="w-full h-screen flex flex-row gap-2 justify-center items-center">
          <SignInButton
            mode="modal"
            withSignUp
            appearance={{
              elements: {
                rootBox: 'p-2 bg-blue-500 text-white',
              },
            }}
          />
        </div>
      </SignedOut>
    );
  }

  if (!user) {
    return (
      <Suspense fallback={<div>Creating user...</div>}>
        <div>User created!</div>
      </Suspense>
    );
  }

  return (
    <>
      <SignedIn>{children}</SignedIn>
    </>
  );
}
