import React from "react";
import styles from "./CalendarApp.module.css";
import Icon from "../MenuButton/Icon"
const CalendarApp = (props) => {
  
  const openMenu=()=>{
      document.getElementById("myDropdown").classList.toggle('styles.show');
  }
  


  return (
    <button className={styles.button} onClick={openMenu}>
      <span className={styles.icon}>
        <Icon />
        </span>
        
  <div id="myDropdown" className={styles.content}>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>

    </button>
  );
};

export default CalendarApp;
