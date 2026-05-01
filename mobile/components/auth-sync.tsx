import { useAuthCallback } from '@/hooks/use-auth';
import { useAuth, useUser } from '@clerk/expo';
import { useEffect, useRef } from 'react';

export default function AuthSync() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const { mutate: syncUser } = useAuthCallback();
  const hasSync = useRef(false); // this is used to not run useEffect more than once

  useEffect(() => {
    if (isSignedIn && user && !hasSync.current) {
      hasSync.current = true;

      syncUser(undefined, {
        onSuccess: (data) => {
          console.log('User synced with backend:', data.name);
        },
        onError: (data) => {
          console.log('User sync failed for the user:', data.name);
        },
      });
    }

    if (!isSignedIn) {
      hasSync.current = false;
    }
  }, [isSignedIn, user, syncUser]);

  return null;
}
