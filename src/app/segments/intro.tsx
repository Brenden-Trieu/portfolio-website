import styles from "../styles/introSection.module.css";
import LinkedIn from "../components/linked_icons/LinkedIn";
import Email from "../components/linked_icons/Email";
import Github from "../components/linked_icons/Github";

const Intro = () => {
  return (
    <div>
      <div className={styles.introText}>
        <h1>Brenden Trieu</h1>
        <h3>Full Stack Developer</h3>
      </div>
      <div className={styles.iconTray}>
        <Email />
      </div>
      <div className={styles.iconTray}>
        <LinkedIn />
      </div>
      <div className={styles.iconTray}>
        <Github />
      </div>
    </div>
  );
};

export default Intro;
