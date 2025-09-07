import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

export default function homePage() {
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
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
            <div className="links">
              <ul>
                <li>
                  <Link>Resume</Link>
                </li>
                <li>
                  <Link>Project</Link>
                </li>
                <li>
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
