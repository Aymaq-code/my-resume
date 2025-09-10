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
                Welcome to my online CV! <br />
                I’m, a passionate <strong>Frontend Web Developer</strong>. I
                specialize in building modern, responsive, and user-friendly
                websites using HTML, CSS, JavaScript, and React. I love creating
                clean designs with functional development to deliver unique
                digital experiences.{" "}
                <strong>Together, we can turn your ideas into reality.</strong>
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
