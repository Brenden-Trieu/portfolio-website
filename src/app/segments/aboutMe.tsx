/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "../styles/aboutMeSection.module.css";
import ReactIcon from "../components/icons/standard_icons/ReactIcon";

const AboutMe = () => {
  return (
    <div id="aboutMe_section" className={styles.section}>
      <h2>About Me</h2>
      <div className={styles.mainContent}>
        <p>
          This is the summary of who I am and that Im a full stack developer who
          is always eager to learn new things
        </p>
        <img
          src="assets\imgs\1579569910515.jfif"
          alt="img of face"
          className={styles.imgGallary}
        ></img>
      </div>
      <div className={styles.listings}>
        <p>Worked with</p>
        <ReactIcon />
      </div>
    </div>
  );
};

export default AboutMe;
