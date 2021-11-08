import React from "react";
import styles from "./DailyDump.module.css";

const DailyDump = () => {
  return (
    <div className={styles.card}>
      <textarea rows="10" type="text" className={styles.textarea} placeholder="Write your thoughts down..."/>
       
      </div>
  );
};

export default DailyDump;
