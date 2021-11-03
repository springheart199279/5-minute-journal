import React from "react";
import space from "../../assets/sun.jpeg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>5 Min Journal</h1>
        <HeaderButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={space} alt="A nasa picture from their library" />
      </div>
    </React.Fragment>
  );
};

export default Header;
