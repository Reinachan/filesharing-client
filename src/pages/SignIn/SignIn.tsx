import { use, useState, useTransition } from "react";

import { getToken } from "api";
import { SessionContext } from "contexts";

const display = "block";

// TODO: this is a placeholder for now, just to add the basic functionality
export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { user, setAuth, clearAuth } = use(SessionContext);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setErr("");
    startTransition(async () => {
      try {
        await setAuth((await getToken(username, password)).token);
      } catch (err) {
        if (err instanceof Error) {
          setErr(err.message);
        }
      }
    });
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clearAuth();
  };

  return (
    <>
      <form style={{ margin: 100 }}>
        <p>{user?.user.username}</p>
        <input
          style={{ display }}
          onChange={(e) => {
            setUsername(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          style={{ display }}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <button type="button" onClick={handleClear} disabled={isPending}>
          Sign Out
        </button>
        <button type="submit" onClick={handleSubmit} disabled={isPending}>
          Sign In
        </button>
        {isPending && <p>loading</p>}
        {err && <p>{err}</p>}
      </form>
    </>
  );
}
