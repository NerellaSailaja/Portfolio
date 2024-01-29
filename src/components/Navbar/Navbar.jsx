import React, { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png"; // Import the menu icon
import closeIcon from "../../assets/nav/closeIcon.png"; // Import the close icon

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon} // Use imported icons directly
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#achi">Achievments</a> {/* Corrected link */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
