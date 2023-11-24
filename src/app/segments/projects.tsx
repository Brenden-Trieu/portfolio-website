import styles from "../styles/projectSection.module.css";

const Projects = () => {
  return (
    <div className={styles.section}>
      <h2 id="projects_section" className={styles.subheader}>
        Projects
      </h2>
      <div className="accordion accordion-flush" id="accordionFlush">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Personal Website
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first items accordion body.
              <img
                src="assets\imgs\Personal Website Pic.png"
                alt="Prism Page"
                className={styles.exampleImg}
              ></img>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Prism: Image Recognition
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second items accordion body. Lets imagine this being filled with
              some actual content.
              <img
                src="assets\imgs\Prism Example Pic.png"
                alt="Prism Page"
                className={styles.exampleImg}
              ></img>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Bookworm: Bookstore Database Search Filter
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third items accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Sport: Interactive Chatbot
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlush"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third items accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
