import { Link, useNavigate } from "react-router-dom";
import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="homePage">
      <Navigation />
      <div className="container">
        <div className="homePage__content">
          <div className="homePage__content--left"></div>
          <div className="homePage__content--right">
            <div className="aboutMe">
              <h1>Hello</h1>
              <h2>A Bit About Me</h2>
              <p>
                Welcome to my online CV! I specialize in web development and
                have a passion for creating unique and innovative digital
                experiences. Let's work together to bring your vision to life.
              </p>
            </div>
            <div className="links">
              <ul>
                <li onClick={() => navigate("/resume")}>
                  <Link to="/resume">Resume</Link>
                </li>
                <li onClick={() => navigate("/projects")}>
                  <Link>Project</Link>
                </li>
                <li onClick={() => navigate("/contact")}>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
