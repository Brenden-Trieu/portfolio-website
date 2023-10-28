import { useEffect, useRef, useState } from "react";
import styles from "../styles/navBar.module.css";

const NavBar = () => {
  const stickyRef = useRef(null);

  return (
    <div className={styles.sticky}>
      <div>
        <link href={"aboutMe_section"}></link>
      </div>
      <div>
        <link href={"projects_section"}></link>
      </div>
      <div>
        <a href="../../assets/imgs/Brenden Trieu Resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
};

export default NavBar;
