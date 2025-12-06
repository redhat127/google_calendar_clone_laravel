import type { Auth } from '@/types';
import { usePage } from '@inertiajs/react';

export const useAuth = () => {
  const {
    props: { auth },
  } = usePage<{ auth: Auth }>();
  return auth?.data;
};
