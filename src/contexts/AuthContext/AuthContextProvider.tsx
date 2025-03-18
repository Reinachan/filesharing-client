import { useCallback, useMemo, useState } from "react";

import { getCurrentUserPermissions } from "api";
import { loadAuth, removeAuth, saveAuth } from "utils";

import { AuthContext } from "./AuthContext";

import type { AuthContextType, AuthSession } from "types";

/**
 * Custom context provider for authentication that exports functions for setting and clearing authentication
 */
export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AuthSession | undefined>(loadAuth());

  const contextValue = useMemo<AuthContextType>(() => {
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

  return <AuthContext value={contextValue}>{children}</AuthContext>;
}
