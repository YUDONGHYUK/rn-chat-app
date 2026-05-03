import { useAuthCallback } from '@/hooks/use-auth';
import { useAuth, useUser } from '@clerk/expo';
import { useEffect, useRef } from 'react';
<<<<<<< Updated upstream
=======
import * as Sentry from '@sentry/react-native';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
        },
        onError: (data) => {
          console.log('User sync failed for the user:', data.name);
=======
          Sentry.logger.info(`User synced with backend: ${data.name}`, {
            userId: user.id,
            userName: data.name,
          });
        },
        onError: (error) => {
          console.log('User sync failed for the user:', error);
          Sentry.logger.error('Failed to sync user with backend', {
            userId: user.id,
            error: error instanceof Error ? error.message : String(error),
          });
>>>>>>> Stashed changes
        },
      });
    }

    if (!isSignedIn) {
      hasSync.current = false;
    }
  }, [isSignedIn, user, syncUser]);

  return null;
}
