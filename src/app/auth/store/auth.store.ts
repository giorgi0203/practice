import { Store, StoreConfig } from '@datorama/akita';
import { getToken, getEmail } from '@core/utils/auth';

export interface AuthState {
  token: string;
  email: string;
}

export function createInitialState(): AuthState {
  const token = getToken();
  const email = getEmail();
  return {
    token,
    email
  };
}

@StoreConfig({ name: 'Auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}