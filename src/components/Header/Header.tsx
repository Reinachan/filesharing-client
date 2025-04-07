import { logo } from "assets";

import { NavBar } from "components/NavBar";

import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.Header}>
      <div>
        <img src={logo} />
        <a href="#main">Skip to content</a>
      </div>
      <NavBar></NavBar>
    </header>
  );
}
