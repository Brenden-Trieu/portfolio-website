import styles from "../styles/projectSection.module.css";
import Github from "../components/icons/linked_icons/Github";
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
              <div className={styles.accordionContent}>
                <p>
                  A personal project that serves as a showcase of my web
                  development capabilities. Leveraging Next.js and Bootstrap
                  elements provides an accessible overview of my identity and
                  past work.
                  <br />
                  <br />
                  Continuously evolving, the website will feature updates with
                  new projects to demonstrate and elaborate on my skills.
                  <br />
                  <br />
                  <a
                    href="https://github.com/Brenden-Trieu/portfolio-website"
                    target="_blank"
                  >
                    Click here for the repo
                  </a>
                </p>
                <img
                  src="assets\imgs\Personal Website Pic.png"
                  alt="Prism Page"
                  className={styles.exampleImg}
                ></img>
              </div>
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
              <div className={styles.accordionContent}>
                <p>
                  Crafted a video parser and image recognition platform,
                  allowing users to upload videos and a reference image,
                  generating a curated array of selectable images exportable to
                  a CSV file. This file captures both the image ID and
                  timestamp.
                  <br />
                  <br />
                  The application seamlessly integrates Next.js with Material UI
                  for the front end and relies on Django for the back end.
                  Leveraging custom Material UI components, the front end
                  achieves both reusability and a polished, user-friendly
                  interface.
                  <br />
                  <br />
                  <a
                    href="https://github.com/Rosen-Team-B/Rosen_B_2"
                    target="_blank"
                  >
                    Click here for the repo
                  </a>
                </p>
                <img
                  src="assets\imgs\Prism Example Pic.png"
                  alt="Prism Page"
                  className={styles.exampleImg}
                ></img>
              </div>
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
              <div className={styles.accordionContent}>
                <p>
                  An independent university project completed within two months,
                  employing primarily PHP and jQuery for asynchronous database
                  searches based on a search filter. The project predominantly
                  utilizes JavaScript, executing SQL queries to retrieve book
                  titles.
                  <br />
                  <br />
                  Please note: The project cannot be run as the database is no
                  longer online, but the code is available for exploration.
                  <br />
                  <br />
                  <a
                    href="https://github.com/UBCO-COSC-264-Winter-2019-T2/the-project-Brenden-Trieu"
                    target="_blank"
                  >
                    Click here for the repo
                  </a>
                </p>
              </div>
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
              <div className={styles.accordionContent}>
                <p>
                  A collaborative university course project initiated with a
                  team of four but transitioned to independent work in the final
                  stages, spanning approximately three months. The project is an
                  interactive sports-themed chatbot designed using Python. After
                  collaborating with a team of three, I extended the bot&#39;s
                  capabilities, enabling multilingual conversations, translation
                  of phrases, explanations sourced from Wikipedia, and reporting
                  of sports statistics.
                  <br />
                  <br />
                  Please note: The project is configured in a specific manner
                  and may require further investigation for successful execution
                  <br />
                  <br />
                  <a
                    href="https://github.com/Brenden-Trieu/COSC-310-Individual-Project"
                    target="_blank"
                  >
                    Click here for the repo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
