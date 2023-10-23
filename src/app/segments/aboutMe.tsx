import styles from "../styles/aboutMeSection.module.css";

const AboutMe = () => {
  return (
    <div className={styles.section}>
      <h2>About Me</h2>
      <div>
        <p>
          This is the summary of who I am and that Im a full stack developer who
          is always eager to learn new things
        </p>
      </div>
      <div>
        <p>Worked with</p>
      </div>
    </div>
  );
};

export default AboutMe;
