import React from "react";
import s from './Header.module.css';

function Header() {
    return (
      <header className={s.header}>
        <a href="" className={s.homepageLink}>
          MySocial!
        </a>
      </header>
    )
}

export default Header;