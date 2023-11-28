import styles from "../styles/introSection.module.css";
import LinkedIn from "../components/icons/linked_icons/LinkedIn";
import Email from "../components/icons/linked_icons/Email";
import Github from "../components/icons/linked_icons/Github";
import Resume from "../components/icons/linked_icons/Resume";
import NavBar from "../components/nav_bar";

const Intro = () => {
  return (
    <div className={styles.section}>
      <div className={styles.introText}>
        <h1>Brenden Trieu</h1>
        <h3>Full Stack Developer</h3>
        <div className={styles.iconTray}>
          <Email />
          <LinkedIn />
          <Github />
          <Resume />
        </div>
      </div>

      {/* <NavBar /> */}
    </div>
  );
};

export default Intro;
