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
          As a relentless and ever-evolving full-stack developer, I am committed
          to continuous learning and creating meaningful impacts wherever I go.
          A proud graduate of the University of British Columbia with a degree
          in computer science, my lifelong passion for software development has
          driven me to excel in full-stack development, supported by valuable
          professional experience gained from my Co-op internship at Atomic47. I
          am dedicated to crafting efficient and innovative solutions for every
          challenge I encounter, with a vision to empower those around me. If
          you share this mindset, I invite you to explore my projects and join
          me on this inspiring journey of limitless possibilities.
        </p>
        <img
          src="assets\imgs\1579569910515.jfif"
          alt="img of me"
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
