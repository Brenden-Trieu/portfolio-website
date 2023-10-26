import styles from "../styles/introSection.module.css";
import LinkedIn from "../components/linked_icons/LinkedIn";
import Email from "../components/linked_icons/Email";
import Github from "../components/linked_icons/Github";

const Intro = () => {
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
      </div>
    </div>
  );
};

export default Intro;
