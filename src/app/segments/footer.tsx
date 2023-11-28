import styles from "../styles/footerSection.module.css";
import LinkedIn from "../components/icons/linked_icons/LinkedIn";
import Email from "../components/icons/linked_icons/Email";
import Github from "../components/icons/linked_icons/Github";

const Footer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.introText}>
        <h2>Made by Brenden Trieu</h2>
        <div className={styles.iconTray}>
          <Email />
          <LinkedIn />
          <Github />
        </div>
      </div>
    </div>
  );
};

export default Footer;
