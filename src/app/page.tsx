import Intro from "./segments/intro";

const Home = () => {
  return (
    <div>
      <div className="intro">
        <Intro />
      </div>
      <div className="about me"></div>
      <div className="projects"></div>
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
