import Footer from "../layouts/Footer";
import Navigation from "../layouts/Navigation";
import Loader from "../messages/Loader";
import ErrorMsg from "../messages/ErrorMsg";
import { useResume } from "../context/ResumeContext";

export default function ProjectsPage() {
  const { loading, error, projects } = useResume();

  if (loading) return <Loader />;
  if (error) return <ErrorMsg />;
  return (
    <main className="projectsPage">
      <Navigation />
      <div className="container">
        <h1>Projects</h1>
        <div className="projectsPage__contents">
          {/* NO 1 */}
          {projects.map((project) => (
            <div className="projectsPage__contents--box" key={project.id}>
              <div className="left">
                <h2>{project.name}</h2>
                <p>{project.discription}</p>
                <ul>
                  <h4>Technologeis Used:</h4>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <a
                  href={`${project.live}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to see the project live
                </a>
              </div>
              <div className="right">
                <img src={project.image} alt="coffee app" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
