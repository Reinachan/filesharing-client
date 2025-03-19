import { apiUrl } from "constant";

import type { User } from "types";

/**
 * Gets the currently signed in user's details, including permissions
 * @param token the user authentication bearer token
 * @returns {User} the user along with their permissions
 */
export const getCurrentUserPermissions = async (token: string) => {
  if (!token) return;
  try {
    const res = await fetch(`${apiUrl}/api/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return (await res.json()) as User;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
