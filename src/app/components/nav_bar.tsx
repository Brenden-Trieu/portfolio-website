import { useState } from "react";
import styles from "../styles/navBar.module.css";

const NavBar = () => {
  const [count, setCount] = useState(1);

  const increaseCount = (increaseAmount: number) => {
    setCount(count + increaseAmount);
    console.log(count);
  };

  return (
    <div className={styles.sticky}>
      <div>
        <button
          onClick={() => {
            increaseCount(3);
          }}
        >
          click pls
        </button>
        <a href={"aboutMe_section"}>About Me</a>
      </div>
      <div>
        <a href={"projects_section"}>Projects</a>
      </div>
      <div>
        <a href="assets/Brenden_Trieu_Resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
};

export default NavBar;
