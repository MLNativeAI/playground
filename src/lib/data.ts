export interface ApiKeyData {
  name: string;
  authScope: AuthScope;
  jwt: string;
}

export type AuthScope = 'User' | 'Admin';
