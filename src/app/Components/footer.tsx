import React from "react";
import styles from "../page.module.css";

function footer() {
  return (
    <footer>
      <div className={styles.footerbox}>
        <p className={styles.copytext}>
          <small>&copy; Copyright 2024, Derana TV News Wave</small>
        </p>
      </div>
    </footer>
  );
}

export default footer;
