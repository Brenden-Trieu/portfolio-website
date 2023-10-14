import { useEffect, useRef, useState } from "react";
import styles from "../styles/navBar.module.css";

const NavBar = () => {
  const stickyRef = useRef(null);

  return (
    <div>
      <div>
        <link href="aboutMe_section"></link>
      </div>
      <div>
        <a href={"/"}>Projects</a>
      </div>
      <div>
        <a href={"/"}>Resume</a>
      </div>
    </div>
  );
};

export default NavBar;
