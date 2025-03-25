import { logo } from "assets";

import { NavBar } from "components/NavBar";

import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.Header}>
      <img src={logo} />
      <NavBar></NavBar>
    </header>
  );
}
