import Intro from "./segments/intro";
import AboutMe from "./segments/aboutMe";
import Projects from "./segments/projects";

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

      <button type="button" className="btn btn-outline-primary">
        Primary
      </button>
      <a href="../assets/Brenden_Trieu_Resume.pdf" target="_blank">
        Resume
      </a>
    </div>
  );
};

export default Home;
