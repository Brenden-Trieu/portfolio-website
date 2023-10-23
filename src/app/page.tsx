import Intro from "./segments/intro";
import AboutMe from "./segments/aboutMe";
import Projects from "./segments/projects";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <div className="intro">
        <Intro />
      </div>
      <div className="about me">
        <AboutMe />
      </div>
      <div className="projects">
        <Projects />
      </div>

      <a href="../assets/Brenden_Trieu_Resume.pdf" target="_blank">
        Resume
      </a>
    </div>
  );
};

export default Home;
