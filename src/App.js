import "./App.css";
import photo from "./images/my_photo.jpeg";
import project2 from "./images/project2.png";
import project4 from "./images/project4.png";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="about_blank"
                  href="https://www.linkedin.com/in/yonghaihuang/"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="about_blank"
                  href="https://github.com/halflemonpie"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="about_blank" href="mailto: dylanyonghaih@gmail.com">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
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

        <div id="about" className="mt-5">
          <img src={photo} alt="Yonghai standing in front of trees." />

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

        <div id="projects" className="d-flex flex-column align-items-center mt-5">
          <h1 className="mb-3">Projects</h1>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center mb-5">
              <a
                target="about_blank"
                href="https://tiny-babka-6d7956.netlify.app/"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://user-images.githubusercontent.com/104039077/169392831-2e14d356-ab61-4bac-90bf-ccaa04082ef8.png" alt="project1"/>
                </div>
              </a>
              <a
                target="about_blank"
                href="https://calm-sherbet-80ad34.netlify.app/"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <img src={project2} alt="project2"/>
                </div>
              </a>
            </div>
            <div className="d-flex">
              <a
                target="about_blank"
                href="https://npm-start-fried-rice-kingdom.netlify.app/"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://user-images.githubusercontent.com/47561235/176779538-558050ed-8d1e-4644-b3c2-575b0c30d1b4.png" alt="project3"/>
                </div>
              </a>
              <a target="about_blank" href="https://boat-fishing.netlify.app/">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={project4} alt="project4"/>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div id="contact" className="mt-5">
          <h1 className="text-center">Contact</h1>
          <div
            id="contact-content"
            className="d-flex align-items-center justify-content-center"
          >
            <span>
              <a
                className="nav-link"
                target="about_blank"
                href="https://github.com/halflemonpie"
              >
                <i class="fa-brands fa-github"></i>
                GitHub
              </a>
            </span>
            <span className="ms-3">
              <a
                className="nav-link"
                target="about_blank"
                href="https://www.linkedin.com/in/yonghaihuang/"
              >
                <i class="fa-brands fa-linkedin"></i>
                LinkedIn
              </a>
            </span>
            <span className="ms-3">
            <a className="nav-link" target="about_blank" href="mailto: dylanyonghaih@gmail.com">
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
