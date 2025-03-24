import { use } from "react";
import { NavLink } from "react-router";

import { SessionContext } from "contexts";

export default function NavBar() {
  const { user } = use(SessionContext);

  return (
    <nav>
      <NavLink to="/download" end>
        Download
      </NavLink>

      {user?.user.permissions.upload_files && (
        <NavLink to="/upload" end>
          Upload
        </NavLink>
      )}

      {user?.user.permissions.list_files && (
        <NavLink to="/files" end>
          Files
        </NavLink>
      )}

      {user?.user.permissions.manage_users && (
        <NavLink to="/users" end>
          Users
        </NavLink>
      )}

      {user ? (
        <NavLink to="/profile" end>
          {user.user.username}
        </NavLink>
      ) : (
        <NavLink to="/signin" end>
          Sign in
        </NavLink>
      )}
    </nav>
  );
}
