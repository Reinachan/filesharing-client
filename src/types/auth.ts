import type { User } from "./user";

export interface Token {
  token: string;
}

export interface AuthSession extends Token {
  user: User["user"];
}

export interface AuthContextType {
  user: AuthSession | undefined;
  setAuth: (newToken: string) => Promise<void>;
  clearAuth: () => void;
}
