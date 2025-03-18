import { useMemo, useState } from "react";

import { getCurrentUserPermissions } from "api";
import { loadAuth, removeAuth, saveAuth } from "utils";

import { SessionContext } from "./SessionContext";

import type { SessionContextType, Session } from "types";

/**
 * Custom context provider for authentication that exports functions for setting and clearing authentication
 */
export function SessionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<Session | undefined>(loadAuth());

  const contextValue = useMemo<SessionContextType>(() => {
    const setAuth = async (newToken: string) => {
      const permissions = await getCurrentUserPermissions(newToken);
      if (!permissions) return;
      setUser({ token: newToken, user: permissions.user });
      saveAuth({ token: newToken, user: permissions.user });
    };

    const clearAuth = () => {
      setUser(undefined);
      removeAuth();
    };

    return { user, setAuth, clearAuth };
  }, [user, setUser]);

  return <SessionContext value={contextValue}>{children}</SessionContext>;
}
