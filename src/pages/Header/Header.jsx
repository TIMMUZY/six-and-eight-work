import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from "react-router-dom";
import classes from "./Header.module.css";


const Header = () => {
  return (
    <>
      <header>
        <h1>Book Store</h1>
        <span className={classes.icon}>
          <FontAwesomeIcon icon={faCartShopping} flip="horizontal" />
        </span>
      </header>
      <Outlet />
    </>
  );
};

export default Header;