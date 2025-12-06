export type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  provider_name: string;
  avatar: string | null;
};

export type FlashMessage = {
  type: 'error' | 'success';
  text: string;
} | null;

export type Auth = { data: User } | null;
