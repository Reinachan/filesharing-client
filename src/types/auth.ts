import type { User } from "./user";

export interface Token {
  token: string;
}

export interface Session extends Token {
  user: User["user"];
}

export interface SessionContextType {
  user: Session | undefined;
  setAuth: (newToken: string) => Promise<void>;
  clearAuth: () => void;
}
