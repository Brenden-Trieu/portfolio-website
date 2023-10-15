import { useEffect, useRef, useState } from "react";
import styles from "../styles/navBar.module.css";

const NavBar = () => {
  const stickyRef = useRef(null);

  return (
    <div>
      <div>
        <link href={"aboutMe_section"}></link>
      </div>
      <div>
        <link href={"projects_section"}></link>
      </div>
      <div>
        <link href={"resume_link"}></link>
      </div>
    </div>
  );
};

export default NavBar;
