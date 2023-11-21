/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "../styles/aboutMeSection.module.css";
import ReactIcon from "../components/icons/standard_icons/ReactIcon";
import HTMLIcon from "../components/icons/standard_icons/HTMLIcon";
import CSSIcon from "../components/icons/standard_icons/CSSIcon";
import TypeScriptIcon from "../components/icons/standard_icons/TypeScriptIcon";
import JavaScriptIcon from "../components/icons/standard_icons/JavaScriptIcon";
import Python from "../components/icons/standard_icons/Python";

const AboutMe = () => {
  return (
    <div id="aboutMe_section" className={styles.section}>
      <div className={styles.titleAndContent}>
        <h2>About Me</h2>
        <div className={styles.mainContent}>
          <p>
            As a relentless and ever-evolving full-stack developer, I am
            committed to continuous learning and creating meaningful impacts
            wherever I go. A proud graduate of the University of British
            Columbia with a degree in computer science, my lifelong passion for
            software development has driven me to excel in full-stack
            development, supported by valuable professional experience gained
            from my Co-op internship at Atomic47. I am dedicated to crafting
            efficient and innovative solutions for every challenge I encounter,
            with a vision to empower those around me. If you share this mindset,
            I invite you to explore my projects and join me on this inspiring
            journey of limitless possibilities.
          </p>
          <img
            src="assets\imgs\1579569910515.jfif"
            alt="img of me"
            className={styles.imgGallary}
          ></img>
        </div>
        <p>Worked with</p>
      </div>
      <div className={styles.listings}>
        <ReactIcon />
        <JavaScriptIcon />
        <HTMLIcon />
        <CSSIcon />
        <TypeScriptIcon />
        <Python />
      </div>
    </div>
  );
};

export default AboutMe;
