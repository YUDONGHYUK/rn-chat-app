import { useApi } from '@/libs/axios';
import { useMutation } from '@tanstack/react-query';

export function useAuthCallback() {
  const api = useApi();

  return useMutation({
    mutationFn: async () => {
      const { data } = await api.post('/auth/callback');
      return data;
    },
  });
}
