import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
      <header className={s.header}>
        <a href="" className={s.homepageLink}>
          Catsbook
        </a>
      </header>
    )
}

export default Header;