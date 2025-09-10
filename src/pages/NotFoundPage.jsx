import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="notFoundPage">
      <Navigation />
      <div className="container">
        <div class="notFoundPage__contents">
          <div className="notFoundPage__contents--text">
            <p>
              <span>404</span>
              <span>Oops!</span>
              <span>The page you're looking for doesn't exist.</span>
            </p>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
