"use client";
import Intro from "./segments/intro";
import AboutMe from "./segments/aboutMe";
import Projects from "./segments/projects";
import Footer from "./segments/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/pageStyles.module.css";

const Home = () => {
  return (
    <div className={styles.section}>
      <div className="intro">
        <Intro />
      </div>
      <div className="about me">
        <AboutMe />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
