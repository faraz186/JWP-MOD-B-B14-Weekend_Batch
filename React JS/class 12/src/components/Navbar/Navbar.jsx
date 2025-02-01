import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className={styles.navbarBox}>
        <li>
          <NavLink className={styles.navbarBoxList} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navbarBoxList} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navbarBoxList} to="/user">
            User
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navbarBoxList} to="/register_form">
            Form
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
