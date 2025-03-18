import { createContext } from "react";

import type { SessionContextType } from "types";

/**
 * A session context that contains the user's information, as well as a way to set the token and clear it
 * @param user the user along with their permissions and token
 * @param setAuth sets the new token and fetches the permissions for the user and saves it to localstorage
 * @param clearAuth signs the user out and clears all their locally stored data
 */
export const SessionContext = createContext<SessionContextType>({
  user: undefined,
  // eslint-disable-next-line @typescript-eslint/require-await
  setAuth: async (_newToken: string) => {
    return;
  },
  clearAuth: () => {
    return;
  },
});
