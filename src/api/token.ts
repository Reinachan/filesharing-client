import { apiUrl } from "constant";

import type { Token } from "types";

/**
 * Requests a bearer token from the server
 * @param username
 * @param password
 * @returns {Token} the user token from the server
 */
export async function getToken(username: string, password: string) {
  const res = await fetch(`${apiUrl}/api/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return (await res.json()) as Token;
}
