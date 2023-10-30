import { useEffect, useRef, useState } from "react";
import styles from "../styles/navBar.module.css";

const NavBar = () => {
  const stickyRef = useRef(null);

  return (
    <div className={styles.sticky}>
      <div>
        <link href={"aboutMe_section"}>About Me</link>
      </div>
      <div>
        <link href={"projects_section"}>Projects</link>
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
