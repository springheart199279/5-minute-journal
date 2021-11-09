import React, {useState} from "react";
import styles from "./CalendarApp.module.css";
import Icon from "../MenuButton/Icon"
const CalendarApp = (props) => {
  
 const[showMenu, setShowMenu]= useState(false);

 const toggleButtonHandler=()=>{
 setShowMenu(prevState=> !prevState);
 };

  return (
    <button className={styles.button} onMouseOver={toggleButtonHandler}>
      <span className={styles.icon}>
        <Icon />
        </span>
        {showMenu && <p>This is new!</p>}
      </button>
  );
};

export default CalendarApp;
