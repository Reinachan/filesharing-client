import type { Session } from "types";

/** saves the user session to localstorage */
export const saveAuth = (user: Session) => {
  if (!user.token) return;

  localStorage.setItem("auth", JSON.stringify(user));
};

/** removes user session from localstorage */
export const removeAuth = () => {
  localStorage.removeItem("auth");
};

/**
 * loads user session from localstorage
 * @returns {Session} user session
 */
export const loadAuth = () => {
  const storage = localStorage.getItem("auth");
  if (storage) return JSON.parse(storage) as Session;
};
