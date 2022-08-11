import "./App.css";
import photo from "./images/my_photo.jpeg";
import project2 from "./images/project2.png";
import project4 from "./images/project4.png";
import { useState } from "react";

// to-do:
// animation for home page

function App() {
  const [hidden, setHidden] = useState({
    project1: true,
    project2: true,
    project3: true,
    project4: true,
  });

  

  const handleShown = (project) => {
    console.log("showing detail");
    setHidden({ ...hidden, [project]: false });
  };

  const handleHidden = (project) => {
    console.log("hiding detail");
    setHidden({ ...hidden, [project]: true });
  };

  return (
    <div className="App">
      <header>
        <nav id="nav-bar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                target="about_blank"
                href="https://www.linkedin.com/in/yonghaihuang/"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a target="about_blank" href="https://github.com/halflemonpie">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a target="about_blank" href="mailto: dylanyonghaih@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="home" className="container text-left">
          <div className="row">
            <h1>I am</h1>
          </div>
          <div className="row">
            <h1 id="name">Yonghai</h1>
          </div>
          <div className="row">
            <h1>Full-stack Developer</h1>
          </div>
        </div>

        <div id="about">
          <div id="image-container">
            <img src={photo} alt="Yonghai standing in front of trees." />
          </div>
          <div id="about-me">
            <h1>About Me</h1>
            <p>
              I am a full-stack developer. I am enthusiastic to build various
              web pages, games and mobile applications. I specialize in
              different programming languages and frameworks.
            </p>
            <h3>Languages</h3>
            <ul>
              <li>
                <i class="fa-brands fa-html5"></i>html
              </li>
              <li>
                <i class="fa-brands fa-css3-alt"></i>css
              </li>

              <li>
                <i class="fa-brands fa-js"></i>JavaScript
              </li>
              <li>
                <i class="fa-brands fa-python"></i>Python
              </li>
            </ul>
            <h3>Frameworks</h3>
            <ul>
              <li>
                <i class="fa-brands fa-react"></i>React
              </li>
              <li>
                <i class="fa-brands fa-python"></i>Django
              </li>
              <li>
                <i class="fa-brands fa-js"></i>Express
              </li>
            </ul>
            <h3>Database</h3>
            <ul>
              <li>
                <i class="fa-solid fa-database"></i>MongoDB
              </li>
              <li>
                <i class="fa-solid fa-database"></i>PostgreSQL
              </li>
            </ul>
          </div>
        </div>

        <div id="projects">
          <h1>Projects</h1>
          <div id="project-cards">
            <a
              target="about_blank"
              href="https://tiny-babka-6d7956.netlify.app/"
            >
              <div
                className="project-card"
                id="project1"
                style={{
                  background:
                    "url(https://user-images.githubusercontent.com/104039077/169392831-2e14d356-ab61-4bac-90bf-ccaa04082ef8.png)",
                  backgroundSize: "110%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onMouseEnter={() => handleShown("project1")}
                onMouseLeave={() => handleHidden("project1")}
              >
                <div className="card-detail" hidden={hidden.project1}>
                  <h1>Spaceman Invader</h1>
                  <p>A mini spaceman game using HTML, CSS, and JavaScript.</p>
                </div>
              </div>
            </a>
            <a
              target="about_blank"
              href="https://calm-sherbet-80ad34.netlify.app/"
            >
              <div
                className="project-card"
                id="project2"
                style={{
                  backgroundImage: `url(${project2})`,
                  backgroundSize: "115%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onMouseEnter={() => handleShown("project2")}
                onMouseLeave={() => handleHidden("project2")}
              >
                <div className="card-detail" hidden={hidden.project2}>
                  <h1>Shark Sale</h1>
                  <p>
                    A product landing page using React, Bootstrap, and Restful
                    APIs.
                  </p>
                </div>
              </div>
            </a>
            <a
              target="about_blank"
              href="https://npm-start-fried-rice-kingdom.netlify.app/"
              id="project3"
            >
              <div
                className="project-card"
                id="project3"
                style={{
                  backgroundImage: `url(https://user-images.githubusercontent.com/47561235/176779538-558050ed-8d1e-4644-b3c2-575b0c30d1b4.png)`,
                  backgroundSize: "120%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onMouseEnter={() => handleShown("project3")}
                onMouseLeave={() => handleHidden("project3")}
              >
                <div className="card-detail" hidden={hidden.project3}>
                  <h1>Ground Up</h1>
                  <p>
                    A event tracking app that add/delete to-dos with React as
                    frontend, Express & MongoDB as backend.
                  </p>
                </div>
              </div>
            </a>
            <a
              target="about_blank"
              href="https://boat-fishing.netlify.app/"
              id="project4"
            >
              {/* <div>
                <img src={project4} alt="project4" />
              </div> */}
              <div
                className="project-card"
                id="project4"
                style={{
                  backgroundImage: `url(${project4})`,
                  backgroundSize: "110%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onMouseEnter={() => handleShown("project4")}
                onMouseLeave={() => handleHidden("project4")}
              >
                <div className="card-detail" hidden={hidden.project4}>
                  <h1>Fishing</h1>
                  <p>
                    A fishing game that can view your fish collection. <br />Frontend:
                    React, Tailwind. <br /> Backend: Django, PostgreSQL.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div id="contact">
          <h1>Contact</h1>
          <div id="contact-content">
            <div id="first-line">
              <span id="github">
                <a target="about_blank" href="https://github.com/halflemonpie">
                  <i class="fa-brands fa-github"></i>
                  GitHub
                </a>
              </span>
              <span>
                <a
                  target="about_blank"
                  href="https://www.linkedin.com/in/yonghaihuang/"
                >
                  <i class="fa-brands fa-linkedin"></i>
                  LinkedIn
                </a>
              </span>
            </div>

            <span>
              <a target="about_blank" href="mailto: dylanyonghaih@gmail.com">
                <i class="fa-solid fa-envelope"></i>
                dylanyonghaih@gmail
              </a>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
