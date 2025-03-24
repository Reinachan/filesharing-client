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
            Download
          </NavLink>
        </li>

        {user?.user.permissions.upload_files && (
          <li>
            <NavLink to="/upload" end>
              Upload
            </NavLink>
          </li>
        )}

        {user?.user.permissions.list_files && (
          <li>
            <NavLink to="/files" end>
              Files
            </NavLink>
          </li>
        )}

        {user?.user.permissions.manage_users && (
          <li>
            <NavLink to="/users" end>
              Users
            </NavLink>
          </li>
        )}

        <li>
          {user ? (
            <NavLink to="/profile" end>
              {user.user.username}
            </NavLink>
          ) : (
            <NavLink to="/signin" end>
              Sign in
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
