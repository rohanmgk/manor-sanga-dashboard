export type UserRole = 'admin' | 'leader' | 'member';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  groupId?: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}