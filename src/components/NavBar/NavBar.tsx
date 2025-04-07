import { use } from "react";
import { NavLink } from "react-router";

import { SessionContext } from "contexts";

import style from "./NavBar.module.css";

export default function NavBar() {
  const { user } = use(SessionContext);

  return (
    <nav className={style.NavBar}>
      <ul>
        <li>
          <NavLink to="/download" end>
            <span>Download</span>
          </NavLink>
        </li>

        {user?.user.permissions.upload_files && (
          <li>
            <NavLink to="/upload" end>
              <span>Upload</span>
            </NavLink>
          </li>
        )}

        {user?.user.permissions.list_files && (
          <li>
            <NavLink to="/files" end>
              <span>Files</span>
            </NavLink>
          </li>
        )}

        {user?.user.permissions.manage_users && (
          <li>
            <NavLink to="/users" end>
              <span>Users</span>
            </NavLink>
          </li>
        )}

        <li>
          {user ? (
            <NavLink to="/profile" end>
              <span>{user.user.username}</span>
            </NavLink>
          ) : (
            <NavLink to="/signin" end>
              <span>Sign in</span>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
