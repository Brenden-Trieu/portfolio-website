import styles from "../styles/introSection.module.css";
import LinkedIn from "../components/linked_icons/LinkedIn";
import Email from "../components/linked_icons/Email";
import Github from "../components/linked_icons/Github";
import NavBar from "../components/nav_bar";
//import React, { useState } from "react";

const Intro = () => {
  // const [count, setCount] = useState(1);

  // const increaseCount = (increaseAmount: number) => {
  //   setCount(count + increaseAmount);
  //   console.log(count);
  // };

  return (
    <div className={styles.section}>
      <div className={styles.introText}>
        <h1>Brenden Trieu</h1>
        <h3>Full Stack Developer</h3>
      </div>
      <div className={styles.iconTray}>
        <Email />
        <LinkedIn />
        <Github />
        <a href="assets/Brenden_Trieu_Resume.pdf" target="_blank">
          Resume
        </a>
        {/* <button
          onClick={() => {
            increaseCount(3);
          }}
        >
          click pls
        </button> */}
      </div>
      <NavBar />
    </div>
  );
};

export default Intro;
