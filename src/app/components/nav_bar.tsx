import styles from "../styles/navBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.sticky}>
      <div>
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
